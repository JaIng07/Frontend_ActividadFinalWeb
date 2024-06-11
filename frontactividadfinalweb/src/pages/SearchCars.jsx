import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Grid, Typography, TextField, Select, MenuItem, Button, List, ListItem, ListItemText, Box, Card, CardContent } from '@mui/material';

const SearchCars = () => {
    const [location, setLocation] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [locations, setLocations] = useState([]);
    const [availableCars, setAvailableCars] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8088/api/v1/cars')
            .then(response => {
                const uniqueLocations = [...new Set(response.data.map(car => car.location))];
                setLocations(uniqueLocations);
            })
            .catch(error => {
                console.error('Error fetching locations:', error);
            });
    }, []);

    const handleSearch = () => {
        axios.get('http://localhost:8088/api/v1/cars', {
            params: {
                location: location,
                startDate: startDate,
                endDate: endDate
            }
        })
            .then(response => {
                const filteredCars = response.data.filter(car => car.location === location);
                setAvailableCars(filteredCars);
            })
            .catch(error => {
                console.error('Error fetching available cars:', error);
            });
    };

    const handleRentClick = (car) => {
        navigate('/rent-form', { state: { car } });
    };

    return (
        <Box
            sx={{
                minHeight: '100vh',
                backgroundImage: 'url("https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg?cs=srgb&dl=pexels-mikebirdy-136872.jpg&fm=jpg")',
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
                    bgcolor: 'rgba(255, 255, 255, 0.9)',
                    p: 4,
                    borderRadius: 3,
                    boxShadow: 3,
                    width: '80%',
                    maxWidth: '1200px',
                    margin: 'auto',
                    color: 'black',
                }}
            >
                <Typography variant="h3" gutterBottom>
                    Search Cars
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="location"
                            label="Location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            select
                            fullWidth
                            margin="normal"
                            required
                            sx={{
                                bgcolor: 'rgba(255, 255, 255, 1)',
                                borderRadius: 1,
                                '& .MuiInputBase-input': { color: 'black' },
                                '& .MuiInputLabel-root': { color: 'black' },
                            }}
                        >
                            <MenuItem value="">Select a location</MenuItem>
                            {locations.map(loc => (
                                <MenuItem key={loc} value={loc}>{loc}</MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="startDate"
                            label="Start Date"
                            type="date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            fullWidth
                            margin="normal"
                            required
                            InputLabelProps={{ shrink: true }}
                            sx={{
                                bgcolor: 'rgba(255, 255, 255, 1)',
                                borderRadius: 1,
                                '& .MuiInputBase-input': { color: 'black' },
                                '& .MuiInputLabel-root': { color: 'black' },
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="endDate"
                            label="End Date"
                            type="date"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            fullWidth
                            margin="normal"
                            required
                            InputLabelProps={{ shrink: true }}
                            sx={{
                                bgcolor: 'rgba(255, 255, 255, 1)',
                                borderRadius: 1,
                                '& .MuiInputBase-input': { color: 'black' },
                                '& .MuiInputLabel-root': { color: 'black' },
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" color="primary" onClick={handleSearch} sx={{ mt: 2 }}>
                            Search
                        </Button>
                    </Grid>
                </Grid>
                <Box mt={4}>
                    <Typography variant="h4" gutterBottom>
                        Available Cars
                    </Typography>
                    <Grid container spacing={2}>
                        {availableCars.map(car => (
                            <Grid item key={car.id} xs={12} sm={6} md={4}>
                                <Card
                                    sx={{
                                        borderRadius: 2,
                                        bgcolor: 'rgba(255, 255, 255, 1)',
                                        color: 'black',
                                        textAlign: 'left',
                                    }}
                                >
                                    <CardContent>
                                        <Typography variant="h6">
                                            {car.model}
                                        </Typography>
                                        <List>
                                            <ListItem>
                                                <ListItemText primary="Location" secondary={car.location} sx={{ color: 'black' }} />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemText primary="Price" secondary={`$${car.price}`} sx={{ color: 'black' }} />
                                            </ListItem>
                                        </List>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={() => handleRentClick(car)}
                                            sx={{ mt: 2 }}
                                        >
                                            Rent
                                        </Button>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>
        </Box>
    );
}

export default SearchCars;
