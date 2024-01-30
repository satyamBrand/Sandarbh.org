import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Alert from '@mui/material/Alert';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme();

export default function AddSloka() {
    const [content, setContent] = useState('');
    const [author_id, setAutherId] = useState('');
    const [chapter_id, setChapterId] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Validation
        if (!content || !author_id || !chapter_id) {
            setErrorMessage('Please fill in all fields.');
            return;
        }

        const formData = { content, author_id: author_id, chapter_id };

        try {
            const response = await fetch('http://localhost:8000/api/sloka', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSuccessMessage('Book added successfully!');
                setContent('');
                setAutherId('');
                setChapterId('');
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
                        Add Sloka
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
                        {successMessage && <Alert severity="success">{successMessage}</Alert>}

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="content"
                            label="Content"
                            name="content"
                            autoFocus
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="Auther"
                            label="Auther"
                            type="text"
                            id="Auther"
                            value={author_id}
                            onChange={(e) => setAutherId(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="Chapter"
                            label="Chapter"
                            name="Chapter"
                            value={chapter_id}
                            onChange={(e) => setChapterId(e.target.value)}
                        />

                        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                            Add Sloka
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
