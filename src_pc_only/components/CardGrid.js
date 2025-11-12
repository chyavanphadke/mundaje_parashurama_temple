import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import placeholder from '../assets/placeholder.jpg';

export default function CardGrid({ items = [] }) {
  const list = Array.isArray(items) ? items : [];

  if (list.length === 0) {
    return (
      <Card className="temple-card">
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            No items to display.
          </Typography>
        </CardContent>
      </Card>
    );
  }

  return (
    <Grid container spacing={2}>
      {list.map((it, idx) => (
        <Grid item xs={12} sm={6} md={4} key={idx}>
          <Card className="temple-card">
            <CardMedia component="img" height="180" image={it.image || placeholder} alt={it.name} />
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 800 }}>{it.name}</Typography>
              {it.note && <Typography variant="body2" color="text.secondary">{it.note}</Typography>}
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
