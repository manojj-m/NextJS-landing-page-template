import { useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// Simple color design tokens
const lightColors = {
  grey: {
    100: "#141414",
    200: "#292929",
    300: "#3d3d3d",
    400: "#525252",
    500: "#666666",
    600: "#858585",
    700: "#a3a3a3",
    800: "#c2c2c2",
    900: "#e0e0e0",
  },
  primary: {
    main: "#f2f0f0",
    contrastText: "#141b2d",
  },
  greenAccent: "#4cceac",
  redAccent: "#db4f4a",
  blueAccent: "#6870fa",
  background: "#fcfcfc",
};

const darkColors = {
  grey: {
    100: "#e0e0e0",
    200: "#c2c2c2",
    300: "#a3a3a3",
    400: "#858585",
    500: "#666666",
    600: "#525252",
    700: "#3d3d3d",
    800: "#292929",
    900: "#141414",
  },
  primary: {
    main: "#141b2d",
    contrastText: "#f2f0f0",
  },
  greenAccent: "#4cceac",
  redAccent: "#db4f4a",
  blueAccent: "#6870fa",
  background: "#141b2d",
};

// mui theme settings
export const themeSettings = (mode) => {
  const colors = mode === "dark" ? darkColors : lightColors;
  return {
    palette: {
      mode: mode,
      primary: {
        main: colors.primary.main,
        contrastText: colors.primary.contrastText,
      },
      secondary: {
        main: colors.greenAccent,
      },
      neutral: {
        dark: colors.grey[700],
        main: colors.grey[500],
        light: colors.grey[100],
      },
      background: {
        default: colors.background,
      },
    },
    typography: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

// Custom hook to manage theme mode
export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const toggleColorMode = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return [theme, toggleColorMode];
};
