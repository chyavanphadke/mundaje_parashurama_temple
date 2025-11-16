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
    require('../assets/placeholder.jpg'),
  ];

  const highlights = t('about.highlights', { returnObjects: true });
  const focusPoints = t('about.focusPoints', { returnObjects: true });
  const devoteesPoints = t('about.devoteesPoints', { returnObjects: true });

  const renderBullet = (text, index) => {
    const [label, rest] = text.split(':');

    return (
      <Typography
        key={index}
        component="li"
        variant="body1"
        sx={{
          lineHeight: 1.7,
        }}
      >
        <Box component="span" sx={{ fontWeight: 600 }}>
          {label}
          {rest ? ':' : ''}
        </Box>
        {rest ? ` ${rest.trim()}` : ''}
      </Typography>
    );
  };

  // Reusable content card (used in both mobile + desktop)
  const ContentCard = () => (
    <Card
      sx={{
        width: '100%',
        borderRadius: 3,
        boxShadow: 3,
        border: (theme) => `1px solid ${theme.palette.divider}`,
      }}
    >
      <CardContent sx={{ p: { xs: 3, md: 4 } }}>
        <Stack spacing={3}>
          {/* Bullet section - Key Highlights */}
          {Array.isArray(highlights) && highlights.length > 0 && (
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  mb: 1,
                }}
              >
                {t('about.highlightsTitle')}
              </Typography>
              <Stack
                component="ul"
                spacing={1}
                sx={{
                  pl: 3,
                  m: 0,
                  listStyleType: 'disc',
                }}
              >
                {highlights.map((item, idx) => renderBullet(item, idx))}
              </Stack>
            </Box>
          )}

          {/* Bullet section - Temple Complex & Deities */}
          {Array.isArray(focusPoints) && focusPoints.length > 0 && (
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  mb: 1,
                }}
              >
                {t('about.focusTitle')}
              </Typography>
              <Stack
                component="ul"
                spacing={1}
                sx={{
                  pl: 3,
                  m: 0,
                  listStyleType: 'disc',
                }}
              >
                {focusPoints.map((item, idx) => renderBullet(item, idx))}
              </Stack>
            </Box>
          )}

          {/* Bullet section - For Devotees */}
          {Array.isArray(devoteesPoints) && devoteesPoints.length > 0 && (
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  mb: 1,
                }}
              >
                {t('about.devoteesTitle')}
              </Typography>
              <Stack
                component="ul"
                spacing={1}
                sx={{
                  pl: 3,
                  m: 0,
                  listStyleType: 'disc',
                }}
              >
                {devoteesPoints.map((item, idx) => renderBullet(item, idx))}
              </Stack>
            </Box>
          )}
        </Stack>
      </CardContent>
    </Card>
  );

  return (
    <Section title={t('about.highlightsTitle')} subtitle={t('about.subtitle')}>
      {/* Desktop / tablet layout – unchanged */}
      <Box
        sx={{
          display: { xs: 'none', md: 'flex' },
          flexDirection: 'row',
          gap: 3,
          mt: 2,
        }}
      >
        {/* LEFT - IMAGE COLUMN */}
        <Box
          sx={{
            width: '32%',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Stack spacing={2}>
            {[images[0], images[1], images[2]].map((img, idx) => (
              <Card
                key={idx}
                sx={{
                  borderRadius: 3,
                  overflow: 'hidden',
                  boxShadow: 3,
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 6,
                  },
                }}
              >
                <CardMedia
                  component="img"
                  image={img}
                  alt={`Temple view ${idx + 1}`}
                  sx={{
                    width: '100%',
                    height: 240,
                    objectFit: 'cover',
                  }}
                />
              </Card>
            ))}
          </Stack>
        </Box>

        {/* RIGHT - CONTENT */}
        <Box sx={{ width: '68%' }}>
          <ContentCard />
        </Box>
      </Box>

      {/* Mobile layout: 
          1) First image on top
          2) Description card
          3) Other 2 images side by side
      */}
      <Box
        sx={{
          display: { xs: 'flex', md: 'none' },
          flexDirection: 'column',
          gap: 2,
          mt: 2,
        }}
      >
        {/* Top image */}
        <Card
          sx={{
            borderRadius: 3,
            overflow: 'hidden',
            boxShadow: 3,
          }}
        >
          <CardMedia
            component="img"
            image={images[0]}
            alt="Temple view 1"
            sx={{
              width: '100%',
              height: 220,
              objectFit: 'cover',
            }}
          />
        </Card>

        {/* Content */}
        <ContentCard />

        {/* Bottom two images side by side */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
            gap: 2,
          }}
        >
          {[images[1], images[2]].map((img, idx) => (
            <Card
              key={idx}
              sx={{
                borderRadius: 3,
                overflow: 'hidden',
                boxShadow: 3,
              }}
            >
              <CardMedia
                component="img"
                image={img}
                alt={`Temple view ${idx + 2}`}
                sx={{
                  width: '100%',
                  height: 150,
                  objectFit: 'cover',
                }}
              />
            </Card>
          ))}
        </Box>
      </Box>
    </Section>
  );
}
