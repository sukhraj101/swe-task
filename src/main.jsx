import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material';
import ErrorBoundary from './ErrorBoundary.jsx';
import App from './App.jsx';
import './index.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#333333',
    },
    secondary: {
      main: '#225eda',
    },
    grey: {
      main: '#767676',
    },
    white: {
      main: '#ffffff',
      contrastText: '#333333',
    },
  },
  typography: {
    fontFamily: 'Open Sans',
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#225eda',
          textDecoration: 'none',
          '&:hover': {
            textDecoration: 'underline',
          },
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          paddingLeft: '0px !important',
          paddingRight: '0px !important',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          '&.custom': {
            maxWidth: '1400px',
          },
        },
      },
    },
  },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </ThemeProvider>
  </StrictMode>,
);
