package com.solarsqr.backend.controller;

import com.solarsqr.demo.model.HousingSocietyLead;
import com.solarsqr.demo.service.HousingSocietyLeadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/housing-society")
@CrossOrigin("*")
public class HousingSocietyLeadController {

    @Autowired
    private HousingSocietyLeadService service;

    @PostMapping("/submit")
    public HousingSocietyLead submitLead(@RequestBody HousingSocietyLead lead) {
        return service.saveLead(lead);
    }
}
