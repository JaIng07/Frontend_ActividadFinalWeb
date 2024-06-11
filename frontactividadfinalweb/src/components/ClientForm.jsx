import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Box, Typography, Container } from '@mui/material';

const ClientForm = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [cedula, setCedula] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const clientData = {
            name,
            lastName,
            cedula,
            address,
            phone,
        };

        try {
            await axios.post('http://localhost:8088/api/v1/clients', clientData);
            alert('Client created successfully!');
        } catch (error) {
            console.error('Error creating client:', error);
            alert('Failed to create client.');
        }
    };

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
            <Container maxWidth="sm" sx={{ bgcolor: 'rgba(0, 0, 0, 0.7)', p: 4, borderRadius: 3, boxShadow: 3 }}>
                <Typography variant="h4" gutterBottom>
                    Create a New Client
                </Typography>
                <Box component="form" onSubmit={handleSubmit}>
                    <TextField
                        label="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        fullWidth
                        margin="normal"
                        required
                        sx={{
                            bgcolor: 'rgba(255, 255, 255, 0.1)',
                            borderRadius: 1,
                            '& .MuiInputBase-input': { color: 'white' },
                            '& .MuiInputLabel-root': { color: 'white' },
                            '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
                        }}
                    />
                    <TextField
                        label="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        fullWidth
                        margin="normal"
                        required
                        sx={{
                            bgcolor: 'rgba(255, 255, 255, 0.1)',
                            borderRadius: 1,
                            '& .MuiInputBase-input': { color: 'white' },
                            '& .MuiInputLabel-root': { color: 'white' },
                            '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
                        }}
                    />
                    <TextField
                        label="Cedula"
                        value={cedula}
                        onChange={(e) => setCedula(e.target.value)}
                        fullWidth
                        margin="normal"
                        required
                        sx={{
                            bgcolor: 'rgba(255, 255, 255, 0.1)',
                            borderRadius: 1,
                            '& .MuiInputBase-input': { color: 'white' },
                            '& .MuiInputLabel-root': { color: 'white' },
                            '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
                        }}
                    />
                    <TextField
                        label="Address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        fullWidth
                        margin="normal"
                        required
                        sx={{
                            bgcolor: 'rgba(255, 255, 255, 0.1)',
                            borderRadius: 1,
                            '& .MuiInputBase-input': { color: 'white' },
                            '& .MuiInputLabel-root': { color: 'white' },
                            '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
                        }}
                    />
                    <TextField
                        label="Phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        fullWidth
                        margin="normal"
                        required
                        sx={{
                            bgcolor: 'rgba(255, 255, 255, 0.1)',
                            borderRadius: 1,
                            '& .MuiInputBase-input': { color: 'white' },
                            '& .MuiInputLabel-root': { color: 'white' },
                            '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
                        }}
                    />
                    <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
                        Create Client
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default ClientForm;
