package com.ruet.sac.util;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Map;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class EmailDetailsUtil {

    private String recipient;
    private String subject;
    private String template;
    private Map<String, Object> properties;
}