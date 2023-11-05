import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { routes } from '@app/config/routes';
import { logger } from '@app/lib/Logger';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import '@app/src/App.css';

export function UseEffectStaleReferenceFixedWithCleanup() {
  const [counter, setCounter] = useState<number>(0);
  const navigate = useNavigate();

  const bodyClickListener = () => {
    logger.info(counter);
  };

  // 	When we use "useCallback" react hook, it should wrap the entire function inside it
  // 	ES6 syntax for function is () => {...}. So
  //		function(x) = {....} is Equivalent to () => {....}; {....} is the function body and not the entire function
  //	useCallback should wrap not just the function body but the entire function
  //	useCallback(() => {....})

  const bodyClickConsoleLogListener = useCallback(() => {
    logger.info('Logging on Console');
  }, []);

  // Attaching a clickEventListener to document body will end up attaching many click event listeners to document body,
  // precisely one on every render of the component. This must be fixed, as at any point of time, a function which
  // performs a desired functionality should be attached only once to any HTML Element
  // Hence we must return from useEffect a function which removes the event Handler. This function will be invoked on
  // next render of the component and will remove the EventHandler from the HTML Element before executing useEffect code
  // which will attach another event handler to the HTML Element
  //
  useEffect(() => {
    // attach a click handler to document body which prints counter on div
    document.body.addEventListener('click', bodyClickListener);
    document.body.addEventListener('click', bodyClickConsoleLogListener);

    return () => {
      document.body.removeEventListener('click', bodyClickListener);
      document.body.removeEventListener('click', bodyClickConsoleLogListener);
    };
    // Because useCallback is used, bodyClickConsoleLogListener function should reference the same object as previous render
    // and NO INFINITE LOOP should occur
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter, bodyClickConsoleLogListener]);

  return (
    <div
      className='flex-display column-flex-direction flex-column-justify-align-center margin-top-100'
      style={{ width: '100%' }}
    >
      <Card>
        <CardContent>
          <CardContent>
            <div>
              This div and the card component which encloses it is a small part of document body
            </div>
            <br />
            <div>
              Click anywhere on the div and document body, and it will log value of current
              reference of counter
            </div>
            <br />
            <div id='counter-div'>
              Counter value set by clicking button - Includes Current Reference to counter::{' '}
              {counter}{' '}
            </div>
          </CardContent>
        </CardContent>
        <CardActions className='flex-display increment-counter-button justify-align-center'>
          <Button
            color='primary'
            variant='outlined'
            type='submit'
            data-test-id='test-increment-counter-button'
            id='increment-counter-submit'
            style={{ marginBottom: '30px' }}
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
