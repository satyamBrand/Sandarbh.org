// ContextTypesTable.js
import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import axios from 'axios';

const SectionTypeTable = () => {
  const [sectionTypes, setSectionTypes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/Getsections');

        if (response.status === 200) {
          const result = response.data;

          if (Array.isArray(result.data)) {
            setSectionTypes(result.data);
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

  const handleEditClick = () => {
    // Add your edit functionality here
    console.log('Edit button clicked');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', maxHeight: '400px', overflowY: 'auto' }}>
      <Button style={{ alignSelf: 'flex-end', margin: '10px' }} variant="contained" onClick={handleEditClick}>
        Edit
      </Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>S.No</TableCell>
              <TableCell>Section Type</TableCell>
              <TableCell>Section ID</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sectionTypes.map((sectionType, index) => (
              <TableRow key={sectionType._id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{sectionType.name}</TableCell>
                <TableCell>{sectionType._id}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default SectionTypeTable;
