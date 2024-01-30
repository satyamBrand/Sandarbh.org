// ContextTypesTable.js
import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import axios from 'axios';

const ChapterTable = () => {
  const [chapters, setChapters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/Getchapters');

        if (response.status === 200) {
          console.log(response.data.data);
          const result = response.data.data;

          if (Array.isArray(result)) {
            setChapters(result);
          } else {
            console.error('API response is not an array:', result);
          }
        } else {
          console.error('Failed to fetch chapters');
        }
      } catch (error) {
        console.error('Error while connecting to the API', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>S.No</TableCell>
              <TableCell>ID</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Book-ID</TableCell>
              <TableCell>Context</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Sub-category</TableCell>
              <TableCell>Volume</TableCell>
              <TableCell>Section</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {chapters.map((chapter, index) => (
              <TableRow key={chapter._id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{chapter._id}</TableCell>
                <TableCell>{chapter.title}</TableCell>
                <TableCell>{chapter.book_id ? chapter.book_id._id : ''}</TableCell>
                <TableCell>{chapter.type_of_context}</TableCell>
                <TableCell>{chapter.category}</TableCell>
                <TableCell>{chapter.subcategory}</TableCell>
                <TableCell>{chapter.volume}</TableCell>
                <TableCell>{chapter.section}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ChapterTable;
