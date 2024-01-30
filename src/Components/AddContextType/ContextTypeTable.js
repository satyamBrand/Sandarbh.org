// ContextTypesTable.js
import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import axios from 'axios';
import Typography from '@mui/material/Typography';

const ContextTypesTable = () => {
  const [contextTypes, setContextTypes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/Getcontext-types');

        if (response.status === 200) {
          const result = response.data;

          if (Array.isArray(result.data)) {
            setContextTypes(result.data);
          } else {
            console.error('API response is not an array:', result.data);
          }
        } else {
          console.error('Failed to fetch context types');
        }
      } catch (error) {
        console.error('Error while connecting to the API', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
      <Typography
        component="h1"
        variant="h5"
        color="inherit"
        noWrap
        sx={{ flexGrow: 1, marginBottom: '1rem' }}
      >
        Context Details
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ position: 'sticky', top: 0, backgroundColor: 'white', zIndex: 1 }}>
                S.No
              </TableCell>
              <TableCell style={{ position: 'sticky', top: 0, backgroundColor: 'white', zIndex: 1 }}>
                Context Type
              </TableCell>
              <TableCell style={{ position: 'sticky', top: 0, backgroundColor: 'white', zIndex: 1 }}>
                Context ID
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contextTypes.map((contextType, index) => (
              <TableRow key={contextType._id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{contextType.name}</TableCell>
                <TableCell>{contextType._id}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ContextTypesTable;
