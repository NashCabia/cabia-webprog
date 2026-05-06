import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#8b5cf6',
      light: '#a78bfa',
      dark: '#6d28d9',
      contrastText: '#f0f1ff',
    },
    secondary: {
      main: '#3730a3',
      light: '#4f46e5',
      dark: '#1e1b4b',
      contrastText: '#f0f1ff',
    },
    background: {
      default: '#0a0e27',
      paper: '#0f1535',
    },
    text: {
      primary: '#f0f1ff',
      secondary: '#a7afcf',
    },
    divider: '#2d2a4a',
  },
  typography: {
    fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    h1: { fontFamily: "'Poppins', sans-serif", fontWeight: 800 },
    h2: { fontFamily: "'Poppins', sans-serif", fontWeight: 800 },
    h3: { fontFamily: "'Poppins', sans-serif", fontWeight: 700 },
    h4: { fontFamily: "'Poppins', sans-serif", fontWeight: 700 },
    h5: { fontFamily: "'Poppins', sans-serif", fontWeight: 600 },
    h6: { fontFamily: "'Poppins', sans-serif", fontWeight: 600 },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundImage:
            'radial-gradient(circle at top, rgba(139, 92, 246, 0.18), transparent 36%), linear-gradient(180deg, #0a0e27 0%, #090c1f 100%)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'rgba(15, 21, 53, 0.92)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(45, 42, 74, 0.7)',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: '#0f1535',
          borderRight: '1px solid rgba(45, 42, 74, 0.7)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          border: '1px solid rgba(45, 42, 74, 0.75)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          border: '1px solid rgba(45, 42, 74, 0.75)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
      },
    },
    MuiDataGrid: {
      styleOverrides: {
        root: {
          border: '1px solid rgba(45, 42, 74, 0.75)',
          background: '#0f1535',
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          background: '#0f1535',
          border: '1px solid rgba(45, 42, 74, 0.8)',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 600,
        },
      },
    },
  },
});

export default theme;