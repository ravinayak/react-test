import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useNavigate, Outlet, useLocation } from 'react-router-dom';
import { routes } from '@app/config/routes';
import { courseRoutes } from './courseRoutes';

export function WelcomeToCourse() {
  const [displayWelcomePage, setDisplayWelcomePage] = useState<boolean>(true);
  const locationPath = useLocation();
  const navigate = useNavigate();

  if (!displayWelcomePage && locationPath.state?.displayWelcomePage) {
    setDisplayWelcomePage(true);
  }

  const handleNavigate = (navigationRoute: string) => {
    setDisplayWelcomePage(false);
    navigate(navigationRoute);
  };

  if (displayWelcomePage) {
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
        <div style={{ marginLeft: '100px', fontSize: 'x-large' }}>
          Welcome To Deep JS Foundations, v3 - FrontEnd Masters Course
        </div>
        <div style={{ marginLeft: '20px' }}>
          ****************************************************************************
        </div>
        <br />
        <div style={{ display: 'flex', flexDirection: 'row', alignContent: 'baseline' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Stack spacing={4} mx={6}>
              <div>
                <Typography variant='h6' sx={{ mt: '5px' }}>
                  Section 1 - Object Is Polyfill Implementation
                </Typography>
              </div>
              <div>
                <Typography variant='h6' sx={{ mt: 1 }}>
                  Section 1 - Equality Implementation
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
                onClick={() => handleNavigate(courseRoutes.OBJECT_IS)}
              >
                Object Is Polyfill
              </Button>
              <Button
                className='navigation-button'
                type='submit'
                variant='contained'
                onClick={() => handleNavigate(courseRoutes.EQUALITY_IMPLEMENTATION)}
              >
                Equality Check Polyfill
              </Button>
            </Stack>
          </div>
        </div>
        <Button
          variant='outlined'
          type='submit'
          id='btn-back-button'
          sx={{ width: '350px', mt: '100px', alignSelf: 'center' }}
          onClick={() => navigate(routes.ROOT)}
        >
          Back to Welcome Page
        </Button>
      </div>
    );
  }
  if (!displayWelcomePage) {
    return (
      <div style={{ width: '100%' }}>
        <Outlet />
      </div>
    );
  }
}
