import React from 'react';
import Section from '../components/Section';
import CardGrid from '../components/CardGrid';
import { useTranslation } from 'react-i18next';

export default function Gallery() {
  const { t } = useTranslation();
  const items = t('gallery.items', { returnObjects: true });
  return (
    <Section title={t('gallery.title')} subtitle={t('gallery.subtitle')}>
      <CardGrid items={items} />
    </Section>
  );
}
