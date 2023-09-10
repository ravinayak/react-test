import React from 'react';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';
import { ProviderWrappedComponent } from './ProviderWrappedComponent';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export function ProviderWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>{children}</CssBaseline>
    </ThemeProvider>
  );
}
