import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

export function CircularColor() {
  return (
    <Stack
      sx={{
        color: 'grey.500',
        display: 'flex',
        width: '2000px',
        height: '600px',
        justifyContent: 'center',
        alignContent: 'center',
        flexWrap: 'wrap',
      }}
      spacing={2}
      direction='row'
    >
      <CircularProgress color='secondary' />
      <CircularProgress color='success' />
      <CircularProgress color='inherit' />
      <CircularProgress color='secondary' />
      <CircularProgress color='success' />
      <CircularProgress color='inherit' />
    </Stack>
  );
}
