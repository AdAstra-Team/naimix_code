package org.example.services;

import org.example.models.dao.CandidateRequest;
import org.springframework.stereotype.Service;

@Service
public class DestinyComputeService {
    public int getDestinyByType(int type, CandidateRequest candidateRequest){
        if(type == 1){
            return (candidateRequest.getSign() * 12) / 52;
        }
        return 2;
    }
}
