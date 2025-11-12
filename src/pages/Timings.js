import React from 'react';
import { useTranslation } from 'react-i18next';
import Section from '../components/Section';
import TimingsTable from '../components/TimingsTable';

export default function Timings(){
  const { t } = useTranslation();
  return (
    <Section title={t('timings.title')} subtitle={t('timings.subtitle')}>
      <TimingsTable rows={t('timings.rows', { returnObjects:true })} specials={t('timings.specials', { returnObjects:true })} />
    </Section>
  );
}
