import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      logo: '#0B2545', // blue-600
      main: '#2563eb', // blue-600
      light: '#3b82f6', // blue-500
      dark: '#1d4ed8', // blue-700
      contrastText: '#ffffff',
    },
    background: {
      default: '#ffffff',
      paper: '#f9fafb',
    },
    text: {
      primary: 'black', // gray-900
      secondary: 'black', // gray-600
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(8px)',
          boxShadow: 'none',
          borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
        },
      },
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      logo: '#0B2545', // blue-600
      main: '#3b82f6', // blue-500
      light: '#60a5fa', // blue-400
      dark: '#2563eb', // blue-600
      contrastText: '#ffffff',
    },
    background: {
      default: '#111827',
      paper: '#1f2937',
    },
    text: {
      primary: 'white', // gray-50
      secondary: 'white', // gray-400
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(17, 24, 39, 0.8)',
          backdropFilter: 'blur(8px)',
          boxShadow: 'none',
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        },
      },
    },
  },
});

export const getTheme = (mode) => (mode === 'dark' ? darkTheme : lightTheme);
