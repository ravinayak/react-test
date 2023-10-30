import React from 'react';
import { CircularProgress, Box } from '@mui/material';

export function AppSpinner() {
  return (
    <Box
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      height='100vh'
    >
      <CircularProgress data-test-id='root-spinner' />
    </Box>
  );
}
