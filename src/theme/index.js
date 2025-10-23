import {createTheme} from '@mui/material/styles';
import {colors} from './dark-theme-colors.js';

const muzitTheme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
      //light: '#ff5555', // Optional: light variant
      //dark: '#dd0000', // Optional: dark variant
      //contrastText: '#ffffff', // Text color for contrast
    },
    secondary: {
      main: colors.secondary,
    },
    text: {
      primary: colors.text.primary, // Main text color
      secondary: colors.text.secondary, // Dimmed text (for descriptions, etc.)
      disabled: '#999', // Disabled elements
    },
    background: {
      primary: colors.background.primary,
      secondary: colors.background.secondary,
      paper: colors.background.paper,
    },
  },
  components: {
    MuiLisItem: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: colors.background.hover,
          },
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderLeft: '3px solid transparent',
          backgroundColor: 'transparent',
          transition: 'all .5s ease',
          i: {
            transition: 'all .5s ease',
          },
          '&:hover': {
            backgroundColor: colors.background.primary,
            color: colors.text.highlight,
            borderLeftColor: colors.primary,
            i: {
              color: colors.primary,
            },
          },
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: colors.text.primary,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: colors.background.secondary,
        },
      },
    },
  },
  custom: {
    background: {
      gradient: colors.background.gradient,
    },
  },
});

export default muzitTheme;
