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
});

export default muzitTheme;
