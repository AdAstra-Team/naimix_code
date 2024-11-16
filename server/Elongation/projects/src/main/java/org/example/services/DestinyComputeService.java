package org.example.services;

import org.example.models.dao.CandidateRequest;
import org.example.models.entities.Candidate;
import org.example.models.entities.Team;
import org.springframework.stereotype.Service;

import java.util.TreeMap;

@Service
public class DestinyComputeService {
    public int getDestinyByType(int type, CandidateRequest candidateRequest){
        if(type == 1){
            return (candidateRequest.getSign() * 12) / 52;
        }
        return 2;
    }

    public Integer compareToCundidatesForTeam(Candidate candidateFirst, Candidate candidateSecond, Team team){
        var map = new TreeMap<Integer, Integer>();

        for(var sign : team.getSigns()){
            map.put(sign, map.getOrDefault(sign, 0) + 1);
        }

        return map.get(candidateSecond.getSign()).compareTo(map.get(candidateFirst.getSign()));
    }
}
