package com.ruet.sac.security;

import com.ruet.sac.entity.Member;
import com.ruet.sac.repository.AlumnusRepository;
import com.ruet.sac.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import static java.lang.Integer.parseInt;

@Service
public class UserAuthService implements UserDetailsService {

    @Autowired
    private AlumnusRepository userRepository;

    @Autowired
    RoleRepository roleRepository;

    @Transactional(readOnly = true)
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Member user = userRepository.getReferenceById(parseInt(username));
        if (user == null)
            throw new UsernameNotFoundException(username);

        Boolean lockStatus=false;
        if(user.getUserRole()==null) lockStatus = true;
        return org.springframework.security.core.userdetails.User.builder()
                .username(username)
                .password(user.getPassword())
                .authorities("USER")
                .accountLocked(lockStatus)
                .roles("USER")
                .build();
    }
}
