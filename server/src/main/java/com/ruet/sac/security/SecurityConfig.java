package com.ruet.sac.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.crypto.password.Pbkdf2PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    UserDetailsService userDetailsService;

    @Autowired
    private JwtRequestFilter jwtRequestFilter;

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception
    {
        auth.userDetailsService(userDetailsService);
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception
    {
        http.csrf().disable().cors().and()
                .authorizeRequests()
                .antMatchers("/authenticate","/register","/verifyEmail","/resendVerifyEmail","/forgotPassword","/resource/images","/dashboard","/dashboardMembers").permitAll()
                .antMatchers("/getAllPendingAlumniRegistration","/getAllFilteredPendingAlumniRegistration",
                        "/getPendingAlumniRegistrationById","/approveAlumniRegistrationTransaction","/getAllPendingEventsRegistration",
                        "/getAllFilteredPendingEventsRegistration","/getPendingEventRegistrationById","/approveTransaction",
                        "/pendingMemberList","/filteredPendingMemberList","/pendingMember","/activePendingMember",
                        "/memberList","/filteredMemberList","/getMember","/banMember","/assignRoleToMember").hasAnyRole("FACULTY","ADMIN" )
                .anyRequest().authenticated().and().
                exceptionHandling().and().sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS);
        http.addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class);
        // .and().formLogin();
    }
    @Override
    @Bean
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    @Bean
    public PasswordEncoder getPasswordEncoder()
    {
        return new Pbkdf2PasswordEncoder();
    }
}
