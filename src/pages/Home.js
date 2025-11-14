import React from 'react';
import { useTranslation } from 'react-i18next';
import Section from '../components/Section';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import TempleHinduIcon from '@mui/icons-material/TempleHindu';
import PlaceIcon from '@mui/icons-material/Place';
import RouteIcon from '@mui/icons-material/Route';
import GavelIcon from '@mui/icons-material/Gavel';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import placeholder from '../assets/placeholder.jpg';
import mapImag from '../assets/map.png';
import { Link as RouterLink } from 'react-router-dom';
import UpiBlock from '../components/UpiBlock';

// deity photos – adjust paths to your actual files
import imgParashurama from '../assets/deities/parashurama.jpg';
import imgSiddhivinayaka from '../assets/deities/siddhivinayaka.jpg';
import imgNaga from '../assets/deities/naga.jpg';
import imgAnnapoorneshwari from '../assets/deities/annapoorneshwari.jpg';
import imgNavagraha from '../assets/deities/navagrahas.jpg';
import imgKshetrapala from '../assets/deities/kshetrapala.jpg';

export default function Home() {
  const { t } = useTranslation();
  const timingRows = t('timings.rows', { returnObjects: true });
  const timingSpecials = t('timings.specials', { returnObjects: true });
  const deities = t('deities.items', { returnObjects: true }) || [];

  const deityImages = [
    imgParashurama,
    imgSiddhivinayaka,
    imgNaga,
    imgAnnapoorneshwari,
    imgNavagraha,
    imgKshetrapala,
  ];

  const mapLink = t('visit.mapLink');
  const plusCode = t('visit.plusCode');
  const how = t('visit.how', { returnObjects: true });
  const facilities = t('visit.facilities', { returnObjects: true });
  const rules = t('visit.rules', { returnObjects: true });

  // contact data for teaser at bottom
  const priests = t('contact.priests', { returnObjects: true }) || [];
  const trustNotes = t('contact.trustNotes', { returnObjects: true }) || [];
  const trustMembers = t('contact.trustMembers', { returnObjects: true }) || [];

  const to12h = (hhmm) => {
    if (!hhmm) return '';
    const [hStr, mStr] = hhmm.split(':');
    let h = parseInt(hStr, 10);
    const m = parseInt(mStr, 10);
    const suffix = h >= 12 ? 'PM' : 'AM';
    h = h % 12;
    if (h === 0) h = 12;
    return `${h}:${String(m).padStart(2, '0')} ${suffix}`;
  };

  const formatRange = (range) => {
    if (!range) return '';
    const parts = range.replace(/\s/g, '').split(/–|-/);
    if (parts.length !== 2) return range;
    return `${to12h(parts[0])} – ${to12h(parts[1])}`;
  };

  const dayRow = timingRows?.[0] || { morning: '', evening: '' };
  const morningRange = formatRange(dayRow.morning);
  const eveningRange = formatRange(dayRow.evening);

  return (
    <>
      {/* Centered Timings banner */}
      <Paper
        elevation={0}
        sx={{
          mb: 3,
          px: 2,
          py: 1.25,
          border: '1px solid #E6D8B6',
          bgcolor: '#FFF2D9',
          borderRadius: 3,
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            background:
              'radial-gradient(circle at 20% 0%, rgba(201,162,39,.12), transparent 40%), radial-gradient(circle at 80% 100%, rgba(122,31,31,.08), transparent 40%)',
          }}
        />
        <Stack
          direction="row"
          spacing={1}
          justifyContent="center"
          alignItems="center"
          sx={{ flexWrap: 'wrap', rowGap: 0.5 }}
        >
          <TempleHinduIcon sx={{ color: 'primary.main' }} />
          <Typography variant="subtitle1" sx={{ fontWeight: 900 }}>
            {t('timings.bannerTitle')}:
          </Typography>
          <AccessTimeIcon sx={{ fontSize: 18, color: 'text.secondary' }} />
          <Typography variant="subtitle1" sx={{ fontWeight: 800 }}>
            {t('timings.bannerEveryday')} • {t('timings.bannerMorning')}{' '}
            {morningRange} | {t('timings.bannerEvening')} {eveningRange}
          </Typography>
        </Stack>
      </Paper>

      {/* Hero card */}
      <Paper
        elevation={3}
        sx={{
          p: { xs: 2.5, md: 5 },
          mb: 5,
          border: '1px solid #E6D8B6',
          borderRadius: 4,
          backgroundImage: `linear-gradient(rgba(122,31,31,.35), rgba(201,162,39,.25)), url(${placeholder})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#fff',
        }}
      >
        <Typography variant="h3" className="hero-text-shadow">
          {t('brand')}
        </Typography>
        <Typography
          variant="h6"
          sx={{ mt: 1, maxWidth: 820 }}
          className="hero-text-shadow"
        >
          {t('hero.subtitle')}
        </Typography>
        <Typography
          variant="body1"
          sx={{ mt: 1.5, fontWeight: 700 }}
          className="hero-text-shadow"
        >
          “{t('mantra')}”
        </Typography>
        <Stack direction="row" spacing={1.5} sx={{ mt: 2, flexWrap: 'wrap' }}>
          {timingSpecials?.slice(0, 3).map((label, i) => (
            <Chip
              key={i}
              label={label}
              variant="outlined"
              className="temple-chip"
              sx={{
                borderRadius: 999,
                backdropFilter: 'blur(2px)',
                bgcolor: 'rgba(255,255,255,.08)',
              }}
            />
          ))}
        </Stack>

        {/* Hero CTAs */}
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 3 }}>
          {/* Scroll to Visitor Information section */}
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              const section = document.getElementById('visitInfo');
              if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            {t('hero.ctaVisit')}
          </Button>

          {/* Go to Seva page */}
          <Button
            component={RouterLink}
            to="/seva"
            variant="outlined"
            color="secondary"
          >
            {t('hero.ctaSeva')}
          </Button>
        </Stack>
      </Paper>

      {/* About teaser */}
      <Section title={t('about.title')} subtitle={t('home.highlight')}>
        <Typography>{t('about.paras.0')}</Typography>
        <Typography sx={{ mt: 1 }}>{t('about.paras.1')}</Typography>
      </Section>

      {/* Deities teaser as photo cards: CSS grid, 3 per row on md+ */}
      <Section title={t('deities.title')} subtitle={t('deities.subtitle')}>
        <Box
          sx={{
            display: 'grid',
            gap: 2,
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, minmax(0, 1fr))',
              md: 'repeat(3, minmax(0, 1fr))',
            },
          }}
        >
          {(Array.isArray(deities) ? deities.slice(0, 6) : []).map(
            (item, index) => {
              const imgSrc = deityImages[index] || placeholder;
              return (
                <Card
                  key={index}
                  elevation={1}
                  sx={{
                    borderRadius: 3,
                    border: '1px solid #E6D8B6',
                    bgcolor: '#FFFBF5',
                    overflow: 'hidden',
                    height: '100%',
                  }}
                >
                  <CardActionArea
                    component={RouterLink}
                    to="/deities"
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'stretch',
                    }}
                  >
                    <Box
                      component="img"
                      src={imgSrc}
                      alt={item.name}
                      sx={{
                        width: '100%',
                        height: 140,
                        objectFit: 'cover',
                      }}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                        {item.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mt: 0.5 }}
                      >
                        {item.note}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              );
            }
          )}
        </Box>
      </Section>

      {/* Donation / UPI QR - premium layout */}
      <Section id="donation" title={t('seva.donateTitle')}>
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

      {/* Visit teaser - temple-styled panel */}
      <Section
        id="visitInfo"
        title={t('visit.title')}
        subtitle={t('visit.subtitle')}
      >
        <Paper
          elevation={0}
          sx={{
            p: { xs: 2, md: 3 },
            borderRadius: 4,
            border: '1px solid #E6D8B6',
            bgcolor: '#FFFBF5',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <Box
            sx={{
              height: 4,
              borderRadius: '999px',
              mb: 2,
              background:
                'linear-gradient(90deg, #C9A227 0 25%, #D97706 25% 50%, #7A1F1F 50% 75%, #C9A227 75% 100%)',
            }}
          />
          <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
            <PlaceIcon sx={{ color: 'secondary.main' }} />
            <Typography sx={{ fontWeight: 700 }}>
              {t('visit.address')}
            </Typography>
          </Stack>
          <Typography variant="body2" sx={{ mb: 1.5, color: 'text.secondary' }}>
            Plus Code: {plusCode}
          </Typography>

          {/* Framed map banner */}
          <Paper
            sx={{
              p: 2,
              borderRadius: 3,
              border: '1px solid #E6D8B6',
              backgroundImage: `linear-gradient(rgba(201,162,39,.18), rgba(122,31,31,.18)), url(${mapImag})`,
              backgroundSize: 'cover',
              height: 180,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mb: 2,
            }}
          >
            <Link
              href={mapLink}
              target="_blank"
              rel="noopener"
              underline="hover"
              sx={{
                color: '#fff',
                fontWeight: 900,
                textShadow: '0 2px 6px rgba(0,0,0,.5)',
              }}
            >
              Open in Google Maps
            </Link>
          </Paper>

          {/* How to Reach */}
          <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 1 }}>
            <RouteIcon sx={{ color: 'primary.main' }} />
            <Typography variant="h6" sx={{ fontWeight: 900 }}>
              {t('visit.howTitle')}
            </Typography>
          </Stack>
          <List dense sx={{ mt: 0.5, pt: 0 }}>
            {how.map((x, i) => (
              <ListItem key={i} sx={{ py: 0.25 }}>
                <ListItemIcon sx={{ minWidth: 26 }}>
                  <FiberManualRecordIcon
                    sx={{ fontSize: 8, color: 'gold.main' }}
                  />
                </ListItemIcon>
                <ListItemText
                  primaryTypographyProps={{ variant: 'body2' }}
                  primary={x}
                />
              </ListItem>
            ))}
          </List>

          {/* Facilities + Rules */}
          <Grid container spacing={3} alignItems="stretch" sx={{ mt: 1 }}>
            <Grid
              item
              xs={12}
              md={6}
              sx={{ display: 'flex', flexDirection: 'column' }}
            >
              <Stack direction="row" alignItems="center" spacing={1}>
                <AutoAwesomeIcon sx={{ color: 'gold.main' }} />
                <Typography variant="h6" sx={{ fontWeight: 900 }}>
                  {t('visit.facilitiesTitle')}
                </Typography>
              </Stack>
              <List dense sx={{ mt: 0.5, pt: 0, flexGrow: 1 }}>
                {facilities.map((x, i) => (
                  <ListItem key={i} sx={{ py: 0.25 }}>
                    <ListItemIcon sx={{ minWidth: 26 }}>
                      <FiberManualRecordIcon
                        sx={{ fontSize: 8, color: 'gold.main' }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primaryTypographyProps={{ variant: 'body2' }}
                      primary={x}
                    />
                  </ListItem>
                ))}
              </List>
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
              sx={{ display: 'flex', flexDirection: 'column' }}
            >
              <Stack direction="row" alignItems="center" spacing={1}>
                <GavelIcon sx={{ color: 'secondary.main' }} />
                <Typography variant="h6" sx={{ fontWeight: 900 }}>
                  {t('visit.rulesTitle')}
                </Typography>
              </Stack>
              <List dense sx={{ mt: 0.5, pt: 0, flexGrow: 1 }}>
                {rules.map((x, i) => (
                  <ListItem key={i} sx={{ py: 0.25 }}>
                    <ListItemIcon sx={{ minWidth: 26 }}>
                      <FiberManualRecordIcon
                        sx={{ fontSize: 8, color: 'gold.main' }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primaryTypographyProps={{ variant: 'body2' }}
                      primary={x}
                    />
                  </ListItem>
                ))}
              </List>
            </Grid>
          </Grid>

          <Divider sx={{ my: 1.5 }} />
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mt: 1 }}
          >
            {t('visit.dressCode')}
          </Typography>
        </Paper>
      </Section>

      {/* Contact teaser (same layout as Contact page) */}
      <Section title={t('contact.title')} subtitle={t('contact.subtitle')}>
        <Typography>{t('contact.address')}</Typography>
        <Typography sx={{ mt: 1 }}>{t('contact.phone')}</Typography>
        <Typography>{t('contact.email')}</Typography>
        <Typography sx={{ mt: 2 }} variant="body2" color="text.secondary">
          {t('contact.officeHours')}
        </Typography>
        <Typography sx={{ mt: 1 }} variant="body2">
          <strong>{t('contact.booking')}</strong>
        </Typography>

        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>
              {t('contact.priestsTitle')}
            </Typography>
            <ul>
              {priests.map((x, i) => (
                <li key={i}>
                  <Typography variant="body2">{x}</Typography>
                </li>
              ))}
            </ul>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>
              {t('contact.trustTitle')}
            </Typography>
            <ul>
              {trustNotes.map((x, i) => (
                <li key={i}>
                  <Typography variant="body2">{x}</Typography>
                </li>
              ))}
            </ul>
            <ul style={{ marginTop: 8 }}>
              {trustMembers.map((x, i) => (
                <li key={i}>
                  <Typography variant="body2">{x}</Typography>
                </li>
              ))}
            </ul>
          </Grid>
        </Grid>
      </Section>
    </>
  );
}
