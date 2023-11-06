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

  // Function created without using useCallback which implies a new function object will be created for every render
  // This will cause a new function object to be attached to click event listener on every render, and multiple click
  // event listeners will accumulate and stack up, causing a single click on document body to execute these multiple
  // click event listeners to execute and show log output multiple times
  // For a counter value of 2, 3 such functions will be attached to click event on document body and each will log output
  // to console
  //    1st Render => counter = 0 => useEffect runs => New function object created and attached, # of event listeners attached = 1
  //    2nd Render => counter = 1 => useEffect runs => New function object created and attached, # of event listeners attached = 2
  //    3rd Render => counter = 2 => useEffect runs => New function object created and attached, # of event listeners attached = 3
  // const bodyClickConsoleLogListener = () => {
  //   logger.info('Logging on Console :: ', Math.random());
  // };

  // Attaching a clickEventListener to document body will end up attaching many click event listeners to document body,
  // precisely one on every render of the component. This must be fixed, as at any point of time, a function which
  // performs a desired functionality should be attached only once to any HTML Element
  // Hence we must return from useEffect a function which removes the event Handler. This function will be invoked on
  // next render of the component and will remove the EventHandler from the HTML Element before executing useEffect code
  // which will attach another event handler to the HTML Element
  //
  useEffect(() => {
    // attach a click handler to document body which prints counter on div
    // New function object is created for "bodyClickListener" which contains a reference to "counter" state, hence, for
    // every render a new function object for "bodyClickListener" is attached to document body. These multiple event listeners
    // stack up and accumulate on the event target
    // When we click on document body, we see multiple logging output on console, one for each "counter" state starting from
    // initial state
    document.body.addEventListener('click', bodyClickListener);

    // When you attach the same function as a click event listener to the document body twice, the function will only be
    // executed once when you click the document body. This is because event listeners are added to the event target and
    // not duplicated when you add them multiple times AS LONG AS THE FUNCTION OBJECT IS SAME. If you create a new function
    // object and attach it to document body, a new event listener will be attached to document body
    // Because we are using useCallback hook, same function object is returned ACROSS RENDERS, hence, only 1 event listener
    // is attached to document body for "bodyClickConsoleLogListener"
    document.body.addEventListener('click', bodyClickConsoleLogListener);

    return () => {
      document.body.removeEventListener('click', bodyClickListener);
      // Not REQUIRED if we are using useCallback
      // document.body.removeEventListener('click', bodyClickConsoleLogListener);
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
