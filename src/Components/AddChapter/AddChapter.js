import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Alert from '@mui/material/Alert';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme();

export default function AddChapter() {
    const [title, setTitle] = useState('');
    const [book_id, setBookId] = useState('');
    const [type_of_context, setContextType] = useState('');
    const [category, setCategory] = useState('');
    const [subcategory, setSubCategory] = useState('');
    const [volume, setVolume] = useState('');
    const [section, setSection] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Validation
        if (!title || !book_id || !type_of_context || !category || !subcategory || !volume || !section) {
            setErrorMessage('Please fill in all fields.');
            return;
        }

        const formData = { title, book_id: book_id, type_of_context, category, subcategory, volume, section };

        try {
            const response = await fetch('http://localhost:8000/api/chapters', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSuccessMessage('Book added successfully!');
                setTitle('');
                setBookId('');
                setContextType('');
                setCategory('');
                setSubCategory('');
                setVolume(''); 
                setSection('');
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
                        Add Chapter
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
                            name="Book"
                            label="Book"
                            type="text"
                            id="Book"
                            value={book_id}
                            onChange={(e) => setBookId(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="ContextType"
                            label="Context type"
                            name="ContextType"
                            value={type_of_context}
                            onChange={(e) => setContextType(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="category"
                            label="category"
                            name="category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="subcategory"
                            label="subcategory"
                            name="subcategory"
                            value={subcategory}
                            onChange={(e) => setSubCategory(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="volume"
                            label="volume"
                            name="volume"
                            value={volume}
                            onChange={(e) => setVolume(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="section"
                            label="section"
                            name="section"
                            value={section}
                            onChange={(e) => setSection(e.target.value)}
                        />
                        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                            Add Chapter
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
