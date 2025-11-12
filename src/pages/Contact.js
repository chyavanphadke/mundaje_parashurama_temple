import React from 'react';
import Section from '../components/Section';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();
  const priests = t('contact.priests', { returnObjects: true }) || [];
  const trustNotes = t('contact.trustNotes', { returnObjects: true }) || [];
  const trustMembers = t('contact.trustMembers', { returnObjects: true }) || [];

  return (
    <Section title={t('contact.title')} subtitle={t('contact.subtitle')}>
      <Typography>{t('contact.address')}</Typography>
      <Typography sx={{ mt: 1 }}>{t('contact.phone')}</Typography>
      <Typography>{t('contact.email')}</Typography>
      <Typography sx={{ mt: 2 }} variant="body2" color="text.secondary">{t('contact.officeHours')}</Typography>
      <Typography sx={{ mt: 1 }} variant="body2"><strong>{t('contact.booking')}</strong></Typography>

      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>
            {t('contact.priestsTitle')}
          </Typography>
          <ul>{priests.map((x, i) => <li key={i}><Typography variant="body2">{x}</Typography></li>)}</ul>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>
            {t('contact.trustTitle')}
          </Typography>
          <ul>{trustNotes.map((x, i) => <li key={i}><Typography variant="body2">{x}</Typography></li>)}</ul>
          <ul style={{ marginTop: 8 }}>
            {trustMembers.map((x, i) => <li key={i}><Typography variant="body2">{x}</Typography></li>)}
          </ul>
        </Grid>
      </Grid>
    </Section>
  );
}
