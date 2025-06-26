package com.solarsqr.demo.repository;

import com.solarsqr.demo.model.CommercialLead;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommercialLeadRepository extends JpaRepository<CommercialLead, Long> {
}
