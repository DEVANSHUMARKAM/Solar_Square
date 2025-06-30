package com.solarsqr.demo.model;

import jakarta.persistence.*;
import lombok.Getter;

@Getter
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

    @Column(name = "avg_monthly_bill") // 👈 This ensures correct mapping
    private String avgBill;

    // Setters
    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public void setWhatsapp(String whatsapp) {
        this.whatsapp = whatsapp;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public void setPinCode(String pinCode) {
        this.pinCode = pinCode;
    }

    public void setAvgBill(String avgBill) {
        this.avgBill = avgBill;
    }

    // Getters (optional if you use Lombok's @Getter)
}

