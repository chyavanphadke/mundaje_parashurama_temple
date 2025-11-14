import React from 'react';
import { useTranslation } from 'react-i18next';
import Section from '../components/Section';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import placeholder from '../assets/placeholder.jpg';

// Deity photos – adjust paths/names to match your assets
import imgParashurama from '../assets/deities/parashurama.jpg';
import imgSiddhivinayaka from '../assets/deities/siddhivinayaka.jpg';
import imgNaga from '../assets/deities/naga.jpg';
import imgAnnapoorneshwari from '../assets/deities/annapoorneshwari.jpg';
import imgNavagraha from '../assets/deities/navagrahas.jpg';
import imgKshetrapala from '../assets/deities/kshetrapala.jpg';

export default function Deities() {
  const { t } = useTranslation();
  const items = t('deities.items', { returnObjects: true }) || [];

  // Map images by index in the same order as the JSON items
  const deityImages = [
    imgParashurama,
    imgSiddhivinayaka,
    imgNaga,
    imgAnnapoorneshwari,
    imgNavagraha,
    imgKshetrapala,
  ];

  const list = Array.isArray(items)
    ? items.map((item, index) => ({
        ...item,
        image: deityImages[index] || placeholder,
      }))
    : [];

  return (
    <Section title={t('deities.title')} subtitle={t('deities.subtitle')}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {list.map((item, index) => (
          <Paper
            key={index}
            elevation={0}
            sx={{
              p: { xs: 2, md: 3 },
              borderRadius: 4,
              border: '1px solid #E6D8B6',
              bgcolor: '#FFFBF5',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' }, // 👈 always image left, text right on md+
                gap: { xs: 2, md: 3 },
                alignItems: { xs: 'flex-start', md: 'stretch' },
              }}
            >
              {/* Image (always left on desktop) */}
              <Box
                sx={{
                  flexBasis: { md: '40%' },
                  flexShrink: 0,
                  borderRadius: 3,
                  overflow: 'hidden',
                }}
              >
                <Box
                  component="img"
                  src={item.image}
                  alt={item.name}
                  sx={{
                    width: '100%',
                    height: { xs: 200, md: 260 },
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
              </Box>

              {/* Text content (always right on desktop) */}
              <Box sx={{ flex: '1 1 0' }}>
                <Typography variant="h5" sx={{ fontWeight: 800 }}>
                  {item.name}
                </Typography>

                {item.note && (
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    sx={{ mt: 0.5 }}
                  >
                    {item.note}
                  </Typography>
                )}

                {item.description && (
                  <Typography variant="body1" sx={{ mt: 1.5 }}>
                    {item.description}
                  </Typography>
                )}
              </Box>
            </Box>
          </Paper>
        ))}
      </Box>
    </Section>
  );
}
