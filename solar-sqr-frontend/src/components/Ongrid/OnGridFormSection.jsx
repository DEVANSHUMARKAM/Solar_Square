import React, { useState } from 'react';
import {
    Box,
    Grid,
    Typography,
    TextField,
    Button,
    Checkbox,
    FormControlLabel,
    Link,
    MenuItem,
} from '@mui/material';

const billOptions = [
    'Less than ₹1500',
    '₹1500 – ₹2500',
    '₹2500 – ₹4000',
    '₹4000 – ₹8000',
    'More than ₹8000',
];

const OnGridFormSection = () => {
    const [formType, setFormType] = useState('Residential');
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        pincode: '',
        society: '',
        company: '',
        city: '',
        monthlyBill: '',
        designation: '',
        agmStatus: '',
        billOption: '',
        agreed: false,
    });

    const handleChange = (field) => (e) =>
        setFormData({ ...formData, [field]: e.target.value });

    const handleBillSelect = (option) => {
        setFormData({ ...formData, billOption: option });
    };

    const isFormComplete = () => {
        if (formType === 'Residential') {
            return (
                formData.name &&
                formData.phone &&
                formData.pincode &&
                formData.billOption
            );
        }
        if (formType === 'Housing Society') {
            return (
                formData.name &&
                formData.society &&
                formData.pincode &&
                formData.phone &&
                formData.monthlyBill &&
                formData.designation &&
                formData.agmStatus
            );
        }
        if (formType === 'Commercial') {
            return (
                formData.name &&
                formData.company &&
                formData.city &&
                formData.pincode &&
                formData.phone &&
                formData.monthlyBill
            );
        }
        return false;
    };

    const tabStyles = (type) => ({
        flex: 1,
        textAlign: 'center',
        py: 1,
        borderRadius: '50px',
        fontWeight: 600,
        fontFamily: 'Poppins, sans-serif',
        cursor: 'pointer',
        backgroundColor: formType === type ? '#e2dfff' : '#fff',
        color: formType === type ? '#000' : '#666',
        border: '1px solid #ddd',
        transition: 'all 0.2s ease-in-out',
    });

    return (
        <Box sx={{ px: { xs: 2, md: 8 }, py: 8 }}>
            <Grid container spacing={6}>
                {/* Left Content */}
                <Grid item xs={12} md={7}>
                    <Typography
                        variant="h5"
                        sx={{
                            color: '#2C204D',
                            fontWeight: 900,
                            fontFamily: 'Poppins, sans-serif',
                            mb: 2,
                        }}
                    >
                        About SolarSquare
                    </Typography>
                    <Typography sx={{ mb: 2, fontSize: 16 }}>
                        {/* Add your full descriptive paragraph here */}
                        SolarSquare is born out of the passion to de-escalate pollution and escalate the adoption of mass solar...
                    </Typography>
                </Grid>

                {/* Right Form */}
                <Grid item xs={12} md={5}>
                    <Box
                        sx={{
                            p: 4,
                            borderRadius: 8,
                            boxShadow: 8,
                            bgcolor: '#fff',
                            minHeight: '620px',              // Fixed height to prevent jumping
                            maxWidth: '600px',               // Fix width
                            marginX: 'auto',                 // Center it horizontally if needed
                            transition: 'all 0.3s ease-in-out', // Smooth animation
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            '@media (min-width: 768px)': {
                                pt: '3rem',                    // Padding top for md screens
                            },
                        }}
                    >


                        <Typography fontSize={22} fontWeight={900} mb={1}>
                            Book a FREE Solar Consultation
                        </Typography>
                        <Typography fontSize={16} color="#666" mb={2}>
                            And save up to ₹78,000 with subsidy
                        </Typography>

                        {/* Tabs */}
                        <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                            {['Residential', 'Housing Society', 'Commercial'].map((type) => (
                                <Box key={type} onClick={() => setFormType(type)} sx={tabStyles(type)}>
                                    {type}
                                </Box>
                            ))}
                        </Box>

                        {/* Residential */}
                        {formType === 'Residential' && (
                            <>
                                <TextField
                                    fullWidth
                                    label={
                                        <span>
                                            Full Name  <span style={{ color: 'red' }}>*</span>
                                        </span>
                                    }
                                    value={formData.name}
                                    onChange={handleChange('name')}
                                    sx={{ mb: 2 }}
                                />
                                <TextField
                                    fullWidth
                                    label={
                                        <span>
                                            WhatsApp number  <span style={{ color: 'red' }}>*</span>
                                        </span>
                                    }
                                    value={formData.phone}
                                    onChange={handleChange('phone')}
                                    sx={{ mb: 2 }}
                                />
                                <TextField
                                    fullWidth
                                    label={
                                        <span>
                                            Pin code  <span style={{ color: 'red' }}>*</span>
                                        </span>
                                    }
                                    value={formData.pincode}
                                    onChange={handleChange('pincode')}
                                    sx={{ mb: 2 }}
                                />
                                <Typography fontWeight={800} mb={1}>
                                    Monthly Electricity Bill <span style={{ color: 'red' }}>*</span>
                                </Typography>
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                                    {billOptions.map((amt) => (
                                        <Button
                                            key={amt}
                                            onClick={() => handleBillSelect(amt)}
                                            sx={{
                                                borderRadius: 4,
                                                px: 2,
                                                py: 0.8,
                                                fontSize: 13,
                                                fontWeight: 800,
                                                color: formData.billOption === amt ? '#fff' : '#000',
                                                backgroundColor:
                                                    formData.billOption === amt ? '#4B0082' : '#fff',
                                                border:
                                                    formData.billOption === amt
                                                        ? '2px solid #4B0082'
                                                        : '1px solid #bbb',
                                                '&:hover': {
                                                    backgroundColor:
                                                        formData.billOption === amt ? '#4B0082' : '#f5f5f5',
                                                },
                                            }}
                                        >
                                            {amt}
                                        </Button>
                                    ))}
                                </Box>
                            </>
                        )}

                        {/* Housing Society */}
                        {formType === 'Housing Society' && (
                            <>
                                <TextField
                                    fullWidth
                                    label={
                                        <span>
                                            Full Name <span style={{ color: 'red' }}>*</span>
                                        </span>
                                    }
                                    value={formData.name}
                                    onChange={handleChange('name')}
                                    sx={{ mb: 2 }}
                                />
                                <TextField
                                    fullWidth
                                    label={
                                        <span>
                                            Name of Housing Society <span style={{ color: 'red' }}>*</span>
                                        </span>
                                    }
                                    value={formData.society}
                                    onChange={handleChange('society')}
                                    sx={{ mb: 2 }}
                                />
                                <TextField
                                    fullWidth
                                    label={
                                        <span>
                                            Pin code <span style={{ color: 'red' }}>*</span>
                                        </span>
                                    }
                                    value={formData.pincode}
                                    onChange={handleChange('pincode')}
                                    sx={{ mb: 2 }}
                                />
                                <Grid container spacing={2} sx={{ mb: 2 }}>
                                    <Grid item xs={6}>
                                        <TextField
                                            fullWidth
                                            label={
                                                <span>
                                                    Whatsapp No <span style={{ color: 'red' }}>*</span>
                                                </span>
                                            }
                                            value={formData.phone}
                                            onChange={handleChange('phone')}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                            fullWidth
                                            select
                                            label={
                                                <span>
                                                    Monthly Electricity Bill <span style={{ color: 'red' }}>*</span>
                                                </span>
                                            } sx={{
                                                mb: 2,
                                                width: '100%',          // Or you can try fixed width like '300px'
                                                '& .MuiSelect-select': {
                                                    minWidth: '200px',    // Controls the select display area
                                                },
                                            }}
                                        >
                                            <MenuItem value="0 - 50000">0 - 50000</MenuItem>
                                            <MenuItem value="50000 - 1L">50000 - 1L</MenuItem>
                                            <MenuItem value="1L+">1L+</MenuItem>
                                        </TextField>

                                    </Grid>
                                </Grid>

                                <Typography fontWeight={600} mb={1}>
                                    What is your designation in Housing Society? <span style={{ color: 'red' }}>*</span>
                                </Typography>
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                                    {['Management committee member', 'Resident', 'Builder', 'Facility Manager'].map((role) => (
                                        <Button
                                            key={role}
                                            variant={
                                                formData.designation === role ? 'contained' : 'outlined'
                                            }
                                            onClick={() =>
                                                setFormData({ ...formData, designation: role })
                                            }
                                            size="small"
                                        >
                                            {role}
                                        </Button>
                                    ))}
                                </Box>

                                <TextField
                                    select
                                    fullWidth
                                    label={
                                        <span>
                                            AGM approval status  <span style={{ color: 'red' }}>*</span>
                                        </span>
                                    }
                                    value={formData.agmStatus}
                                    onChange={handleChange('agmStatus')}
                                    sx={{ mb: 2 }}
                                >
                                    <MenuItem value="approved">We already have AGM approval</MenuItem>
                                    <MenuItem value="not-approved">We don't have an AGM approval</MenuItem>
                                    <MenuItem value="need-help">We want help in preparing for our AGM</MenuItem>
                                </TextField>
                            </>
                        )}

                        {/* Commercial */}
                        {formType === 'Commercial' && (
                            <>
                                <TextField
                                    fullWidth
                                    label={
                                        <span>
                                            Full Name  <span style={{ color: 'red' }}>*</span>
                                        </span>
                                    }
                                    value={formData.name}
                                    onChange={handleChange('name')}
                                    sx={{ mb: 2 }}
                                />
                                <TextField
                                    fullWidth
                                    label={
                                        <span>
                                            Company Name  <span style={{ color: 'red' }}>*</span>
                                        </span>
                                    }
                                    value={formData.company}
                                    onChange={handleChange('company')}
                                    sx={{ mb: 2 }}
                                />
                                <Grid container spacing={2} sx={{ mb: 2 }}>
                                    <Grid item xs={6}>
                                        <TextField
                                            fullWidth
                                            label={
                                                <span>
                                                    City  <span style={{ color: 'red' }}>*</span>
                                                </span>
                                            }
                                            value={formData.city}
                                            onChange={handleChange('city')}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                            fullWidth
                                            label={
                                                <span>
                                                    Pin code <span style={{ color: 'red' }}>*</span>
                                                </span>
                                            }
                                            value={formData.pincode}
                                            onChange={handleChange('pincode')}
                                        />
                                    </Grid>
                                </Grid>
                                <Grid container spacing={2} sx={{ mb: 2 }}>
                                    <Grid item xs={6}>
                                        <TextField
                                            fullWidth
                                            label={
                                                <span>
                                                    WhatsApp number <span style={{ color: 'red' }}>*</span>
                                                </span>
                                            }
                                            value={formData.phone}
                                            onChange={handleChange('phone')}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                            fullWidth
                                            label={
                                                <span>
                                                    Average Monthly Bill<span style={{ color: 'red' }}>*</span>
                                                </span>
                                            }
                                            value={formData.monthlyBill}
                                            onChange={handleChange('monthlyBill')}
                                        />
                                    </Grid>
                                </Grid>
                            </>
                        )}

                        {/* Checkbox + Submit */}
                        <FormControlLabel
                            control={
                                <Checkbox
                                    disabled={!isFormComplete()}
                                    checked={formData.agreed}
                                    onChange={(e) =>
                                        setFormData({ ...formData, agreed: e.target.checked })
                                    }
                                />
                            }
                            label={
                                <Typography sx={{ fontSize: 14 }}>
                                    I agree to SolarSquare’s{' '}
                                    <Link href="#" underline="hover">
                                        terms of service
                                    </Link>{' '}
                                    &{' '}
                                    <Link href="#" underline="hover">
                                        privacy policy
                                    </Link>
                                </Typography>
                            }
                            sx={{ mb: 2 }}
                        />

                        <Button
                            fullWidth
                            disabled={!formData.agreed}
                            variant="contained"
                            sx={{
                                background: 'linear-gradient(90deg, #0905a1, #101f9d)',
                                color: '#fff',
                                fontWeight: 700,
                                fontSize: 16,
                                py: 1.2,
                                borderRadius: '50px',
                                '&:hover': {
                                    background: 'linear-gradient(90deg, #070487, #0d158c)',
                                },
                            }}
                        >
                            Submit Details
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default OnGridFormSection;
