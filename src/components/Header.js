import React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import TempleHinduIcon from '@mui/icons-material/TempleHindu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

// 🔊 background music toggle
import BackgroundMusicToggle from '../components/BackgroundMusicToggle'; // adjust path if needed

const nav = [
  { to: '/', key: 'nav.home' },
  { to: '/about', key: 'nav.about' },
  { to: '/deities', key: 'nav.deities' },
  { to: '/festivals', key: 'nav.festivals' },
  { to: '/gallery', key: 'nav.gallery' },
  { to: '/seva', key: 'nav.seva' },
];

export default function Header() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isEN = (i18n.resolvedLanguage || 'kn') === 'en';
  const [open, setOpen] = React.useState(false);

  const handleLangToggle = (e) => {
    const next = e.target.checked ? 'en' : 'kn';
    i18n.changeLanguage(next);
  };

  const NavButtons = () => (
    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
      {nav.map((item) => {
        const active = location.pathname === item.to;
        return (
          <Button
            key={item.to}
            component={RouterLink}
            to={item.to}
            size="small"
            variant={active ? 'contained' : 'outlined'}
            color={active ? 'primary' : 'inherit'}
            sx={{
              borderColor: active ? 'transparent' : '#E6D8B6',
              bgcolor: active ? 'primary.main' : 'background.paper',
              color: active ? '#fff' : 'text.primary',
            }}
          >
            {t(item.key)}
          </Button>
        );
      })}
    </Box>
  );

  const LangRow = ({ compact = false }) => (
    <Stack direction="row" alignItems="center" spacing={0.5}>
      <Typography
        variant="body2"
        sx={{
          fontWeight: 800,
          color: 'primary.main',
          fontSize: compact ? 12 : 14,
        }}
      >
        ಕ
      </Typography>
      <Switch
        checked={isEN}
        onChange={handleLangToggle}
        inputProps={{ 'aria-label': 'Language toggle Kannada / English' }}
        color="primary"
        size={compact ? 'small' : isMobile ? 'small' : 'medium'}
      />
      <Typography
        variant="body2"
        sx={{
          fontWeight: 800,
          color: 'primary.main',
          fontSize: compact ? 12 : 14,
        }}
      >
        EN
      </Typography>
    </Stack>
  );

  return (
    <>
      <div className="top-stripe" />
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: '#FFF8EF',
          borderBottom: '1px solid #E6D8B6',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            disableGutters
            sx={{
              py: { xs: 0.5, md: 1.25 },
              gap: 1.5,
              minHeight: { xs: 56, sm: 64 },
            }}
          >
            {!isDesktop && (
              <IconButton
                edge="start"
                onClick={() => setOpen(true)}
                aria-label="menu"
                sx={{ mr: 0.5 }}
              >
                <MenuIcon />
              </IconButton>
            )}

            <TempleHinduIcon
              sx={{
                color: 'primary.main',
                mr: 1,
                fontSize: { xs: 24, sm: 28 },
              }}
            />

            {/* Brand – full name on mobile (wrap), ellipsis only on larger screens if needed */}
            <Typography
              component={RouterLink}
              to="/"
              variant="h6"
              color="primary"
              sx={{
                textDecoration: 'none',
                fontWeight: 900,
                letterSpacing: '.3px',
                mr: 1,
                maxWidth: { xs: 200, sm: 260, md: 'none' },
                fontSize: { xs: 16, sm: 18, md: 20 },
                whiteSpace: { xs: 'normal', md: 'nowrap' },
                overflow: { xs: 'visible', md: 'hidden' },
                textOverflow: { xs: 'clip', md: 'ellipsis' },
              }}
            >
              {t('brand')}
            </Typography>

            <Box sx={{ flexGrow: 1 }} />

            {isDesktop && <NavButtons />}

            {/* Right controls */}
            {isDesktop ? (
              // Desktop: language + music in a single horizontal row
              <Stack direction="row" spacing={1.5} alignItems="center" sx={{ ml: 2 }}>
                <LangRow />
                <BackgroundMusicToggle />
              </Stack>
            ) : (
              // Mobile: language row and music button stacked vertically, right-aligned
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  gap: 0.25,
                  mr: 0.5,
                }}
              >
                <LangRow compact />
                <BackgroundMusicToggle />
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
      >
        <Box
          sx={{ width: isMobile ? '75vw' : 320 }}
          role="presentation"
          onClick={() => setOpen(false)}
        >
          {/* Drawer header with brand only (controls are in AppBar even on mobile) */}
          <Box
            sx={{
              px: 2,
              py: 1.5,
              borderBottom: '1px solid #E6D8B6',
              bgcolor: '#FFF8EF',
            }}
          >
            <Stack direction="row" alignItems="center" spacing={1}>
              <TempleHinduIcon
                sx={{ color: 'primary.main', fontSize: 22 }}
              />
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 800,
                  fontSize: 14,
                  maxWidth: '100%',
                  whiteSpace: 'normal',
                }}
              >
                {t('brand')}
              </Typography>
            </Stack>
          </Box>

          <List>
            {nav.map((item) => (
              <ListItem key={item.to} disablePadding>
                <ListItemButton
                  component={RouterLink}
                  to={item.to}
                  selected={location.pathname === item.to}
                >
                  <ListItemText primary={t(item.key)} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
