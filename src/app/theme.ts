import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    customColors: {
      gray20: string;
      gray89: string;
      green50: string;
      green100: string;
      red100: string;
      white2: string;
      white3: string;
    };

    customBorders: {
      borderSolid1: string;
      borderSolidGreen100: string;
    };

    customShadows: {
      shadow1: string;
    };
  }
  interface ThemeOptions {
    customColors: {
      gray20: string;
      gray89: string;
      green50: string;
      green100: string;
      red100: string;
      white2: string;
      white3: string;
    };

    customBorders?: {
      borderSolid1: string;
      borderSolidGreen100: string;
    };

    customShadows?: {
      shadow1: string;
    };
  }
}

export const lightTheme = createTheme({
  customColors: {
    gray20: '#333',
    gray89: '#e5e5e5',
    green50: '#dfe6e0',
    green100: '#6D8B74',
    red100: '#DD4A48',
    white2: '#fefefe',
    white3: '#e7e7e7',
  },
  customBorders: {
    borderSolid1: '1px solid #e5e5e5',
    borderSolidGreen100: '1px solid #6D8B74',
  },
  customShadows: {
    shadow1: '1px 1px 2px 1px #e0e0e0',
  },
  palette: {
    background: {
      default: '#fefefe',
    },
    primary: {
      main: '#6D8B74',
    },
    secondary: {
      main: '#6D8B74',
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
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#fefefe',
          textTransform: 'none',
          backgroundColor: '#6D8B74',
          '&:hover': {
            backgroundColor: '#849e8a',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          borderRadius: '8px',
        },
      },
    },
  },
});

export const darkTheme = createTheme({
  customColors: {
    gray20: '#333',
    gray89: '#e5e5e5',
    green50: '#dfe6e0',
    green100: '#6D8B74',
    red100: '#DD4A48',
    white2: '#fefefe',
    white3: '#e7e7e7',
  },
  customBorders: {
    borderSolid1: '1px solid #e5e5e5',
    borderSolidGreen100: '1px solid #6D8B74',
  },
  customShadows: {
    shadow1: '1px 1px 2px 1px #e0e0e0',
  },
  palette: {
    background: {
      default: '#fefefe',
    },
    primary: {
      main: '#6D8B74',
    },
    secondary: {
      main: '#6D8B74',
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
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#fefefe',
          textTransform: 'none',
          backgroundColor: '#6D8B74',
          '&:hover': {
            backgroundColor: '#849e8a',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          borderRadius: '8px',
        },
      },
    },
  },
});
