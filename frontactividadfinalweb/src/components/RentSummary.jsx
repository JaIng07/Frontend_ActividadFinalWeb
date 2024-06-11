import React from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Typography, Grid, Card, CardContent, List, ListItem, ListItemText, Container, Paper } from '@mui/material';

const RentSummary = () => {
    const location = useLocation();
    const { car, client, startDateRent, endDateRent } = location.state || {};

    if (!car || !client) {
        return <Typography>No rental summary available.</Typography>;
    }

    return (
        <Box
            sx={{
                minHeight: '100vh',
                backgroundImage: 'url("https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg?cs=srgb&dl=pexels-mikebirdy-136872.jpg&fm=jpg")',
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
            <Container maxWidth="sm">
                <Paper elevation={3} sx={{ padding: 3, borderRadius: 2, backgroundColor: 'rgba(255, 255, 255, 0.9)', color: 'black' }}>
                    <Typography variant="h4" gutterBottom>
                        Rental Summary
                    </Typography>
                    <Card
                        sx={{
                            borderRadius: 2,
                            bgcolor: 'rgba(255, 255, 255, 1)',
                            color: 'black',
                            mt: 2,
                        }}
                    >
                        <CardContent>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <Typography variant="h6">Car Model: {car.model}</Typography>
                                    <Typography variant="h6">Location: {car.location}</Typography>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Typography variant="h6">Rental Period: {startDateRent} to {endDateRent}</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="h6">Client Information:</Typography>
                                    <List>
                                        <ListItem>
                                            <ListItemText primary="Name" secondary={`${client.name} ${client.lastName}`} />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText primary="Address" secondary={client.address} />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText primary="Phone" secondary={client.phone} />
                                        </ListItem>
                                    </List>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Paper>
            </Container>
        </Box>
    );
};

export default RentSummary;
