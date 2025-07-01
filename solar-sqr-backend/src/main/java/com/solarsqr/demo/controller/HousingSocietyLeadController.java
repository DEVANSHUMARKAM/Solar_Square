package com.solarsqr.demo.controller;

import com.solarsqr.demo.model.HousingSocietyLead;
import com.solarsqr.demo.service.HousingSocietyLeadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/housing")  // ✅ Matches frontend
@CrossOrigin("*")
public class HousingSocietyLeadController {

    @Autowired
    private HousingSocietyLeadService service;

    @PostMapping("/submit")
    public ResponseEntity<String> submitLead(@RequestBody HousingSocietyLead lead) {
        service.saveLead(lead);
        return ResponseEntity.ok("Housing society lead submitted successfully");
    }

    @GetMapping("/all")
    public List<HousingSocietyLead> getAllLeads() {
        return service.getAllLeads();
    }

}
