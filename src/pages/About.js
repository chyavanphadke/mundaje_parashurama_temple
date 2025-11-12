import React from 'react';
import { useTranslation } from 'react-i18next';
import Section from '../components/Section';
import Typography from '@mui/material/Typography';

export default function About(){
  const { t } = useTranslation();
  return (
    <Section title={t('about.title')} subtitle={t('about.subtitle')}>
      <Typography sx={{ mb:1 }}>{t('about.paras.0')}</Typography>
      <Typography sx={{ mb:1 }}>{t('about.paras.1')}</Typography>
      <Typography sx={{ mb:1 }}>{t('about.paras.2')}</Typography>
    </Section>
  );
}
