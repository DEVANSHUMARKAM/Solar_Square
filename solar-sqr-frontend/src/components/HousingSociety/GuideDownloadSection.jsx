//download their guide book

import { Box, Grid, Typography, Button } from '@mui/material';
import GuideImage from '../../assets/GuideHousing.png'; 

const bulletPoints = [
    'How much can you save by going solar',
    "What's the right solar size for your society",
    'What technologies should you choose',
    'Common myths about rooftop solar',
];

const GuideDownloadSection = () => {
    return (
        <Box
            sx={{
                backgroundColor: '#06ccf8',
                py: { xs: 6, md: 10 },
                px: { xs: 3, md: 10 },
            }}
        >
            <Grid
                container
                spacing={6}
                alignItems="center"
                justifyContent="space-between"
                sx={{ maxWidth: 1300, mx: 'auto' }}
            >
                <Grid item xs={12} md={6}>
                    <Typography
                        variant="h5"
                        sx={{
                            fontWeight: 1000,
                            fontSize: 49,
                            fontFamily: 'Poppins, sans-serif',
                            color: '#0905a1',
                            mb: 12,
                        }}
                    >
                        A Guide To Going Solar<br>
                        </br> For Housing Societies
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: 20,
                            fontFamily: 'Poppins, sans-serif',
                            color: '#000',
                            mb: 3,
                        }}
                    >
                        Learn everything you need to know before installing a rooftop <br>
                        </br> solar system in your society.
                    </Typography>

                    <Box sx={{ pl: 2, mb: 4 }}>
                        {bulletPoints.map((point, i) => (
                            <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', mb: 1 }}>
                                <Box
                                    sx={{
                                        width: 8,
                                        height: 8,
                                        bgcolor: '#000',
                                        borderRadius: '2px',
                                        mt: '8px',
                                        mr: 1.5,
                                    }}
                                />
                                <Typography sx={{ fontSize: 20, fontFamily: 'Poppins, sans-serif' }}>
                                    {point}
                                </Typography>
                            </Box>
                        ))}
                    </Box>

                    <Button
                        variant="contained"
                        sx={{
                            background: 'linear-gradient(97.83deg, #101F9D 6.22%, #11111C 87.68%)',
                            color: '#fff',
                            fontWeight: 700,
                            fontSize: 16,
                            px: 4,
                            py: 1.5,
                            borderRadius: '50px',
                            textTransform: 'none',
                            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                            '&:hover': {
                                background: 'linear-gradient(97.83deg, #0d1b8a 6.22%, #0f0f1a 87.68%)',
                            },
                        }}
                    >
                        Download for free
                    </Button>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Box
                        component="img"
                        src={GuideImage}
                        alt="Guidebook Cover"
                        sx={{
                            width: '100%',
                            maxWidth: 500,
                            borderRadius: 2,
                            mx: 'auto',
                            display: 'block',
                        }}
                    />

                </Grid>
            </Grid>
        </Box>
    );
};

export default GuideDownloadSection;
