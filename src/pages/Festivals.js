import React from 'react';
import { useTranslation } from 'react-i18next';
import Section from '../components/Section';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import Brightness5Icon from '@mui/icons-material/Brightness5';

export default function Festivals() {
  const { t } = useTranslation();
  const items = t('festivals.items', { returnObjects: true }) || [];

  return (
    <Section title={t('festivals.title')}>
      <Paper
        elevation={0}
        sx={{
          p: { xs: 2, md: 3 },
          borderRadius: 4,
          border: '1px solid #E6D8B6',
          bgcolor: '#FFFBF5',
        }}
      >
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          sx={{ mb: 2 }}
        >
          <CalendarMonthIcon sx={{ color: 'primary.main' }} />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {t('festivals.subtitle')}
          </Typography>
        </Stack>

        <Divider sx={{ mb: 2 }} />

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: '1fr 1fr',
            },
            gap: 2,
          }}
        >
          {Array.isArray(items) &&
            items.map((item, index) => (
              <Paper
                key={index}
                elevation={0}
                sx={{
                  p: 2,
                  borderRadius: 3,
                  border: '1px solid rgba(230,216,182,0.9)',
                  bgcolor: '#FFFDF8',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 1,
                  height: '100%',
                }}
              >
                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="center"
                  sx={{ mb: 0.5 }}
                >
                  <Chip
                    label={index + 1}
                    size="small"
                    sx={{
                      fontWeight: 700,
                      borderRadius: '999px',
                      bgcolor: '#7A1F1F',
                      color: '#fff',
                      px: 1,
                    }}
                  />
                  <AutoAwesomeIcon
                    sx={{ fontSize: 18, color: 'goldenrod' }}
                  />
                </Stack>

                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 700,
                    lineHeight: 1.3,
                  }}
                >
                  {item.name}
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mt: 0.5 }}
                >
                  {item.note}
                </Typography>

                <Box sx={{ mt: 'auto', pt: 1 }}>
                  <Stack
                    direction="row"
                    spacing={0.5}
                    alignItems="center"
                    sx={{ opacity: 0.7 }}
                  >
                    <Brightness5Icon sx={{ fontSize: 16 }} />
                    <Typography
                      variant="caption"
                      sx={{ letterSpacing: 0.3 }}
                    >
                      {t('brand')}
                    </Typography>
                  </Stack>
                </Box>
              </Paper>
            ))}
        </Box>
      </Paper>
    </Section>
  );
}
