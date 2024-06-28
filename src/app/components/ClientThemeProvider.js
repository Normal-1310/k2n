// src/components/ClientThemeProvider.js

"use client";

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useMemo } from 'react';

export default function ClientThemeProvider({ children }) {
  const theme = useMemo(() => createTheme({
    palette: {
      mode: 'dark',
    },
    typography: {
      fontFamily: 'Mitr, sans-serif',
    },
  }), []);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
