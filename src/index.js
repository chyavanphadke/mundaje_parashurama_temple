import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
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
  typography: { fontFamily: '"Inter", system-ui, -apple-system, Segoe UI, Roboto, "Noto Sans", "Helvetica Neue", Arial' }
});
theme = responsiveFontSizes(theme);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
