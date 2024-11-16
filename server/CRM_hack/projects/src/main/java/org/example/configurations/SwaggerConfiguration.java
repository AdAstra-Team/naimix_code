package org.example.configurations;

import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.security.SecurityRequirement;
import io.swagger.v3.oas.models.security.SecurityScheme;
import io.swagger.v3.oas.models.servers.Server;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class SwaggerConfiguration {
    @Value("${swagger.server.url:#{null}}")
    private String swaggerServerUrl;

    @Bean
    public OpenAPI customOpenAPI() {
        OpenAPI openAPI = new OpenAPI()
                .servers(List.of(
                        new Server().url("http://194.87.186.59:8082").description("Production Server"),
                        new Server().url("http://localhost:8082").description("Local Development Server")
                ))
                .addSecurityItem(new SecurityRequirement().addList("bearerAuth"))
                .components(new Components()
                        .addSecuritySchemes("bearerAuth", new SecurityScheme()
                                .type(SecurityScheme.Type.HTTP)
                                .scheme("bearer")
                                .bearerFormat("JWT")
                                .in(SecurityScheme.In.HEADER)
                                .name("MyAuthorization")))
                .info(new Info()
                        .title("Elongation API ")
                        .version("1.0")
                        .description("From Ad Astra Team Inc."));

        // Если серверный URL определён в properties, добавляем его
        if (swaggerServerUrl != null) {
            openAPI.addServersItem(new Server().url(swaggerServerUrl));
        }

        return openAPI;
    }
}