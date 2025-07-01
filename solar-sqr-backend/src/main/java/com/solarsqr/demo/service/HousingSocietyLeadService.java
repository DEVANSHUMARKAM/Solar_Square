package com.solarsqr.demo.service;

import com.solarsqr.demo.model.HousingSocietyLead;
import com.solarsqr.demo.repository.HousingSocietyLeadRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HousingSocietyLeadService {

    @Autowired
    private HousingSocietyLeadRepository repository;

    public HousingSocietyLead saveLead(HousingSocietyLead lead) {
        return repository.save(lead);
    }

    public List<HousingSocietyLead> getAllLeads() {
        return repository.findAll();
    }

}
