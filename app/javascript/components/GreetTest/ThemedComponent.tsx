import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';

export function ThemedComponent() {
  // To use theme which has been set in the ThemeProvider, the component which makes call to hook
  // must be wrapped inside the ThemeProviderWrapper Component, in this case, it is ProviderWrapper
  const theme = useTheme();
  return (
    <div>
      <br /> <br />
      <div id='ProviderWrappedComponent'>I am a Themed Component</div>
      <br />
      <Typography variant='h3'>Theme Palette Mode Selected:: {theme.palette.mode}</Typography>
    </div>
  );
}
