import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function TimingsTable({ rows = [], specials = [] }){
  const list = Array.isArray(rows) ? rows : [];
  return (
    <>
      <TableContainer component={Paper} sx={{ border: '1px solid #E6D8B6' }}>
        <Table size="small" aria-label="timings">
          <TableHead>
            <TableRow>
              <TableCell>Day</TableCell>
              <TableCell>Morning</TableCell>
              <TableCell>Evening</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {list.map((r, i)=>(
              <TableRow key={i}>
                <TableCell>{r.day}</TableCell>
                <TableCell>{r.morning}</TableCell>
                <TableCell>{r.evening}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {Array.isArray(specials) && specials.length ? (
        <ul style={{ marginTop: 8 }}>
          {specials.map((s, i)=>(<li key={i}>{s}</li>))}
        </ul>
      ): null}
    </>
  );
}
