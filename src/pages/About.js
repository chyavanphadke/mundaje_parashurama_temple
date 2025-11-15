import React from 'react';
import { useTranslation } from 'react-i18next';
import Section from '../components/Section';
import { Box, Typography, Stack, Card, CardMedia, CardContent } from '@mui/material';

export default function About() {
  const { t } = useTranslation();

  // Images
  const images = [
    require('../assets/placeholder.jpg'),
    require('../assets/placeholder.jpg'),
    require('../assets/placeholder.jpg')
  ];

  return (
    <Section title={t('about.title')} subtitle={t('about.subtitle')}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 3,
          mt: 2
        }}
      >
        {/* LEFT - 30% IMAGES */}
        <Box
          sx={{
            width: { xs: '100%', md: '30%' },
            display: 'flex',
            flexDirection: 'column',
            gap: 2
          }}
        >
          {images.map((img, i) => (
            <Card key={i} sx={{ borderRadius: 2, overflow: 'hidden' }}>
              <CardMedia
                component="img"
                image={img}
                alt={`About image ${i + 1}`}
                sx={{
                  width: '100%',
                  height: 180,
                  objectFit: 'cover'
                }}
              />
            </Card>
          ))}
        </Box>

        {/* RIGHT - 70% CONTENT */}
        <Card
          sx={{
            width: { xs: '100%', md: '70%' },
            borderRadius: 2,
            boxShadow: 2
          }}
        >
          <CardContent>
            <Stack spacing={2}>
              <Typography>{t('about.paras.0')}</Typography>
              <Typography>{t('about.paras.1')}</Typography>
              <Typography>{t('about.paras.2')}</Typography>
            </Stack>
          </CardContent>
        </Card>
      </Box>
    </Section>
  );
}
