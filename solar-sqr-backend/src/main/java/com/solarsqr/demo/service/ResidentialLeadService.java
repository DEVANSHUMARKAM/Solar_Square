package com.solarsqr.demo.service;

import com.solarsqr.demo.model.ResidentialLead;
import com.solarsqr.demo.repository.ResidentialLeadRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ResidentialLeadService {

    @Autowired
    private ResidentialLeadRepository repository;

    public ResidentialLead saveLead(ResidentialLead lead) {
        return repository.save(lead);
    }
}
