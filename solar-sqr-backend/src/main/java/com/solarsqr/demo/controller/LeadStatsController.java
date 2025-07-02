package com.solarsqr.demo.controller;

import com.solarsqr.demo.repository.CommercialLeadRepository;
import com.solarsqr.demo.repository.HousingSocietyLeadRepository;
import com.solarsqr.demo.repository.ResidentialLeadRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/stats")
@CrossOrigin("*")
public class LeadStatsController {

    @Autowired
    private CommercialLeadRepository commercialRepo;

    @Autowired
    private HousingSocietyLeadRepository housingRepo;

    @Autowired
    private ResidentialLeadRepository residentialRepo;

    @GetMapping("/counts")
    public Map<String, Long> getLeadCounts() {
        long commercialCount = commercialRepo.count();
        long housingCount = housingRepo.count();
        long residentialCount = residentialRepo.count();
        long total = commercialCount + housingCount + residentialCount;

        Map<String, Long> response = new HashMap<>();
        response.put("total", total);
        response.put("commercial", commercialCount);
        response.put("housing", housingCount);
        response.put("residential", residentialCount);
        return response;
    }
}
