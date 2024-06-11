// src/components/Home.jsx
import React from 'react';
import { Button, Box, Typography, Container, Grid, Card, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                minHeight: '100vh',
                backgroundImage: 'url("https://files.lafm.com.co/assets/public/styles/img_node_706x392/public/2023-07/carros_usados.jpg.webp?VersionId=IZgt3fNwSJrOsNHQ_oHRKJqkxRSAAEM3&itok=8Pne9yYT")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                color: 'white',
                p: 2,
            }}
        >
            <Container maxWidth="md" sx={{ bgcolor: 'rgba(0, 0, 0, 0.7)', p: 4, borderRadius: 3, boxShadow: 3 }}>
                <Typography variant="h3" gutterBottom>
                    Welcome to our Car Rental App!
                </Typography>
                <Typography variant="h6" gutterBottom>
                    Explore our app to manage your car rentals effortlessly. Whether you want to create a new car listing, view available cars, manage clients, or track rentals, we have got you covered. To get you started, click any of the options below!
                </Typography>
                <Grid container spacing={2} justifyContent="center" mt={4}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{ borderRadius: 2, bgcolor: 'rgba(255, 255, 255, 0.1)' }}>
                            <CardContent>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => navigate('/create-car')}
                                    sx={{ width: '100%', py: 2, borderRadius: '8px' }}
                                >
                                    Create Car
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{ borderRadius: 2, bgcolor: 'rgba(255, 255, 255, 0.1)' }}>
                            <CardContent>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => navigate('/cars-list')}
                                    sx={{ width: '100%', py: 2, borderRadius: '8px' }}
                                >
                                    See Cars
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{ borderRadius: 2, bgcolor: 'rgba(255, 255, 255, 0.1)' }}>
                            <CardContent>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => navigate('/clients-list')}
                                    sx={{ width: '100%', py: 2, borderRadius: '8px' }}
                                >
                                    See Clients
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{ borderRadius: 2, bgcolor: 'rgba(255, 255, 255, 0.1)' }}>
                            <CardContent>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => navigate('/rents-list')}
                                    sx={{ width: '100%', py: 2, borderRadius: '8px' }}
                                >
                                    See Rents
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{ borderRadius: 2, bgcolor: 'rgba(255, 255, 255, 0.1)' }}>
                            <CardContent>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => navigate('/search-cars')}
                                    sx={{ width: '100%', py: 2, borderRadius: '8px' }}
                                >
                                    Rent a Car
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Home;

