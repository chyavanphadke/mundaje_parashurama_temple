import React from 'react';
import { useTranslation } from 'react-i18next';
import Section from '../components/Section';
import CardGrid from '../components/CardGrid';

export default function Gallery(){
  const { t } = useTranslation();
  const items = t('gallery.items', { returnObjects:true }) || [];
  return (
    <Section title={t('gallery.title')} subtitle={t('gallery.subtitle')}>
      <CardGrid items={Array.isArray(items) ? items : []} />
    </Section>
  );
}
