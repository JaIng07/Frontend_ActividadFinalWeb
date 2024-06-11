import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Typography, Grid, Card, CardContent, List, ListItem, ListItemText, Container } from '@mui/material';

const RentList = () => {
    const [rents, setRents] = useState([]);

    useEffect(() => {
        const fetchRents = async () => {
            try {
                const response = await axios.get('http://localhost:8088/api/v1/rents');
                setRents(response.data);
            } catch (error) {
                console.error('Error fetching rents:', error);
            }
        };
        fetchRents();
    }, []);

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
            <Container maxWidth="lg" sx={{ bgcolor: 'rgba(0, 0, 0, 0.7)', p: 4, borderRadius: 3, boxShadow: 3 }}>
                <Typography variant="h4" gutterBottom>
                    Rents
                </Typography>
                <Grid container spacing={2}>
                    {rents.map((rent) => (
                        <Grid item key={rent.id} xs={12} sm={6} md={4}>
                            <Card
                                sx={{
                                    borderRadius: 2,
                                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                                    color: 'white',
                                }}
                            >
                                <CardContent>
                                    <Typography variant="h6" gutterBottom>
                                        Car Model: {rent.car.model}
                                    </Typography>
                                    <List>
                                        <ListItem>
                                            <ListItemText primary="Client" secondary={`${rent.client.name} ${rent.client.lastName}`} />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText primary="Start Date" secondary={rent.startDateRent} />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText primary="End Date" secondary={rent.endDateRent} />
                                        </ListItem>
                                    </List>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default RentList;
