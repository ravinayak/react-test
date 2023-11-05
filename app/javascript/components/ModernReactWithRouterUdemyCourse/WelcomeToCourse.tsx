import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useNavigate, Outlet, useLocation } from 'react-router-dom';
import { routes } from '@app/config/routes';
import { getNestedRoute } from '@app/shared/helpers';
import { courseRoutes } from './courseRoutes';
import { AppSpinner } from '../AppSpinner';
import '@app/src/App.css';

export function WelcomeToCourse() {
  const [displayWelcomePage, setDisplayWelcomePage] = useState<boolean>(true);
  const locationPath = useLocation();
  const navigate = useNavigate();

  const currentRoute = routes.MODERN_REACT_WITH_ROUTER;
  const nestedRoute = getNestedRoute(currentRoute, locationPath);
  const handleNavigate = (navigationRoute: string) => {
    setDisplayWelcomePage(false);
    navigate(navigationRoute);
  };

  useEffect(() => {
    if (nestedRoute) {
      handleNavigate(nestedRoute);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!displayWelcomePage && locationPath.state?.displayWelcomePage && !nestedRoute) {
    setDisplayWelcomePage(true);
  }

  if (displayWelcomePage && nestedRoute) {
    return <AppSpinner />;
  }
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
          Welcome To React with Router - Udemy Course
        </div>
        <div style={{ marginLeft: '20px' }}>
          *****************************************************************************************************
        </div>
        <br />
        <div style={{ display: 'flex', flexDirection: 'row', alignContent: 'baseline' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Stack spacing={4} mx={6}>
              <div>
                <Typography variant='h6' sx={{ mt: '5px' }}>
                  Section 3 - Building with Reusable Components
                </Typography>
              </div>
              <div>
                <Typography variant='h6' sx={{ mt: 1 }}>
                  Section 4 - How to Change Your App
                </Typography>
              </div>
              <div>
                <Typography variant='h6' sx={{ mt: 1 }}>
                  Section 5 - Using API with React
                </Typography>
              </div>
              <div>
                <Typography variant='h6' sx={{ mt: 1 }}>
                  Section 6 - Handling Forms
                </Typography>
              </div>
              <div>
                <Typography variant='h6' sx={{ mt: 1 }}>
                  Section 7 - Persisting Data
                </Typography>
              </div>
              <div>
                <Typography variant='h6' sx={{ mt: 1 }}>
                  Section 8 - Using Context
                </Typography>
              </div>
              <div>
                <Typography variant='h6' sx={{ mt: 1 }}>
                  Section 9 - Part 1 - Custom Hooks
                </Typography>
                <Typography variant='h6' sx={{ mt: 1, ml: 21 }}>
                  Stale Reference
                </Typography>
              </div>
              <div>
                <Typography variant='h6' sx={{ mt: 1 }}>
                  Section 9 - Part 2 - Custom Hooks
                </Typography>
                <Typography variant='h6' sx={{ mt: 1, ml: 21 }}>
                  Stale Reference Fixed + cleanUp
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
                id='section-3-button'
                onClick={() => handleNavigate(courseRoutes.SECTION_3)}
              >
                Building with Reusable Components
              </Button>
              <Button
                className='navigation-button'
                type='submit'
                variant='contained'
                id='section-4-button'
                onClick={() => handleNavigate(courseRoutes.SECTION_4)}
              >
                How to Change Your App
              </Button>
              <Button
                className='navigation-button'
                type='submit'
                variant='contained'
                id='section-5-button'
                onClick={() => handleNavigate(courseRoutes.SECTION_5)}
              >
                Using API with React
              </Button>
              <Button
                className='navigation-button'
                type='submit'
                variant='contained'
                id='section-6-button'
                onClick={() => handleNavigate(courseRoutes.SECTION_6)}
              >
                Handling Forms
              </Button>
              <Button
                className='navigation-button'
                type='submit'
                variant='contained'
                id='section-7-button'
                onClick={() => handleNavigate(courseRoutes.SECTION_7)}
              >
                Persisting Data
              </Button>
              <Button
                className='navigation-button'
                type='submit'
                variant='contained'
                id='section-8-button'
                onClick={() => handleNavigate(courseRoutes.SECTION_8)}
              >
                Using Context
              </Button>
              <Button
                className='navigation-button'
                type='submit'
                variant='contained'
                id='section-9-1-button'
                style={{ marginTop: '55px' }}
                onClick={() => handleNavigate(courseRoutes.SECTION_9_1)}
              >
                Deep Dive into Custom Hooks
              </Button>
              <Button
                className='navigation-button'
                type='submit'
                variant='contained'
                id='section-9-2-button'
                style={{ marginTop: '75px' }}
                onClick={() => handleNavigate(courseRoutes.SECTION_9_2)}
              >
                Deep Dive into Custom Hooks
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
      <div style={{ width: '100%', display: 'flex' }}>
        <Outlet />
      </div>
    );
  }
}
