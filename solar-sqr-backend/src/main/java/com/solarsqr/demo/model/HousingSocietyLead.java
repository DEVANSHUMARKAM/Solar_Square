package com.solarsqr.demo.model;

import jakarta.persistence.*;
import lombok.Getter;

@Getter
@Entity
@Table(name = "housing_society_leads")
public class HousingSocietyLead {

    // Getters
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String societyName;
    private String pincode;
    private String whatsapp;
    private String bill;
    private String designation;
    private String approvalStatus;

    // Setters
    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setSocietyName(String societyName) {
        this.societyName = societyName;
    }

    public void setPincode(String pincode) {
        this.pincode = pincode;
    }

    public void setWhatsapp(String whatsapp) {
        this.whatsapp = whatsapp;
    }

    public void setBill(String bill) {
        this.bill = bill;
    }

    public void setDesignation(String designation) {
        this.designation = designation;
    }

    public void setApprovalStatus(String approvalStatus) {
        this.approvalStatus = approvalStatus;
    }
}
