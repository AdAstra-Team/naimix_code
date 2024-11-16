package org.example.clients;

import org.example.models.TaroCard;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Component
public class TaroClient {

    private final WebClient webClient;

    @Value("${tarot.api.base-url}")
    private String baseUrl;

    public TaroClient(WebClient.Builder webClientBuilder) {
        this.webClient = webClientBuilder.baseUrl("https://tarotapi.dev/api/v1").build();
    }

    public TaroCard getCardByValue(int value) {
        String url = "/cards/search?value=" + value;

        Map<String, Object> response = webClient.get()
                .uri(url)
                .retrieve()
                .bodyToMono(Map.class)
                .block();

        if (response == null || !response.containsKey("cards")) {
            throw new IllegalStateException("API response is invalid or empty.");
        }

        List<Map<String, Object>> cards = (List<Map<String, Object>>) response.get("cards");
        if (cards.isEmpty()) {
            throw new IllegalArgumentException("No card found for value: " + value);
        }

        return mapToTaroCard(cards.get(0));
    }

    public List<TaroCard> getAllCards() {
        String url = "/cards";

        Map<String, Object> response = webClient.get()
                .uri(url)
                .retrieve()
                .bodyToMono(Map.class)
                .block();

        if (response == null || !response.containsKey("cards")) {
            throw new IllegalStateException("API response is invalid or empty.");
        }

        List<Map<String, Object>> cards = (List<Map<String, Object>>) response.get("cards");
        List<TaroCard> taroCards = new ArrayList<>();

        for (Map<String, Object> cardData : cards) {
            taroCards.add(mapToTaroCard(cardData));
        }

        return taroCards;
    }

    private TaroCard mapToTaroCard(Map<String, Object> cardData) {
        TaroCard taroCard = new TaroCard();
        taroCard.setType((String) cardData.get("type"));
        taroCard.setNameShort((String) cardData.get("name_short"));
        taroCard.setName((String) cardData.get("name"));
        taroCard.setValue((String) cardData.get("value"));
        taroCard.setValueInt((Integer) cardData.get("value_int"));
        taroCard.setMeaningUp((String) cardData.get("meaning_up"));
        taroCard.setMeaningRev((String) cardData.get("meaning_rev"));
        taroCard.setDesc((String) cardData.get("desc"));
        return taroCard;
    }
}