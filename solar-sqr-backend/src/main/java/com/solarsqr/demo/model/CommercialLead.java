package com.solarsqr.demo.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "commercial_leads")
public class CommercialLead {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String companyName;

    private String whatsapp;

    private String city;

    private String pinCode;

    private String avgBill;
}
