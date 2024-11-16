package org.example.services;

import org.example.clients.TaroClient;
import org.example.models.TaroCard;
import org.example.models.TaroSequence;
import org.example.models.entities.Candidate;
import org.example.models.entities.Project;
import org.example.models.entities.Team;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Random;

@Service
public class TaroService {
    private static final int TOTAL_CARD_COUNT = 10;
    private final TaroClient taroClient;

    @Autowired
    public TaroService(TaroClient taroClient) {
        this.taroClient = taroClient;
    }

    public TaroSequence createSequence(Candidate candidate, Team team, int length) {
        TaroCard[] seq = new TaroCard[length];
        Random random = new Random(generateTotalDestiny(candidate, team));
        for (int i = 0; i < length; i++) {
            int cardValue = random.nextInt(0, TOTAL_CARD_COUNT);
            seq[i] = taroClient.getCardByValue(cardValue);
        }
        return new TaroSequence(seq, candidate, team);
    }

    private int generateTotalDestiny(Candidate candidate, Team team) {
        return candidate.getDestiny() ^ team.getDestiny();
    }

    public List<TaroCard> getAllCards() {
        return taroClient.getAllCards();
    }
}