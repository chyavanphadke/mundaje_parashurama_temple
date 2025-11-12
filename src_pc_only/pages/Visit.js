import React from 'react';
import Section from '../components/Section';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import { useTranslation } from 'react-i18next';
import placeholder from '../assets/placeholder.jpg';

export default function Visit() {
  const { t } = useTranslation();
  const how = t('visit.how', { returnObjects: true });
  const rules = t('visit.rules', { returnObjects: true });
  const facilities = t('visit.facilities', { returnObjects: true });
  const mapLink = t('visit.mapLink');
  const plusCode = t('visit.plusCode');

  return (
    <Section title={t('visit.title')} subtitle={t('visit.subtitle')}>
      <Typography sx={{ mb: 1, fontWeight: 600 }}>{t('visit.address')}</Typography>
      <Typography variant="body2" sx={{ mb: 1 }}>
        Plus Code: {plusCode}
      </Typography>

      <Paper sx={{
        mt: 2, p: 2, border: '1px solid #E6D8B6',
        backgroundImage: `linear-gradient(rgba(201,162,39,.25), rgba(122,31,31,.25)), url(${placeholder})`,
        backgroundSize: 'cover', height: 220, display: 'flex', alignItems: 'center', justifyContent: 'center'
      }}>
        <Link href={mapLink} target="_blank" rel="noopener" underline="hover" sx={{ color: '#fff', fontWeight: 800, textShadow: '0 2px 6px rgba(0,0,0,.5)' }}>
          Open in Google Maps
        </Link>
      </Paper>

      <Grid container spacing={2} sx={{ mt: 1 }}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" sx={{ mt: 2, fontWeight: 800 }}>{t('visit.howTitle')}</Typography>
          <ul>{how.map((x, i) => <li key={i}><Typography variant="body2">{x}</Typography></li>)}</ul>
          <Typography variant="h6" sx={{ mt: 2, fontWeight: 800 }}>{t('visit.facilitiesTitle')}</Typography>
          <ul>{facilities.map((x, i) => <li key={i}><Typography variant="body2">{x}</Typography></li>)}</ul>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" sx={{ mt: 2, fontWeight: 800 }}>{t('visit.rulesTitle')}</Typography>
          <ul>{rules.map((x, i) => <li key={i}><Typography variant="body2">{x}</Typography></li>)}</ul>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>{t('visit.dressCode')}</Typography>
        </Grid>
      </Grid>
    </Section>
  );
}
