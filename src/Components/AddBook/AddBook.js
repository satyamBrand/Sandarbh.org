import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Alert from '@mui/material/Alert';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme();

export default function AddBook() {
  const [title, setTitle] = useState('');
  const [authorId, setAuthorId] = useState('');
  const [type, setBookType] = useState('');
  const [country, setCountry] = useState('');
  const [language, setLanguage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validation
    if (!title || !authorId || !type || !country || !language) {
      setErrorMessage('Please fill in all fields.');
      return;
    }

    const formData = { title, author_id: authorId, type, country, language };

    try {
      const response = await fetch('http://localhost:8000/api/books', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage('Book added successfully!');
        setTitle('');
        setAuthorId('');
        setBookType('');
        setCountry('');
        setLanguage('');
        setErrorMessage(''); // Clear error message if any
         // Set a timer to clear the success message after 10 seconds
         setTimeout(() => {
          setSuccessMessage('');
        }, 2000);
      } 
      else {
        setErrorMessage('Failed to add book.');
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
            Add Book
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
            {successMessage && <Alert severity="success">{successMessage}</Alert>}

            <TextField
              margin="normal"
              required
              fullWidth
              id="title"
              label="Title"
              name="title"
              autoFocus
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="author"
              label="Author"
              type="text"
              id="author"
              value={authorId}
              onChange={(e) => setAuthorId(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="bookType"
              label="Book type"
              name="bookType"
              value={type}
              onChange={(e) => setBookType(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="country"
              label="Country"
              name="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="language"
              label="Language"
              name="language"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Add Book
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
