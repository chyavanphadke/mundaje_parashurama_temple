import React from 'react';
import { useTranslation } from 'react-i18next';
import Section from '../components/Section';
import TimingsTable from '../components/TimingsTable';

export default function Visit(){
  const { t } = useTranslation();
  return (
    <Section title={t('visit.title')} subtitle={t('visit.subtitle')}>
      <TimingsTable rows={t('timings.rows', { returnObjects:true })} specials={t('timings.specials', { returnObjects:true })} />
    </Section>
  );
}
