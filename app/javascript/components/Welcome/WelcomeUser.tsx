import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { routes } from '@app/config/routes';

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
      <div style={{ display: 'flex', flexDirection: 'row', alignContent: 'baseline' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Stack spacing={4} mx={6}>
            <div>
              <Typography variant='h6' sx={{ mt: '5px' }}>
                Navigate to Create User Page{' '}
              </Typography>
            </div>
            <div>
              <Typography variant='h6' sx={{ mt: 1 }}>
                Navigate to Search User Page{' '}
              </Typography>
            </div>
            <div>
              <Typography variant='h6' sx={{ mt: 1 }}>
                Navigate to Flexbox Display
              </Typography>
            </div>
            <div>
              <Typography variant='h6' sx={{ mt: 1 }}>
                Modern React With Router - Udemy Course
              </Typography>
            </div>
            <div>
              <Typography variant='h6' sx={{ mt: 1 }}>
                Deep JS Foundations - Object Is Polyfill - FrontEnd Masters
              </Typography>
            </div>
          </Stack>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Stack spacing={4}>
            <Button
              className='navigation-button'
              type='submit'
              variant='contained'
              id='create-user-button'
              onClick={() => handleNavigate(routes.CREATE_USER)}
            >
              Create User
            </Button>
            <Button
              className='navigation-button'
              type='submit'
              variant='contained'
              onClick={() => handleNavigate(routes.SEARCH_USER)}
            >
              Search User
            </Button>
            <Button
              className='navigation-button'
              type='submit'
              variant='contained'
              onClick={() => handleNavigate(routes.FLEXBOX_DISPLAY)}
            >
              Flexbox Display
            </Button>
            <Button
              className='navigation-button'
              type='submit'
              variant='contained'
              onClick={() => handleNavigate(routes.MODERN_REACT_WITH_ROUTER)}
            >
              Modern React with Router Course
            </Button>
            <Button
              className='navigation-button'
              type='submit'
              variant='contained'
              onClick={() => handleNavigate(routes.DEEP_JS_FOUNDATIONS_OBJECT_IS)}
            >
              Deep JS Foundation V3
            </Button>
          </Stack>
        </div>
      </div>
    </div>
  );
}
