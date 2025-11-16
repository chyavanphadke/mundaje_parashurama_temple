import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App';
import './styles.css';
import './i18n';

let theme = createTheme({
  palette: {
    primary: { main: '#7A1F1F' },
    secondary: { main: '#C9A227' },
    background: { default: '#FFFDF9', paper: '#FFFFFF' }
  },

  // ⭐ UPDATED TYPOGRAPHY WITH MOBILE GLOBAL FONT-SIZES
  typography: {
    fontFamily:
      '"Inter", "Noto Sans Kannada", system-ui, -apple-system, Segoe UI, Roboto, "Noto Sans", "Helvetica Neue", Arial',

    h1: {
      fontSize: '2.2rem',
      '@media (max-width:600px)': {
        fontSize: '1.6rem',
      },
    },
    h2: {
      fontSize: '1.9rem',
      '@media (max-width:600px)': {
        fontSize: '1.45rem',
      },
    },
    h3: {
      fontSize: '1.6rem',
      '@media (max-width:600px)': {
        fontSize: '1.3rem',
      },
    },
    h4: {
      fontSize: '1.4rem',
      '@media (max-width:600px)': {
        fontSize: '1.15rem',
      },
    },
    h5: {
      fontSize: '1.2rem',
      '@media (max-width:600px)': {
        fontSize: '1.05rem',
      },
    },
    h6: {
      fontSize: '1.05rem',
      '@media (max-width:600px)': {
        fontSize: '0.95rem',
      },
    },
    body1: {
      fontSize: '1rem',
      '@media (max-width:600px)': {
        fontSize: '1.0rem',
      },
    },
    body2: {
      fontSize: '1.0rem',
      '@media (max-width:600px)': {
        fontSize: '0.9rem',
      },
    },
    button: {
      textTransform: 'none',
      fontSize: '1.0rem',
      '@media (max-width:600px)': {
        fontSize: '0.8rem',
      },
    },
  },
});

theme = responsiveFontSizes(theme);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HashRouter>
        <App />
      </HashRouter>
    </ThemeProvider>
  </React.StrictMode>
);
