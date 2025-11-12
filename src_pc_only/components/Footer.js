import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <Box component="footer" sx={{ mt: 8, bgcolor: 'background.paper', borderTop: '1px solid #E6D8B6' }}>
      <Container maxWidth="lg" sx={{ py: 3, textAlign: 'center' }}>
        <Typography variant="body2" sx={{ fontWeight: 600 }}>
          {t('footer.copy1')}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {t('footer.copy2')}
        </Typography>
      </Container>
    </Box>
  );
}
