import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#0a0e27",
      paper: "#0f1535",
    },
    surface: {
      main: "#12172d",
    },
    primary: {
      main: "#8b5cf6",
      dark: "#7c3aed",
      light: "#a78bfa",
    },
    secondary: {
      main: "#3730a3",
      dark: "#2e1065",
    },
    text: {
      primary: "#f0f1ff",
      secondary: "#a8a9c8",
      disabled: "#6b7280",
    },
    divider: "#2d2a4a",
    action: {
      active: "#8b5cf6",
      hover: "rgba(139, 92, 246, 0.08)",
      selected: "rgba(139, 92, 246, 0.16)",
      disabled: "rgba(255, 255, 255, 0.12)",
      disabledBackground: "rgba(255, 255, 255, 0.05)",
    },
    success: {
      main: "#10b981",
    },
    warning: {
      main: "#f59e0b",
    },
    error: {
      main: "#ef4444",
    },
  },
  typography: {
    fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    h1: {
      fontSize: "2.5rem",
      fontWeight: 800,
      color: "#f0f1ff",
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 700,
      color: "#f0f1ff",
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: 700,
      color: "#f0f1ff",
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 700,
      color: "#f0f1ff",
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: 600,
      color: "#f0f1ff",
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 600,
      color: "#f0f1ff",
    },
    body1: {
      color: "#f0f1ff",
    },
    body2: {
      color: "#a8a9c8",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#12172d",
          color: "#f0f1ff",
          boxShadow: "0 1px 3px rgba(0, 0, 0, 0.3)",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#0f1535",
          borderRight: "1px solid #2d2a4a",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#0f1535",
          borderColor: "#2d2a4a",
          border: "1px solid #2d2a4a",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#0f1535",
          borderColor: "#2d2a4a",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: "#8b5cf6",
          color: "#f0f1ff",
          "&:hover": {
            backgroundColor: "#7c3aed",
          },
        },
        outlined: {
          borderColor: "#2d2a4a",
          color: "#f0f1ff",
          "&:hover": {
            borderColor: "#8b5cf6",
            backgroundColor: "rgba(139, 92, 246, 0.08)",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            color: "#f0f1ff",
            "& fieldset": {
              borderColor: "#2d2a4a",
            },
            "&:hover fieldset": {
              borderColor: "#8b5cf6",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#8b5cf6",
            },
          },
          "& .MuiInputBase-input::placeholder": {
            color: "#6b7280",
            opacity: 0.7,
          },
        },
      },
    },
    MuiDataGrid: {
      styleOverrides: {
        root: {
          backgroundColor: "#0f1535",
          color: "#f0f1ff",
          "& .MuiDataGrid-columnHeader": {
            backgroundColor: "#12172d",
            color: "#f0f1ff",
            borderColor: "#2d2a4a",
          },
          "& .MuiDataGrid-cell": {
            borderColor: "#2d2a4a",
          },
          "& .MuiDataGrid-row": {
            "&:hover": {
              backgroundColor: "rgba(139, 92, 246, 0.08)",
            },
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(139, 92, 246, 0.12)",
          color: "#8b5cf6",
        },
        colorSuccess: {
          backgroundColor: "rgba(16, 185, 129, 0.12)",
          color: "#10b981",
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundColor: "#0f1535",
          backgroundImage: "none",
        },
      },
    },
  },
});

export default theme;
