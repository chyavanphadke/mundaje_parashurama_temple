import React from 'react';
import Section from '../components/Section';
import CardGrid from '../components/CardGrid';
import { useTranslation } from 'react-i18next';

export default function Deities() {
  const { t } = useTranslation();
  const items = t('deities.items', { returnObjects: true });
  return (
    <Section title={t('deities.title')} subtitle={t('deities.subtitle')}>
      <CardGrid items={items} />
    </Section>
  );
}
