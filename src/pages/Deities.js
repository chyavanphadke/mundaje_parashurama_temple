import React from 'react';
import { useTranslation } from 'react-i18next';
import Section from '../components/Section';
import CardGrid from '../components/CardGrid';

export default function Deities(){
  const { t } = useTranslation();
  const items = t('deities.items', { returnObjects:true }) || [];
  return (
    <Section title={t('deities.title')} subtitle={t('deities.subtitle')}>
      <CardGrid items={Array.isArray(items) ? items : []} />
    </Section>
  );
}
