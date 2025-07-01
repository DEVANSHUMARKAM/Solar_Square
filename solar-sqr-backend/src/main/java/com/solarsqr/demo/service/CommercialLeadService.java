package com.solarsqr.demo.service;

import com.solarsqr.demo.model.CommercialLead;
import com.solarsqr.demo.repository.CommercialLeadRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommercialLeadService {

    @Autowired
    private CommercialLeadRepository repository;

    public CommercialLead saveLead(CommercialLead lead) {
        return repository.save(lead);
    }

    public List<CommercialLead> getAllLeads() {
        return repository.findAll();
    }

}
