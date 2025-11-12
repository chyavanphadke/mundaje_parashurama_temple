import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Section({ title, subtitle, children }){
  return (
    <Box sx={{ mb: 5 }}>
      {title && <Typography variant="h5" sx={{ fontWeight: 900, mb: 0.5 }}>{title}</Typography>}
      {subtitle && <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>{subtitle}</Typography>}
      <div>{children}</div>
    </Box>
  );
}
