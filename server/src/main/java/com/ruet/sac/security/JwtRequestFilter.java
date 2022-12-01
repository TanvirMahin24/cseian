package com.ruet.sac.security;

import com.ruet.sac.util.JwtUtil;
import org.json.JSONObject;
import io.jsonwebtoken.ExpiredJwtException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@Component
public class JwtRequestFilter extends OncePerRequestFilter {

    @Autowired
    private UserDetailsService userDetailsService;

    @Autowired
    private JwtUtil jwtUtil;

    Map<String,Object> returnObj = new HashMap<>();

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain)
            throws ServletException, IOException {

        String URL = request.getRequestURI().toString();

        final String authorizationHeader = request.getHeader("Authorization");

        if(URL.equals("/authenticate")|| URL.equals("/resource/images") || URL.equals("/register") || URL.equals("/verifyEmail") || URL.equals("/forgotPassword"))
        {
            chain.doFilter(request, response);
            return;
        }

        String username = null;
        String jwt = null;

        if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
            try
            {
                jwt = authorizationHeader.substring(7);
                if(jwt == null || jwt.length()==0)
                {
                    returnObj.put("ResponseCode", "0");
                    returnObj.put("Response", "Failed");
                    returnObj.put("ResponseData", "JWT Token is Empty");
                    JSONObject json = new JSONObject(returnObj);
                    response.setContentType("application/json");
                    response.getWriter().write(json.toString());
                    response.getWriter().close();
                    return;
                }

                username = jwtUtil.extractUsername(jwt);
                logger.warn(username);
            }catch (ExpiredJwtException e) {
                returnObj.put("ResponseCode", "2");
                returnObj.put("Response", "Failed");
                returnObj.put("ResponseData", "JWT Token has expired");
                JSONObject json = new JSONObject(returnObj);
                response.setContentType("application/json");
                response.getWriter().write(json.toString());
                response.getWriter().close();
                return;
            }

        }
        else
        {
            returnObj.put("ResponseCode", "0");
            returnObj.put("Response", "Failed");
            returnObj.put("ResponseData","JWT Token does not begin with Bearer String ");
            JSONObject json = new JSONObject(returnObj);
            response.setContentType("application/json");
            response.getWriter().write(json.toString());
            response.getWriter().close();
            return;
        }


        if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {

            UserDetails userDetails = this.userDetailsService.loadUserByUsername(username);

            if (jwtUtil.validateToken(jwt, userDetails)) {

                UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(
                        userDetails, null, userDetails.getAuthorities());
                usernamePasswordAuthenticationToken
                        .setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
            }
        }
        chain.doFilter(request, response);
    }

}