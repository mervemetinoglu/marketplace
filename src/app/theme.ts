import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    customColors: {
      appBar: {
        color: string;
        logoColor: string;
        background: string;
      };
      productCard: {
        title: string;
        price: string;
        background: string;
        description: string;
      };
      productDetail: {
        title: string;
        price: string;
        description: string;
        buttonBg: string;
        buttonColor: string;
        buttonHoverBg: string;
      };
      favoriteButton: {
        color: string;
        background: string;
      };
      counterButton: {
        color: string;
        hoverBg: string;
        textColor: string;
        background: string;
      };
      cartProductCart: {
        background: string;
      };
      orderSummary: {
        title: string;
        price: string;
        subtitle: string;
        background: string;
        buttonBg: string;
        buttonColor: string;
        buttonHoverBg: string;
      };
      noData: {
        color: string;
        imageBg: string;
      };
      deleteProductModal: {
        background: string;
        color: string;
      };
    };
    customBorders: {
      borderSolid1: string;
      borderSolidGreen100: string;
    };

    customShadows: {
      shadow1: string;
      cardShadow: string;
    };
  }
  interface ThemeOptions {
    customColors: {
      appBar: {
        color: string;
        logoColor: string;
        background: string;
      };
      productCard: {
        title: string;
        price: string;
        background: string;
        description: string;
      };
      productDetail: {
        title: string;
        price: string;
        description: string;
        buttonBg: string;
        buttonColor: string;
        buttonHoverBg: string;
      };
      favoriteButton: {
        color: string;
        background: string;
      };
      counterButton: {
        color: string;
        hoverBg: string;
        textColor: string;
        background: string;
      };
      cartProductCart: {
        background: string;
      };
      orderSummary: {
        title: string;
        price: string;
        subtitle: string;
        background: string;
        buttonBg: string;
        buttonColor: string;
        buttonHoverBg: string;
      };
      noData: {
        color: string;
        imageBg: string;
      };
      deleteProductModal: {
        background: string;
        color: string;
      };
    };

    customBorders: {
      borderSolid1: string;
      borderSolidGreen100: string;
    };

    customShadows: {
      shadow1: string;
      cardShadow: string;
    };
  }
}

export const lightTheme = createTheme({
  customColors: {
    appBar: {
      color: '#333',
      logoColor: '#6D8B74',
      background: '#fefefe',
    },
    productCard: {
      title: '#333',
      price: '#333',
      background: '#fff',
      description: 'rgba(0, 0, 0, 0.6)',
    },
    productDetail: {
      title: '#333',
      price: '#333',
      description: 'rgba(0, 0, 0, 0.6)',
      buttonBg: '#6D8B74',
      buttonColor: '#fefefe',
      buttonHoverBg: '#849e8a',
    },
    favoriteButton: {
      color: '#6D8B74',
      background: '#fefefe',
    },
    counterButton: {
      textColor: '#333',
      color: '#6D8B74',
      hoverBg: '#dfe6e0',
      background: 'transparent',
    },
    cartProductCart: {
      background: '#fefefe',
    },
    orderSummary: {
      title: '#333',
      price: '#333',
      subtitle: '#333',
      background: '#fefefe',
      buttonBg: '#6D8B74',
      buttonColor: '#fefefe',
      buttonHoverBg: '#dfe6e0',
    },
    noData: {
      color: '#333',
      imageBg: '#e7e7e7',
    },
    deleteProductModal: {
      background: '#fefefe',
      color: '#333',
    },
  },
  customBorders: {
    borderSolid1: '1px solid #e5e5e5',
    borderSolidGreen100: '1px solid #6D8B74',
  },
  customShadows: {
    shadow1: '1px 1px 2px 1px #e0e0e0',
    cardShadow:
      'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
  },
  palette: {
    background: {
      default: '#fefefe',
      paper: '#fefefe',
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
    appBar: {
      color: '#E3E3E3',
      logoColor: '#6D8B74',
      background: '#1B1B1D',
    },
    productCard: {
      title: '#E3E3E3',
      price: '#E3E3E3',
      background: '#6D8B74',
      description: '#E3E3E3',
    },
    productDetail: {
      title: '#6D8B74',
      price: '#E3E3E3',
      description: '#E3E3E3',
      buttonBg: '#6D8B74',
      buttonColor: '#fefefe',
      buttonHoverBg: '#88a28e',
    },
    favoriteButton: {
      color: '#6D8B74',
      background: '#fefefe',
    },
    counterButton: {
      textColor: '#E3E3E3',
      color: '#E3E3E3',
      hoverBg: '#88a28e',
      background: '#6D8B74',
    },
    cartProductCart: {
      background: '#1B1B1D',
    },
    orderSummary: {
      title: '#6D8B74',
      price: '#E3E3E3',
      subtitle: '#6D8B74',
      background: '#1B1B1D',
      buttonBg: '#6D8B74',
      buttonColor: '#fefefe',
      buttonHoverBg: '#88a28e',
    },
    noData: {
      color: '#E3E3E3',
      imageBg: '#6D8B74',
    },
    deleteProductModal: {
      background: '#c4d1c7',
      color: '#1B1B1D',
    },
  },
  customBorders: {
    borderSolid1: '2px solid #2c382e',
    borderSolidGreen100: '1px solid #6D8B74',
  },
  customShadows: {
    shadow1: '1px 1px 2px 1px #e0e0e0',
    cardShadow: '  rgba(0, 0, 0, 0.1) 0px 10px 50px',
  },
  palette: {
    background: {
      default: '#1B1B1D',
    },
    primary: {
      main: '#6D8B74',
    },
    secondary: {
      main: '#6D8B74',
    },
    text: {
      primary: '#E3E3E3',
    },
  },
  typography: {
    fontFamily: ['Nunito', 'sans-serif'].join(','),
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#E3E3E3',
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
          color: '#E3E3E3',
          textTransform: 'none',
          backgroundColor: '#1B1B1D',
          '&:hover': {
            backgroundColor: '#303030',
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
