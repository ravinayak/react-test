import React from 'react';
import Button from '@mui/material/Button';
import { routes } from '@app/config/routes';
import { useNavigate } from 'react-router-dom';

export function WelcomeUser() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(routes.CREATE_USER);
  };
  return (
    <div style={{ marginTop: '300px', marginLeft: '900px' }}>
      <div>Welcome To our Application</div>
      <br />
      <Button style={{}} type='submit' variant='contained' onClick={handleNavigate}>
        Click me to Navigate
      </Button>
    </div>
  );
}
