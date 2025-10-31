import {createTheme} from '@mui/material/styles';
import {colors} from './dark-theme-colors.js';
import shadow from '@/assets/img/shadow.png';

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
      primary: colors.text.primary,
      secondary: colors.text.secondary,
      disabled: colors.text.disabled,
    },
    background: {
      primary: colors.background.primary,
      secondary: colors.background.secondary,
      paper: colors.background.paper,
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: colors.input.background,
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: colors.input.borderHover,
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: colors.primary,
          },
          '&.Mui-disabled': {
            background: `${colors.input.backgroundDisabled} url(${shadow})`,
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: colors.input.borderHover,
            },
            '& input': {
              color: colors.text.disabled,
            },
          },
        },
        notchedOutline: {
          borderColor: colors.input.border,
        },
        input: {
          color: colors.text.primary,
        },
      },
    },

    MuiSelect: {
      styleOverrides: {
        icon: {
          color: colors.primary,
        },
        iconOpen: {
          color: colors.primary,
        },
      },
    },

    MuiPickersOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: colors.input.background,
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: colors.input.borderHover,
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: colors.primary,
          },
          '&.Mui-disabled': {
            backgroundColor: colors.input.backgroundDisabled,
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: colors.input.borderHover,
            },
            '& input': {
              color: colors.text.disabled,
            },
          },
          '& .MuiIconButton-root': {
            color: colors.primary,
          },
        },
        notchedOutline: {
          borderColor: colors.input.border,
        },
        input: {
          color: colors.text.primary,
        },
      },
    },

    MuiMenu: {
      styleOverrides: {
        paper: {
          backgroundColor: colors.background.secondary,
          color: colors.text.primary,
        },
      },
    },

    MuiMenuItem: {
      styleOverrides: {
        root: {
          margin: '.25rem',
          borderRadius: '.25rem',
          '&.Mui-selected': {backgroundColor: colors.primary + '!important'},
          '&:hover': {backgroundColor: colors.background.primary},
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: colors.background.secondary + '!important',
          color: colors.text.primary,
        },
      },
    },

    MuiPickersDay: {
      styleOverrides: {
        root: {
          color: colors.text.primary,
          '&.Mui-selected': {
            backgroundColor: colors.primary,
            color: colors.text.primary,
          },
          '&:hover': {
            backgroundColor: colors.background.primary,
          },
        },
      },
    },

    MuiPickersCalendarHeader: {
      styleOverrides: {
        root: {
          '& .MuiIconButton-root': {color: colors.primary},
        },
        switchViewButton: {
          color: colors.primary,
        },
        labelContainer: {
          color: colors.primary,
        },
      },
    },

    MuiBackdrop: {
      styleOverrides: {
        root: {
          backdropFilter: 'blur(1px)',
        },
      },
    },
  },
});

export default muzitTheme;
