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
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'baseline' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Stack spacing={4} mx={6}>
            <div>
              <Typography variant='h6' sx={{ mt: '5px' }}>
                Axios Practice
              </Typography>
            </div>
            <div>
              <Typography variant='h6' sx={{ mt: 1 }}>
                Flexbox Display
              </Typography>
            </div>
            <div>
              <Typography variant='h6' sx={{ mt: 1 }}>
                React - Udemy
              </Typography>
            </div>
            <div>
              <Typography variant='h6' sx={{ mt: 1 }}>
                Deep Js - FE
              </Typography>
            </div>
            <div>
              <Typography variant='h6' sx={{ mt: 1 }}>
                Material UI - CE
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
              id='axios-practice-button'
              style={{ marginBottom: '5px' }}
              onClick={() => handleNavigate(routes.AXIOS)}
            >
              Axios
            </Button>
            <Button
              className='navigation-button'
              type='submit'
              variant='contained'
              id='flexbox-display-button'
              onClick={() => handleNavigate(routes.FLEXBOX_DISPLAY)}
            >
              Flexbox
            </Button>
            <Button
              className='navigation-button'
              type='submit'
              variant='contained'
              id='modern-react-with-router-course-button'
              style={{ marginBottom: '5px' }}
              onClick={() => handleNavigate(routes.MODERN_REACT_WITH_ROUTER)}
            >
              React
            </Button>
            <Button
              className='navigation-button'
              type='submit'
              variant='contained'
              id='deep-js-foundations-course'
              onClick={() => handleNavigate(routes.DEEP_JS_FOUNDATIONS)}
            >
              Deep JS
            </Button>
            <Button
              className='navigation-button'
              type='submit'
              variant='contained'
              onClick={() => handleNavigate(routes.MATERIAL_UI_COURSE)}
            >
              Material UI
            </Button>
          </Stack>
        </div>
      </div>
    </div>
  );
}
