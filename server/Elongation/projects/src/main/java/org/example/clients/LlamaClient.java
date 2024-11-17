package org.example.clients;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

@Service
public class LlamaClient {

    private final WebClient webClient;

    @Value("${llama.api.token}")
    private String apiToken;

    public LlamaClient() {
        this.webClient = WebClient.builder()
                .baseUrl("https://api-inference.huggingface.co/models/huggyllama/llama-7b")
                .defaultHeader("Authorization", "Bearer " + apiToken)
                .build();
    }

    public String generateText(String inputText) {
        var requestBody = new HuggingFaceRequest(inputText);

        return this.webClient.post()
                .bodyValue(requestBody)
                .retrieve()
                .bodyToMono(String.class)
                .onErrorResume(e -> {
                    e.printStackTrace();
                    return Mono.just("Error occurred: " + e.getMessage());
                })
                .block();
    }

    private static class HuggingFaceRequest {
        private String inputs;

        public HuggingFaceRequest(String inputs) {
            this.inputs = inputs;
        }

        public String getInputs() {
            return inputs;
        }

        public void setInputs(String inputs) {
            this.inputs = inputs;
        }
    }
}
