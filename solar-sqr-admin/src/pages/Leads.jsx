import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const Leads = () => {
  const [housingLeads, setHousingLeads] = useState([]);
  const [commercialLeads, setCommercialLeads] = useState([]);
  const [residentialLeads, setResidentialLeads] = useState([]);

  useEffect(() => {
    fetchHousingLeads();
    fetchCommercialLeads();
    fetchResidentialLeads();
  }, []);

  const fetchHousingLeads = async () => {
    try {
      const res = await axios.get('http://localhost:8080/api/housing/all');
      setHousingLeads(res.data);
    } catch (err) {
      console.error('Error fetching housing leads:', err);
    }
  };

  const fetchCommercialLeads = async () => {
    try {
      const res = await axios.get('http://localhost:8080/api/commercial/all');
      setCommercialLeads(res.data);
    } catch (err) {
      console.error('Error fetching commercial leads:', err);
    }
  };

  const fetchResidentialLeads = async () => {
    try {
      const res = await axios.get('http://localhost:8080/api/residential/all');
      setResidentialLeads(res.data);
    } catch (err) {
      console.error('Error fetching residential leads:', err);
    }
  };

  return (
    <Box p={3}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Leads
      </Typography>

      {/* Housing Society Leads */}
      <Typography variant="h6" gutterBottom mt={4}>
        Housing Society Leads
      </Typography>
      <DataGrid
        autoHeight
        rows={housingLeads}
        columns={[
          { field: 'id', headerName: 'ID', width: 70 },
          { field: 'name', headerName: 'Name', width: 130 },
          { field: 'societyName', headerName: 'Society Name', width: 180 },
          { field: 'pincode', headerName: 'Pincode', width: 100 },
          { field: 'whatsapp', headerName: 'WhatsApp', width: 150 },
          { field: 'bill', headerName: 'Bill', width: 100 },
          { field: 'designation', headerName: 'Designation', width: 130 },
          { field: 'approvalStatus', headerName: 'Approval Status', width: 130 },
        ]}
        pageSize={5}
        getRowId={(row) => row.id}
      />

      {/* Commercial Leads */}
      <Typography variant="h6" gutterBottom mt={4}>
        Commercial Leads
      </Typography>
      <DataGrid
        autoHeight
        rows={commercialLeads}
        columns={[
          { field: 'id', headerName: 'ID', width: 70 },
          { field: 'name', headerName: 'Name', width: 130 },
          { field: 'companyName', headerName: 'Company Name', width: 180 },
          { field: 'whatsapp', headerName: 'WhatsApp', width: 150 },
          { field: 'city', headerName: 'City', width: 130 },
          { field: 'pinCode', headerName: 'Pin Code', width: 100 },
          { field: 'avgBill', headerName: 'Avg Monthly Bill', width: 150 },
        ]}
        pageSize={5}
        getRowId={(row) => row.id}
      />

      {/* Residential Leads */}
      <Typography variant="h6" gutterBottom mt={4}>
        Residential Leads
      </Typography>
      <DataGrid
        autoHeight
        rows={residentialLeads}
        columns={[
          { field: 'id', headerName: 'ID', width: 70 },
          { field: 'name', headerName: 'Name', width: 130 },
          { field: 'city', headerName: 'City', width: 130 },
          { field: 'email', headerName: 'Email', width: 180 },
          { field: 'phone', headerName: 'Phone', width: 130 },
          { field: 'pincode', headerName: 'Pincode', width: 100 },
          { field: 'electricityBill', headerName: 'Electricity Bill', width: 150 },
        ]}
        pageSize={5}
        getRowId={(row) => row.id}
      />
    </Box>
  );
};

export default Leads;
