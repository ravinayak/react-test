import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { routes } from '@app/config/routes';
import { logger } from '@app/lib/Logger';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import '@app/src/App.css';

export function UseEffectStaleReference() {
  const [counter, setCounter] = useState<number>(0);
  const navigate = useNavigate();

  const bodyClickListener = () => {
    logger.info(counter);
  };

  useEffect(() => {
    // attach a click handler to document body which prints counter on div
    document.body.addEventListener('click', bodyClickListener);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div
      className='flex-display column-flex-direction flex-column-justify-align-center margin-top-100'
      style={{ width: '100%' }}
    >
      <Card>
        <CardContent>
          <div>
            This div and the card component which encloses it is a small part of document body
          </div>
          <br />
          <div>
            Click anywhere on the div and document body, and it will log value of stale reference of
            counter
          </div>
          <br />
          <div id='counter-div'>
            Counter value set by clicking button - Includes Current Reference to counter:: {counter}{' '}
          </div>
        </CardContent>
        <CardActions className='flex-display increment-counter-button justify-align-center'>
          <Button
            color='primary'
            variant='outlined'
            type='submit'
            data-test-id='test-increment-counter-button'
            id='increment-counter-submit'
            style={{ marginBottom: '20px' }}
            onClick={() => setCounter(counter + 1)}
          >
            Click me to increment counter
          </Button>
        </CardActions>
      </Card>
      <div>
        <Button
          variant='outlined'
          type='submit'
          id='btn-back-button'
          sx={{ width: '350px', mt: '100px', alignSelf: 'center' }}
          onClick={() => navigate(routes.ROOT)}
        >
          Back to Main Welcome Page
        </Button>
      </div>
    </div>
  );
}
