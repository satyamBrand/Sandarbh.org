// ContextTypesTable.js
import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CircularProgress } from '@mui/material';
import axios from 'axios';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/Getbooks');

        if (response.status === 200) {
          const result = response.data;

          if (Array.isArray(result.data)) {
            setBooks(result.data);
          } else {
            setError('API response is not an array');
          }
        } else {
          setError('Failed to fetch books');
        }
      } catch (error) {
        setError('Error while connecting to the API');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <CircularProgress />; // or any loading indicator
  }

  if (error) {
    return <div>Error: {error}</div>; // render the error message
  }

  return (
    <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>S.No</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Author_ID</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Country</TableCell>
              <TableCell>Language</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {books.map((book, index) => (
              <TableRow key={book._id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{book.title}</TableCell>
                <TableCell>{book.author_id}</TableCell>
                <TableCell>{book.type}</TableCell>
                <TableCell>{book.country}</TableCell>
                <TableCell>{book.language}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default BookList;
