import React from 'react';
import Section from '../components/Section';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();
  return (
    <Section title={t('about.title')} subtitle={t('about.subtitle')}>
      <Typography sx={{ mb: 1 }}>{t('about.paras.0')}</Typography>
      <Typography sx={{ mb: 1 }}>{t('about.paras.1')}</Typography>
      <Typography sx={{ mb: 1 }}>{t('about.paras.2')}</Typography>
      <Typography variant="h6" sx={{ mt: 2, fontWeight: 800 }}>{t('about.milestonesTitle')}</Typography>
      <ul style={{ marginTop: 8 }}>
        {t('about.milestones', { returnObjects: true }).map((m, i) => (
          <li key={i}><Typography variant="body2">{m}</Typography></li>
        ))}
      </ul>
    </Section>
  );
}
