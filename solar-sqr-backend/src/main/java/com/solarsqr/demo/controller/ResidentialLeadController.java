package com.solarsqr.demo.controller;

import com.solarsqr.demo.model.ResidentialLead;
import com.solarsqr.demo.service.ResidentialLeadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/residential")
@CrossOrigin(origins = "*") // Allow frontend to connect
public class ResidentialLeadController {

    @Autowired
    private ResidentialLeadService service;

    @PostMapping("/submit")
    public ResponseEntity<String> submitLead(@RequestBody ResidentialLead lead) {
        service.saveLead(lead);
        return ResponseEntity.ok("Residential lead saved successfully.");
    }

    @GetMapping("/all")
    public List<ResidentialLead> getAllLeads() {
        return service.getAllLeads();
    }

}
