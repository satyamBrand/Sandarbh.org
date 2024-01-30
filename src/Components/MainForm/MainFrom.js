import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Alert from '@mui/material/Alert';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme();

export default function AddMainForm() {
  const [contextType, setContextType] = useState('');
  const [category, setCategory] = useState('');
  const [subCategory, setSubcategory] = useState('');
  const [book, setBook] = useState('');
  const [volume, setVolume] = useState('');
  const [section, setSection] = useState('');
  const [chapter, setChapter] = useState('');
  const [sloka, setSloka] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validation
    if (!contextType || !category || !subCategory || !book || !volume || !section || !chapter || !sloka) {
      setErrorMessage('Please fill in all fields.');
      return;
    }

    const formData = { contextType, category, subCategory, book, volume, section, chapter, sloka };

    try {
      const response = await fetch('http://localhost:8000/api/MainForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage('Book added successfully!');
        setContextType('');
        setCategory('');
        setSubcategory('');
        setBook('');
        setVolume('');
        setSection('');
        setChapter('');
        setSloka('');
        setErrorMessage('');
        setTimeout(() => {
          setSuccessMessage('');
        }, 2000);
      }
      else {
        setErrorMessage('Failed to Add.');
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
            Add Main-Form
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
            {successMessage && <Alert severity="success">{successMessage}</Alert>}

            <TextField
              margin="normal"
              required
              fullWidth
              id="ContextType"
              label="ContextType"
              name="ContextType"
              autoFocus
              value={contextType}
              onChange={(e) => setContextType(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="Category"
              label="Category"
              type="Category"
              id="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="SubCategory"
              label="SubCategory"
              name="SubCategory"
              value={subCategory}
              onChange={(e) => setSubcategory(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="Book"
              label="Book"
              name="Book"
              value={book}
              onChange={(e) => setBook(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="Volume"
              label="Volume"
              name="Volume"
              value={volume}
              onChange={(e) => setVolume(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="Section"
              label="Section"
              name="Section"
              value={section}
              onChange={(e) => setSection(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="Chapter"
              label="Chapter"
              name="Chapter"
              value={chapter}
              onChange={(e) => setChapter(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="Sloka"
              label="Sloka"
              name="Sloka"
              value={sloka}
              onChange={(e) => setSloka(e.target.value)}
            />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Add
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
