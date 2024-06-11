// src/components/CarForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Box, Card, CardContent, Typography } from '@mui/material';

const CarForm = () => {
    const [model, setModel] = useState('');
    const [location, setLocation] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const carData = {
            model,
            location,
            price
        };

        try {
            await axios.post('http://localhost:8088/api/v1/cars', carData);
            alert('Car created successfully!');
        } catch (error) {
            console.error('Error creating car:', error);
            alert('Failed to create car.');
        }
    };

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
            p={2}
            sx={{
                backgroundImage: 'url("https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg?cs=srgb&dl=pexels-mikebirdy-136872.jpg&fm=jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <Card sx={{ maxWidth: 500, width: '100%', boxShadow: 3, borderRadius: 3 }}>
                <CardContent>
                    <Typography variant="h4" gutterBottom>
                        Create a New Car
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit}>
                        <TextField
                            label="Model"
                            value={model}
                            onChange={(e) => setModel(e.target.value)}
                            fullWidth
                            margin="normal"
                            required
                            variant="outlined"
                            sx={{ borderRadius: '8px' }}
                        />
                        <TextField
                            label="Location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            fullWidth
                            margin="normal"
                            required
                            variant="outlined"
                            sx={{ borderRadius: '8px' }}
                        />
                        <TextField
                            label="Price"
                            type="number"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            fullWidth
                            margin="normal"
                            required
                            variant="outlined"
                            sx={{ borderRadius: '8px' }}
                        />
                        <Box mt={2}>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                fullWidth
                                sx={{ py: 1.5, borderRadius: '8px' }}
                            >
                                Create Car
                            </Button>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
};

export default CarForm;



