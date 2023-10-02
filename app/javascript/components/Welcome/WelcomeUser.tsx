import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { routes } from '@app/config/routes';
import { useNavigate } from 'react-router-dom';

export function WelcomeUser() {
  const navigate = useNavigate();
  const handleNavigate = (navigationRoute: string) => {
    navigate(navigationRoute);
  };
  return (
    <div
      style={{
        display: 'flex',
        marginTop: '20px',
        flexWrap: 'wrap',
        width: '2000px',
        height: '900px',
        flexDirection: 'column',
      }}
    >
      <div style={{ marginLeft: '100px', fontSize: 'x-large' }}>Welcome To our Application</div>
      <div style={{ marginLeft: '20px' }}>
        ****************************************************************************
      </div>
      <br />
      <Stack spacing={4} mx={6}>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'baseline' }}>
          <Typography variant='h6'>Navigate to Create User Page </Typography>
          <Button
            className='navigation-button'
            type='submit'
            variant='contained'
            id='create-user-button'
            sx={{ mx: 2 }}
            onClick={() => handleNavigate(routes.CREATE_USER)}
          >
            Create User
          </Button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'baseline' }}>
          <Typography variant='h6'>Navigate to Search User Page </Typography>
          <Button
            className='navigation-button'
            type='submit'
            variant='contained'
            sx={{ mx: 2 }}
            onClick={() => handleNavigate(routes.SEARCH_USER)}
          >
            Search User
          </Button>
        </div>
      </Stack>
    </div>
  );
}
