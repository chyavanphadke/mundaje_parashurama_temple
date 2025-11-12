import React from 'react';
import { useTranslation } from 'react-i18next';
import Section from '../components/Section';
import CardGrid from '../components/CardGrid';

export default function Festivals(){
  const { t } = useTranslation();
  const items = t('festivals.items', { returnObjects:true }) || [];
  return (
    <Section title={t('festivals.title')} subtitle={t('festivals.subtitle')}>
      <CardGrid items={Array.isArray(items) ? items : []} />
    </Section>
  );
}
