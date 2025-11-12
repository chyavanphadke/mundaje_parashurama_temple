import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';

export default function TimingsTable({ rows, specials }) {
  return (
    <>
      <Paper sx={{ border: '1px solid #E6D8B6' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 800 }}>Day</TableCell>
              <TableCell sx={{ fontWeight: 800 }}>Morning</TableCell>
              <TableCell sx={{ fontWeight: 800 }}>Evening</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((r, i) => (
              <TableRow key={i}>
                <TableCell>{r.day}</TableCell>
                <TableCell>{r.morning}</TableCell>
                <TableCell>{r.evening}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>

      {specials?.length ? (
        <div style={{ marginTop: 12, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {specials.map((s, i) => <Chip key={i} label={s} variant="outlined" className="temple-chip" />)}
        </div>
      ) : null}
    </>
  );
}
