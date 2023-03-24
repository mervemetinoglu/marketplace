import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    customColors: {
      red: string;
    };
  }
  interface ThemeOptions {
    customColors?: {
      red?: string;
    };
  }
}

const theme = createTheme({
  customColors: {
    red: '#f44336',
  },
  palette: {
    background: {
      default: '#fefefe',
    },
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    text: {
      primary: '#333',
    },
  },
  typography: {
    fontFamily: ['Nunito', 'sans-serif'].join(','),
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#333',
          display: 'flex',
          alignItems: 'center',
          textDecoration: 'none',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          fontFamily: 'inherit',
          // '&:hover': {
          //   backgroundColor: 'transparent',
          // },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
});

export default theme;
