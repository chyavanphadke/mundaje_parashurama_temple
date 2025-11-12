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

const nav = [
  { to: '/', key: 'nav.home' },
  { to: '/about', key: 'nav.about' },
  { to: '/deities', key: 'nav.deities' },
  { to: '/timings', key: 'nav.timings' },
  { to: '/festivals', key: 'nav.festivals' },
  { to: '/gallery', key: 'nav.gallery' },
  { to: '/visit', key: 'nav.visit' },
  { to: '/seva', key: 'nav.seva' },
  { to: '/contact', key: 'nav.contact' }
];

export default function Header() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isEN = (i18n.resolvedLanguage || 'kn') === 'en';
  const [open, setOpen] = React.useState(false);

  const handleLangToggle = (e) => {
    const next = e.target.checked ? 'en' : 'kn';
    i18n.changeLanguage(next);
  };

  const NavButtons = () => (
    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
      {nav.map(item => {
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
              color: active ? '#fff' : 'text.primary'
            }}
          >
            {t(item.key)}
          </Button>
        );
      })}
    </Box>
  );

  const LangSwitch = () => (
    <Stack direction="row" alignItems="center" spacing={1} sx={{ ml: 2 }}>
      <Typography variant="body2" sx={{ fontWeight: 800, color: 'primary.main' }}>ಕ</Typography>
      <Switch
        checked={isEN}
        onChange={handleLangToggle}
        inputProps={{ 'aria-label': 'Language toggle Kannada / English' }}
        color="primary"
      />
      <Typography variant="body2" sx={{ fontWeight: 800, color: 'primary.main' }}>EN</Typography>
    </Stack>
  );

  return (
    <>
      <div className="top-stripe" />
      <AppBar position="sticky" elevation={0} sx={{ bgcolor: '#FFF8EF', borderBottom: '1px solid #E6D8B6' }}>
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ py: 1.25, gap: 2 }}>
            {!isDesktop && (
              <IconButton edge="start" onClick={() => setOpen(true)} aria-label="menu">
                <MenuIcon />
              </IconButton>
            )}
            <TempleHinduIcon sx={{ color: 'primary.main', mr: 1 }} />
            <Typography
              component={RouterLink}
              to="/"
              variant="h6"
              color="primary"
              sx={{ textDecoration: 'none', fontWeight: 900, letterSpacing: '.3px', mr: 1 }}
            >
              {t('brand')}
            </Typography>

            <Box sx={{ flexGrow: 1 }} />
            {isDesktop ? <NavButtons /> : null}
            <LangSwitch />
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 280 }} role="presentation" onClick={() => setOpen(false)}>
          <List>
            {nav.map(item => (
              <ListItem key={item.to} disablePadding>
                <ListItemButton component={RouterLink} to={item.to}>
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
