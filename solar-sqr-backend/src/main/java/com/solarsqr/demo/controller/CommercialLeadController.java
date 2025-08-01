package com.solarsqr.demo.controller;

import com.solarsqr.demo.model.CommercialLead;
import com.solarsqr.demo.service.CommercialLeadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/commercial")
@CrossOrigin("*")
public class CommercialLeadController {

    @Autowired
    private CommercialLeadService service;

    @PostMapping("/submit")
    public CommercialLead submitLead(@RequestBody CommercialLead lead) {
        return service.saveLead(lead);
    }
    @GetMapping("/all")
    public List<CommercialLead> getAllLeads() {
        return service.getAllLeads();
    }

}
