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
          Welcome To Material Course - CodeEvolution
        </div>
        <div style={{ marginLeft: '20px' }}>
          ************************************************************************************************
        </div>
        <br />
        <div style={{ display: 'flex', flexDirection: 'row', alignContent: 'baseline' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Stack spacing={4} mx={6}>
              <div style={{ display: 'flex' }}>
                <Typography variant='h6' sx={{ mt: '5px' }}>
                  Typography Implementation
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
                id='section-1-button'
                onClick={() => handleNavigate(courseRoutes.SECTION_1)}
              >
                Typography
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
