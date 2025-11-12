import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#C25A02' },   // deeper saffron
    secondary: { main: '#7A1F1F' }, // maroon
    background: { default: '#FFF8EF', paper: '#FFFFFF' },
    text: { primary: '#26221D' },
    gold: { main: '#C9A227' }
  },
  shape: { borderRadius: 16 },
  typography: {
    fontFamily: '"Noto Sans Kannada", Inter, system-ui, Arial, sans-serif',
    h1: { fontFamily: '"Noto Serif Kannada", Inter, serif', fontWeight: 800, letterSpacing: '.3px' },
    h2: { fontFamily: '"Noto Serif Kannada", Inter, serif', fontWeight: 800 },
    h3: { fontFamily: '"Noto Serif Kannada", Inter, serif', fontWeight: 800 }
  },
  components: {
    MuiButton: { styleOverrides: { root: { borderRadius: 999, paddingInline: 16, textTransform: 'none', fontWeight: 700 } } },
    MuiPaper:  { styleOverrides: { root: { borderRadius: 20 } } },
    MuiCard:   { styleOverrides: { root: { borderRadius: 20, border: '1px solid #E6D8B6' } } }
  }
});

export default theme;
