package com.iot2ndproject.mobilityhub.config;

import com.example.springshop.customer.security.CustomerSecurityDetailService;
import com.example.springshop.customer.security.MyAuthenticationProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity(debug = true)
@RequiredArgsConstructor
public class JWTSecurityConfig {
    private final CustomerSecurityDetailService detailService;
    @Bean
    public PasswordEncoder passwordEncoder(){
        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }
    @Bean
    public AuthenticationProvider authenticationProvider(){
        return new MyAuthenticationProvider(passwordEncoder(),detailService);
    }
    @Bean
    public SecurityFilterChain chain(HttpSecurity http) throws Exception{
        http.csrf(csrf->csrf.disable())
                .authorizeHttpRequests(auth-> auth
//                        .requestMatchers("/customer/create").hasAnyRole("ADMIN")
                        .requestMatchers("product/**").hasAnyRole("USER","ADMIN")
                        .anyRequest().permitAll())

                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .authenticationProvider(authenticationProvider());
        return http.build();

    }

    @Bean
    public UserDetailsService userDetailsService(){
        UserDetails user =  User.withDefaultPasswordEncoder().password("1234").username("user").roles("USER").build();
        UserDetails admin = User.withDefaultPasswordEncoder().username("admin").password("1234").roles("ADMIN").build();
        return new InMemoryUserDetailsManager(user,admin);
    }
}
