import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CircularProgress } from '@mui/material';
import axios from 'axios';

const Mainform = () => {
  const [mainFormData, setMainFormData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/GetMainform');

        if (response.status === 200) {
          const result = response.data;
          console.log("Result: ", result);

          if (Array.isArray(result)) {
            setMainFormData(result);   
          } else {
            setError('Data received is not in the expected format');
          }
        } else {
          setError('Failed to fetch data');
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
    return <CircularProgress />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>S.No</TableCell>
              <TableCell>ID</TableCell>
              <TableCell>Context</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Sub-category</TableCell>
              <TableCell>Book</TableCell>
              <TableCell>Volume</TableCell>
              <TableCell>Chapter</TableCell>
              <TableCell>Sloka</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mainFormData.map((formData, index) => (
              <TableRow key={formData._id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{formData._id}</TableCell>
                <TableCell>{formData.context}</TableCell>
                <TableCell>{formData.category}</TableCell>
                <TableCell>{formData.subCategory}</TableCell>
                <TableCell>{formData.book}</TableCell>
                <TableCell>{formData.volume}</TableCell>
                <TableCell>{formData.chapter}</TableCell>
                <TableCell>{formData.sloka}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Mainform;
