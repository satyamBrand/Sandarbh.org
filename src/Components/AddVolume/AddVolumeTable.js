// ContextTypesTable.js
import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import axios from 'axios';

const VolumeTable = () => {
  const [volume, setVolume] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/Getvolumes');

        if (response.status === 200) {
          const result = response.data;

          if (Array.isArray(result.data)) {
            setVolume(result.data);
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
      <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>S.No</TableCell>
                <TableCell>volume Type</TableCell>
                <TableCell>volume ID</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {volume.map((volume, index) => (
                <TableRow key={volume._id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{volume.name}</TableCell>
                  <TableCell>{volume._id}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default VolumeTable;
