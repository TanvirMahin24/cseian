/*
 * Copyright (c) 2022.
 * Document   : AuthenticationResponse.java
 * Created on : 7/9/22, 10:55 AM
 * Author     : NAHID RUET CSE'18
 */

package com.ruet.sac.security;

import java.io.Serializable;

public class AuthenticationResponse implements Serializable {

    private final String jwt;

    public AuthenticationResponse(String jwt) {
        this.jwt = jwt;
    }

    public String getJwt() {
        return jwt;
    }
}