// ContextTypesTable.js
import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CircularProgress } from '@mui/material';
import axios from 'axios';

const SlokaList = () => {
  const [sloka, setSloka] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/Getsloka');

        if (response.status === 200) {
          const result = response.data;

          if (Array.isArray(result.data)) {
            setSloka(result.data);
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
              <TableCell>Chapter</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sloka.map((sloka, index) => (
              <TableRow key={sloka._id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{sloka.content}</TableCell>
                <TableCell>{sloka.author_id}</TableCell>
                <TableCell>{sloka.chapter_id}</TableCell>
               
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default SlokaList;
