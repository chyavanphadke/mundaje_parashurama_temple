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
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import TempleHinduIcon from '@mui/icons-material/TempleHindu';
import PlaceIcon from '@mui/icons-material/Place';
import RouteIcon from '@mui/icons-material/Route';
import GavelIcon from '@mui/icons-material/Gavel';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
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

// gallery teaser images – Event1:image1, Event2:image2, Event3:image3
import ev4img1 from '../assets/Gallery/event4/image1.jpg';
import gEv2Img2 from '../assets/Gallery/event2/image2.jpg';
import gEv3Img3 from '../assets/Gallery/event3/image3.jpg';

export default function Home() {
  const { t, i18n } = useTranslation();
  const lang =
    i18n.language && i18n.language.startsWith('kn') ? 'kn' : 'en';

  const timingRows = t('timings.rows', { returnObjects: true });
  const timingSpecials = t('timings.specials', { returnObjects: true });
  const deities = t('deities.items', { returnObjects: true }) || [];
  const homeAboutTeaser =
    t('home.aboutTeaser', { returnObjects: true }) || [];

  const deityImages = [
    imgParashurama,
    imgSiddhivinayaka,
    imgAnnapoorneshwari,
    imgNaga,
    imgNavagraha,
    imgKshetrapala,
  ];

  const mapLink = t('visit.mapLink');
  const how = t('visit.how', { returnObjects: true }) || [];
  const facilities =
    t('visit.facilities', { returnObjects: true }) || [];
  const rules = t('visit.rules', { returnObjects: true }) || [];

  const priests = t('contact.priests', { returnObjects: true }) || [];
  const trustNotes =
    t('contact.trustNotes', { returnObjects: true }) || [];
  const trustMembers =
    t('contact.trustMembers', { returnObjects: true }) || [];

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

  // Only show first row (3 deities) on Home
  const homeDeities = Array.isArray(deities)
    ? deities.slice(0, 3)
    : [];

  // Small, static gallery teaser data (titles only, text kept here for easy edit)
  const galleryTeasers = [
    {
      image: ev4img1,
      date: '2025-11-09',
      titleEn: 'Karthika Deepotsava – Lamp Offering',
      titleKn: 'ಕಾರ್ತಿಕ ದೀಪೋತ್ಸವ – ದೀಪಾರ್ಚನೆ',
    },
    {
      image: gEv2Img2,
      date: '15 Oct 2024',
      titleEn: 'Navaratri Celebrations – Devi Alankara',
      titleKn: 'ನವರಾತ್ರಿ ಉತ್ಸವ – ದೇವಿ ಅಲಂಕಾರ',
    },
    {
      image: gEv3Img3,
      date: '22 Apr 2024',
      titleEn: 'Sri Parashurama Jayanti – Alankara & Homa',
      titleKn: 'ಶ್ರೀ ಪರಶುರಾಮ ಜಯಂತಿ – ಅಲಂಕಾರ ಮತ್ತು ಹೋಮ',
    },
  ];

  const handleScrollToVisit = () => {
    if (typeof window === 'undefined') return;
    const section = document.getElementById('visitInfo');
    if (section) {
      const headerOffset = 80; // adjust if your header is taller/shorter
      const rect = section.getBoundingClientRect();
      const offsetTop = rect.top + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      {/* Timings banner */}
      <Paper
        elevation={0}
        sx={{
          mb: { xs: 2.5, sm: 3 },
          px: { xs: 1.5, sm: 2 },
          py: { xs: 1, sm: 1.25 },
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

        {/* Desktop / tablet layout (single line) */}
        <Stack
          direction="row"
          spacing={1}
          justifyContent="center"
          alignItems="center"
          sx={{
            flexWrap: 'wrap',
            rowGap: 0.5,
            position: 'relative',
            display: { xs: 'none', sm: 'flex' },
          }}
        >
          <TempleHinduIcon
            sx={{
              color: 'primary.main',
            }}
          />
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 900,
            }}
          >
            {t('timings.bannerTitle')}:
          </Typography>
          <AccessTimeIcon
            sx={{
              color: 'text.secondary',
            }}
          />
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 800,
            }}
          >
            {t('timings.bannerEveryday')} • {t('timings.bannerMorning')}{' '}
            {morningRange} | {t('timings.bannerEvening')} {eveningRange}
          </Typography>
        </Stack>

        {/* Mobile layout (stacked lines) */}
        <Stack
          direction="column"
          spacing={0.25}
          justifyContent="center"
          alignItems="center"
          sx={{
            position: 'relative',
            display: { xs: 'flex', sm: 'none' },
          }}
        >
          {/* Line 1: ದೇವಾಲಯ ಸಮಯ : ಪ್ರತಿದಿನ + clock icon */}
          <Stack
            direction="row"
            spacing={0.5}
            alignItems="center"
            justifyContent="center"
          >
            <TempleHinduIcon
              sx={{
                color: 'primary.main',
              }}
            />
            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: 900,
              }}
            >
              {t('timings.bannerTitle')}:{' '}
              <Typography
                component="span"
                sx={{ fontWeight: 700 }}
              >
                {t('timings.bannerEveryday')}
              </Typography>
            </Typography>
            <AccessTimeIcon
              sx={{
                color: 'text.secondary',
              }}
            />
          </Stack>

          {/* Line 2: ಬೆಳಗ್ಗೆ 7:00 AM – 12:30 PM */}
          <Typography variant="body2" sx={{ fontWeight: 500 }}>
            {t('timings.bannerMorning')} {morningRange}
          </Typography>

          {/* Line 3: ಸಂಜೆ 5:00 PM – 7:30 PM */}
          <Typography variant="body2" sx={{ fontWeight: 500 }}>
            {t('timings.bannerEvening')} {eveningRange}
          </Typography>
        </Stack>
      </Paper>

      {/* Hero card */}
      <Paper
        elevation={3}
        sx={{
          p: { xs: 2.25, sm: 3, md: 5 },
          mb: { xs: 4, md: 5 },
          border: '1px solid #E6D8B6',
          borderRadius: 4,
          backgroundImage: `linear-gradient(rgba(122,31,31,.55), rgba(201,162,39,.35)), url(${placeholder})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#fff',
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        <Typography
          variant="h3"
          className="hero-text-shadow"
          sx={{
            fontWeight: 800,
            lineHeight: { xs: 1.25, md: 1.3 },
          }}
        >
          {t('brand')}
        </Typography>
        <Typography
          variant="h6"
          sx={{
            mt: 1,
            maxWidth: 820,
            mx: { xs: 'auto', md: 0 },
          }}
          className="hero-text-shadow"
        >
          {t('hero.subtitle')}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mt: 1.5,
            fontWeight: 700,
          }}
          className="hero-text-shadow"
        >
          “{t('mantra')}”
        </Typography>
        <Stack
          direction="row"
          spacing={1}
          sx={{
            mt: 2,
            flexWrap: 'wrap',
            justifyContent: { xs: 'center', md: 'flex-start' },
            rowGap: 1,
          }}
        >
          {timingSpecials?.slice(0, 3).map((label, i) => (
            <Chip
              key={i}
              label={label}
              variant="outlined"
              className="temple-chip"
              sx={{
                borderRadius: 999,
                backdropFilter: 'blur(3px)',
                bgcolor: 'rgba(255,255,255,0.12)',
                color: '#fff',
                borderColor: 'rgba(255,255,255,0.35)',
                px: 1.2,
                py: 0.5,
                maxWidth: '100%',
                whiteSpace: 'normal',
                textAlign: 'center',
              }}
            />
          ))}
        </Stack>

        {/* Hero CTAs */}
        <Stack
          direction="row"
          spacing={1.5}
          sx={{
            mt: 3,
            justifyContent: { xs: 'center', sm: 'flex-start' },
            flexWrap: 'wrap',
          }}
        >
          {/* Scroll to Visitor Information section */}
          <Button
            variant="contained"
            color="primary"
            onClick={handleScrollToVisit}
            sx={{
              minWidth: { xs: 130, sm: 160 },
            }}
          >
            {t('hero.ctaVisit')}
          </Button>

          {/* Go to Seva page */}
          <Button
            component={RouterLink}
            to="/seva"
            variant="contained"
            color="primary"
            sx={{
              minWidth: { xs: 130, sm: 160 },
              borderWidth: 1.5,
            }}
          >
            {t('hero.ctaSeva')}
          </Button>
        </Stack>
      </Paper>

      {/* About teaser – short & crisp for Home */}
      <Section title={t('home.aboutTitle')} subtitle={t('home.highlight')}>
        {homeAboutTeaser.map((p, i) => (
          <Typography
            key={i}
            variant="body1"
            sx={{
              mt: i ? 1 : 0,
              lineHeight: { xs: 1.6, sm: 1.7 },
            }}
          >
            {p}
          </Typography>
        ))}

        <Box
          sx={{
            mt: 2,
            display: 'flex',
            justifyContent: { xs: 'center', sm: 'flex-end' },
          }}
        >
          <Button
            component={RouterLink}
            to="/about"
            size="small"
            endIcon={<ArrowForwardIcon sx={{ fontSize: 18 }} />}
          >
            {t('home.aboutCta')}
          </Button>
        </Box>
      </Section>

      {/* Deities teaser: only first row (3), plus More button */}
      <Section title={t('deities.title')} subtitle={t('deities.subtitle')}>
        <Box
          sx={{
            display: 'grid',
            gap: { xs: 1, sm: 2 },
            gridTemplateColumns: {
              xs: 'repeat(3, minmax(0, 1fr))',
              sm: 'repeat(3, minmax(0, 1fr))',
              md: 'repeat(3, minmax(0, 1fr))',
            },
          }}
        >
          {homeDeities.map((item, index) => {
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
                      height: { xs: 110, sm: 180 },
                      objectFit: 'cover',
                    }}
                  />
                  <CardContent
                    sx={{
                      flexGrow: 1,
                      px: { xs: 1, sm: 2 },
                      py: { xs: 1, sm: 1.5 },
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontWeight: 700,
                      }}
                    >
                      {item.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        mt: 0.5,
                      }}
                    >
                      {item.note}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            );
          })}
        </Box>

        {/* More link under the row */}
        <Box
          sx={{
            mt: 2,
            display: 'flex',
            justifyContent: { xs: 'center', sm: 'flex-end' },
          }}
        >
          <Button
            component={RouterLink}
            to="/deities"
            size="small"
            endIcon={<ArrowForwardIcon sx={{ fontSize: 18 }} />}
          >
            More Deities
          </Button>
        </Box>
      </Section>

      {/* Gallery teaser – 3 images from 3 events */}
      <Section title={t('gallery.title')} subtitle={t('gallery.subtitle')}>
        <Box
          sx={{
            display: 'grid',
            gap: { xs: 1, sm: 2 },
            gridTemplateColumns: {
              xs: 'repeat(3, minmax(0, 1fr))',
              sm: 'repeat(3, minmax(0, 1fr))',
              md: 'repeat(3, minmax(0, 1fr))',
            },
          }}
        >
          {galleryTeasers.map((g, idx) => {
            const title =
              lang === 'kn' ? g.titleKn : g.titleEn;
            return (
              <Card
                key={idx}
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
                  to="/gallery"
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'stretch',
                  }}
                >
                  <Box
                    component="img"
                    src={g.image}
                    alt={title}
                    sx={{
                      width: '100%',
                      height: { xs: 110, sm: 180 },
                      objectFit: 'cover',
                    }}
                  />
                  <CardContent
                    sx={{
                      flexGrow: 1,
                      px: { xs: 1, sm: 2 },
                      py: { xs: 1, sm: 1.5 },
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontWeight: 700,
                      }}
                    >
                      {title}
                    </Typography>
                    <Typography
                      variant="caption"
                      color="text.secondary"
                    >
                      {g.date}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            );
          })}
        </Box>

        <Box
          sx={{
            mt: 2,
            display: 'flex',
            justifyContent: { xs: 'center', sm: 'flex-end' },
          }}
        >
          <Button
            component={RouterLink}
            to="/gallery"
            size="small"
            endIcon={<ArrowForwardIcon sx={{ fontSize: 18 }} />}
          >
            More Photos
          </Button>
        </Box>
      </Section>

      {/* Donation / UPI QR - premium layout */}
      <Section id="donation" title={t('seva.donateTitle')}>
        <UpiBlock
          title={t('seva.upiTitle')}
          note={t('seva.upiNote')}
          caption={t('seva.qrCaption')}
          whyTitle={t('seva.whyTitle')}
          whyItems={
            t('seva.why', { returnObjects: true }) || []
          }
          usageTitle={t('seva.usageTitle')}
          usageItems={
            t('seva.usage', { returnObjects: true }) || []
          }
        />
      </Section>

      {/* Visit teaser - temple-styled panel (wrapped with id for scrolling) */}
      <Box id="visitInfo">
        <Section
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
            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
              sx={{ mb: 1 }}
            >
              <PlaceIcon sx={{ color: 'secondary.main' }} />
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 700,
                }}
              >
                {t('visit.address')}
              </Typography>
            </Stack>

            {/* Framed map banner */}
            <Paper
              sx={{
                p: 2,
                borderRadius: 3,
                border: '1px solid #E6D8B6',
                backgroundImage: `linear-gradient(rgba(201,162,39,.18), rgba(122,31,31,.18)), url(${mapImag})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: { xs: 150, sm: 180 },
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
            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
              sx={{ mt: 1 }}
            >
              <RouteIcon sx={{ color: 'primary.main' }} />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 900,
                }}
              >
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
                    primaryTypographyProps={{
                      variant: 'body2',
                    }}
                    primary={x}
                  />
                </ListItem>
              ))}
            </List>

            {/* Facilities + Rules */}
            <Grid
              container
              spacing={3}
              alignItems="stretch"
              sx={{ mt: 1 }}
            >
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={1}
                >
                  <AutoAwesomeIcon sx={{ color: 'gold.main' }} />
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 900,
                    }}
                  >
                    {t('visit.facilitiesTitle')}
                  </Typography>
                </Stack>
                <List
                  dense
                  sx={{ mt: 0.5, pt: 0, flexGrow: 1 }}
                >
                  {facilities.map((x, i) => (
                    <ListItem key={i} sx={{ py: 0.25 }}>
                      <ListItemIcon sx={{ minWidth: 26 }}>
                        <FiberManualRecordIcon
                          sx={{ fontSize: 8, color: 'gold.main' }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primaryTypographyProps={{
                          variant: 'body2',
                        }}
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
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={1}
                >
                  <GavelIcon sx={{ color: 'secondary.main' }} />
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 900,
                    }}
                  >
                    {t('visit.rulesTitle')}
                  </Typography>
                </Stack>
                <List
                  dense
                  sx={{ mt: 0.5, pt: 0, flexGrow: 1 }}
                >
                  {rules.map((x, i) => (
                    <ListItem key={i} sx={{ py: 0.25 }}>
                      <ListItemIcon sx={{ minWidth: 26 }}>
                        <FiberManualRecordIcon
                          sx={{ fontSize: 8, color: 'gold.main' }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primaryTypographyProps={{
                          variant: 'body2',
                        }}
                        primary={x}
                      />
                    </ListItem>
                  ))}
                </List>
              </Grid>
            </Grid>
          </Paper>
        </Section>
      </Box>

      {/* Contact teaser (same layout as Contact page) */}
      <Section
        title={t('contact.title')}
        subtitle={t('contact.subtitle')}
      >
        {/* Top info card: address, phone, email, timings */}
        <Paper
          elevation={0}
          sx={{
            p: { xs: 2, md: 3 },
            borderRadius: 3,
            border: '1px solid #E6D8B6',
            bgcolor: '#FFFBF5',
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          {/* Address */}
          <Typography variant="body1">
            {t('contact.address')}
          </Typography>

          {/* Phone - blue + underlined + clickable */}
          <Typography sx={{ mt: 1 }} variant="body1">
            <a
              href="tel:9632303163"
              style={{
                color: '#1976d2',
                textDecoration: 'underline',
                fontWeight: 500,
              }}
            >
              {t('contact.phone')}
            </a>
          </Typography>

          {/* Email - blue + underlined + clickable */}
          <Typography variant="body1">
            <a
              href="mailto:naphadke1@gmail.com"
              style={{
                color: '#1976d2',
                textDecoration: 'underline',
                fontWeight: 500,
              }}
            >
              {t('contact.email')}
            </a>
          </Typography>

          {/* Office hours */}
          <Typography
            sx={{ mt: 2 }}
            variant="body2"
            color="text.secondary"
          >
            {t('contact.officeHours')}
          </Typography>

          {/* Booking info */}
          <Typography sx={{ mt: 1 }} variant="body2">
            <strong>{t('contact.booking')}</strong>
          </Typography>
        </Paper>

        {/* Priests + Trust cards */}
        <Grid container spacing={2} sx={{ mt: 2 }}>
          {/* Priests card */}
          <Grid item xs={12} md={6}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 2, md: 3 },
                borderRadius: 3,
                border: '1px solid #E6D8B6',
                bgcolor: '#FFFDF9',
                height: '100%',
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 800,
                  mb: 1,
                  textAlign: { xs: 'center', md: 'left' },
                }}
              >
                {t('contact.priestsTitle')}
              </Typography>

              {/* Priests list — 2 columns on mobile, normal list on desktop */}
              <Box
                sx={{
                  display: { xs: 'grid', md: 'block' },
                  gridTemplateColumns: { xs: '1fr 1fr', md: 'none' },
                  columnGap: 2,
                  rowGap: 1,
                  pl: { xs: 0, md: 3 },
                  m: 0,
                  listStyle: 'none',
                }}
                component="ul"
              >
                {priests.map((x, i) => (
                  <Box key={i} component="li">
                    <Typography variant="body2">{x}</Typography>
                  </Box>
                ))}
              </Box>
            </Paper>
          </Grid>

          {/* Trust card */}
          <Grid item xs={12} md={6}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 2, md: 3 },
                borderRadius: 3,
                border: '1px solid #E6D8B6',
                bgcolor: '#FFFDF9',
                height: '100%',
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 800,
                  mb: 1,
                  textAlign: { xs: 'center', md: 'left' },
                }}
              >
                {t('contact.trustTitle')}
              </Typography>

              {/* Trust notes */}
              <Box
                component="ul"
                sx={{
                  pl: { xs: 2.5, md: 3 },
                  m: 0,
                  textAlign: { xs: 'left', md: 'left' },
                }}
              >
                {trustNotes.map((x, i) => (
                  <Box key={i} component="li" sx={{ mb: 0.25 }}>
                    <Typography variant="body2">
                      {x}
                    </Typography>
                  </Box>
                ))}
              </Box>

              {/* Trust members */}
              <Box
                component="ul"
                sx={{
                  pl: { xs: 2.5, md: 3 },
                  mt: 1,
                  m: 0,
                  textAlign: { xs: 'left', md: 'left' },
                }}
              >
                {trustMembers.map((x, i) => (
                  <Box key={i} component="li" sx={{ mb: 0.25 }}>
                    <Typography variant="body2">
                      {x}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Section>
    </>
  );
}
