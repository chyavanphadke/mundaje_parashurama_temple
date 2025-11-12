import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';

export default function Section({ title, children, subtitle }) {
  return (
    <Box sx={{ my: 6 }}>
      {title && (
        <Box sx={{ textAlign: 'center', mb: 2 }}>
          <Typography component="div" variant="h4" sx={{ mb: 1 }}>
            <span className="section-title">{title}</span>
          </Typography>
          {subtitle ? (
            <Typography variant="body2" color="text.secondary">
              <LocalFireDepartmentIcon fontSize="inherit" sx={{ color: 'gold.main', mr: .5, verticalAlign: 'middle' }} />
              {subtitle}
            </Typography>
          ) : null}
        </Box>
      )}
      <Box>{children}</Box>
    </Box>
  );
}
