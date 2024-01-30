import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Alert from '@mui/material/Alert';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme();

export default function AddCategoryType() {
  const [name, setName] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validation
    if (!name) {
      setErrorMessage('Please fill in all fields.');
      return;
    }

    const contextData = { name };

    try {
      const response = await fetch('http://localhost:8000/api/categories', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contextData),
      });

      if (response.ok) {
        setSuccessMessage('Context added successfully!');
        setName('');
        setErrorMessage('');
        setTimeout(() => {
          setSuccessMessage('');
        }, 2000);
      } else {
        setErrorMessage('Failed to add context.');
        setSuccessMessage('');
      }
    } catch (error) {
      setErrorMessage('Error while connecting to the API.');
      setSuccessMessage('');
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Add Category 
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
            {successMessage && <Alert severity="success">{successMessage}</Alert>}

            <TextField
              margin="normal"
              required
              fullWidth
              id="Category"
              label="Category type"
              name="Category"
              type="text"
              autoFocus
              value={name}
              onChange={(e) => setName(e.target.value)}/>

            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Add Category
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
