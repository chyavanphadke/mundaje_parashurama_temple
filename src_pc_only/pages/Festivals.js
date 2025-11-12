import React from 'react';
import Section from '../components/Section';
import CardGrid from '../components/CardGrid';
import { useTranslation } from 'react-i18next';

export default function Festivals() {
  const { t } = useTranslation();
  const items = t('festivals.items', { returnObjects: true });
  return (
    <Section title={t('festivals.title')} subtitle={t('festivals.subtitle')}>
      <CardGrid items={items} />
    </Section>
  );
}
