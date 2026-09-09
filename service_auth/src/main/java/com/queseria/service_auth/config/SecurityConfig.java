package com.queseria.service_auth.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity 
public class SecurityConfig 
{
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception // <-- CAMBIADO EL NOMBRE AQUÍ
    {
        return http
            .csrf(csrf -> csrf.disable())
            .cors(cors -> cors.disable()) // <-- AGREGA ESTA LÍNEA TAMBIÉN
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/auth/**").permitAll()
                .anyRequest().authenticated()
            ).build();
    }

    @Bean
    public PasswordEncoder passwordEncoder()
    {
        return new BCryptPasswordEncoder();
    }
}