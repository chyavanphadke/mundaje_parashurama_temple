import React from 'react';
import Section from '../components/Section';
import TimingsTable from '../components/TimingsTable';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { useTranslation } from 'react-i18next';

export default function Timings() {
  const { t } = useTranslation();
  const rows = t('timings.rows', { returnObjects: true });
  const specials = t('timings.specials', { returnObjects: true });
  const aratis = t('timings.aratis', { returnObjects: true });

  return (
    <Section title={t('timings.title')} subtitle={t('timings.subtitle')}>
      <TimingsTable rows={rows} specials={specials} />

      {aratis?.length ? (
        <>
          <Typography variant="h6" sx={{ mt: 3, fontWeight: 800 }}>
            ಆರತಿಗಳು
          </Typography>
          <List dense>
            {aratis.map((a, i) => <ListItem key={i} sx={{ py: 0 }}>{a}</ListItem>)}
          </List>
        </>
      ) : null}
    </Section>
  );
}
