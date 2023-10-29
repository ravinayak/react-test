import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useNavigate, Outlet, useLocation } from 'react-router-dom';
import { routes } from '@app/config/routes';
import { getNestedRoute } from '@app/shared/helpers';
import { courseRoutes } from './courseRoutes';

export function WelcomeToCourse() {
  const [displayWelcomePage, setDisplayWelcomePage] = useState<boolean>(true);
  const [navigatedToNestedRoute, setNavigatedToNestedRoute] = useState<boolean>(false);
  const locationPath = useLocation();
  const navigate = useNavigate();

  const currentRoute = routes.MODERN_REACT_WITH_ROUTER;
  const nestedRoute = getNestedRoute(currentRoute, locationPath);
  const handleNavigate = (navigationRoute: string) => {
    setDisplayWelcomePage(false);
    navigate(navigationRoute);
  };

  useEffect(() => {
    if (nestedRoute && !navigatedToNestedRoute) {
      handleNavigate(nestedRoute);
      setNavigatedToNestedRoute(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!displayWelcomePage && locationPath.state?.displayWelcomePage && !nestedRoute) {
    setDisplayWelcomePage(true);
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
          Welcome To Deep JS Foundations, v3 - FrontEnd Masters Course
        </div>
        <div style={{ marginLeft: '20px' }}>
          *************************************************************************************************************************
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
                  Section 2 - Coercion Test - String + StringNumber
                </Typography>
              </div>
              <div>
                <Typography variant='h6' sx={{ mt: 1 }}>
                  Section 3 - Equality Test - FindAll Implementation
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
                id='object-is-polyfill-button'
                onClick={() => handleNavigate(courseRoutes.OBJECT_IS)}
              >
                Object Is Polyfill
              </Button>
              <Button
                className='navigation-button'
                type='submit'
                variant='contained'
                id='equality-is-implementation-button'
                onClick={() => handleNavigate(courseRoutes.COERCION_TEST)}
              >
                Coercion Test
              </Button>
              <Button
                className='navigation-button'
                type='submit'
                variant='contained'
                id='find-all-implementation-button'
                onClick={() => handleNavigate(courseRoutes.EQUALITY_IMPLEMENTATION)}
              >
                Equality Implementation
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
