import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: 'rgb(234, 240, 243)',  // Light gray for primary
      contrastText: 'rgb(11, 37, 69)',  // Brand navy for contrast
    },
    secondary: {
      main: 'rgb(11, 37, 69)',   // Brand navy for secondary
      contrastText: 'rgb(234, 240, 243)',  // Lighter gray for contrast
    },
    background: {
      primary: 'rgb(255, 255, 255)',  // White for default background
      secondary: 'rgb(248, 250, 252)',  // Slightly lighter for card surfaces
    },
    text: {
      primary: 'rgb(0, 0, 0)',  // Black for primary text
      secondary: 'rgb(17, 24, 39)', // Darker gray for secondary text
    },
    divider: 'rgba(0, 0, 0, 0.1)',  // Lighter gray for dividers
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffffcc',
          backdropFilter: 'blur(8px)',
          color: '#0B2545',
          boxShadow: 'none',
          borderBottom: '1px solid rgba(0,0,0,0.05)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          fontWeight: 600,
          '&:hover': {
            boxShadow: '0 4px 14px rgba(11,37,69,0.2)',
          },
        },
      },
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: 'rgb(11, 37, 69)',   // Brand navy for secondary
      contrastText: 'rgb(234, 240, 243)',  // Lighter gray for contrast
    },
    secondary: {
      main: 'rgb(234, 240, 243)',  // Lighter gray for contrast
      contrastText: 'rgb(11, 37, 69)',   // Brand navy for secondary
    },
    background: {
      primary: 'rgb(11, 37, 69)',  // Black for primary text
      secondary: 'rgb(17, 24, 39)', // Darker gray for secondary text
    },
    text: {
      primary: 'rgb(255, 255, 255)',  // White for default background
      secondary: 'rgb(248, 250, 252)',  // Slightly lighter for card surfaces
    },
    divider: 'rgba(255,255,255,0.1)',  // Lighter gray for dividers
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(11, 37, 69, 0.9)',
          backdropFilter: 'blur(8px)',
          boxShadow: 'none',
          color: '#ffffff',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          fontWeight: 600,
          '&:hover': {
            boxShadow: '0 4px 14px rgba(59,130,246,0.4)',
          },
        },
      },
    },
  },
});
