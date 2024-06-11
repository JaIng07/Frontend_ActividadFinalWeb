// src/components/CarList.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';

const CarList = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        const fetchCars = async () => {
            const response = await axios.get('http://localhost:8088/api/v1/cars');
            setCars(response.data);
        };
        fetchCars();
    }, []);

    return (
        <Box
            sx={{
                minHeight: '100vh',
                backgroundImage: 'url("https://files.lafm.com.co/assets/public/styles/img_node_706x392/public/2023-07/carros_usados.jpg.webp?VersionId=IZgt3fNwSJrOsNHQ_oHRKJqkxRSAAEM3&itok=8Pne9yYT")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                color: 'white',
                p: 2,
            }}
        >
            <Box
                sx={{
                    bgcolor: 'rgba(0, 0, 0, 0.7)',
                    p: 4,
                    borderRadius: 3,
                    boxShadow: 3,
                    width: '80%',
                    maxWidth: '1200px',
                    margin: 'auto',
                }}
            >
                <Typography variant="h4" gutterBottom>
                    Cars
                </Typography>
                <Grid container spacing={2}>
                    {cars.map((car) => (
                        <Grid item key={car.id} xs={12} sm={6} md={4}>
                            <Card
                                sx={{
                                    borderRadius: 2,
                                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                                    color: 'white',
                                }}
                            >
                                <CardContent>
                                    <Typography variant="h6">Model: {car.model}</Typography>
                                    <Typography>Location: {car.location}</Typography>
                                    <Typography>Price: ${car.price}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default CarList;
