import React from 'react';
import Section from '../components/Section';
import CardGrid from '../components/CardGrid';
import UpiBlock from '../components/UpiBlock';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';

export default function SevaDonations() {
  const { t } = useTranslation();
  const rawItems = t('seva.items', { returnObjects: true });
  const items = Array.isArray(rawItems) ? rawItems : []; // guard

  return (
    <>

      <Section title={t('seva.donateTitle')}>
        <UpiBlock
          title={t('seva.upiTitle')}
          note={t('seva.upiNote')}
          caption={t('seva.qrCaption')}
          whyTitle={t('seva.whyTitle')}
          whyItems={t('seva.why', { returnObjects: true }) || []}
          usageTitle={t('seva.usageTitle')}
          usageItems={t('seva.usage', { returnObjects: true }) || []}
        />
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5 }}>
          {t('seva.futureOnline')}
        </Typography>
      </Section>
    </>
  );
}
