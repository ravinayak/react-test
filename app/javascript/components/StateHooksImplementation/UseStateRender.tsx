import React from 'react';
import { UseStateImplementation } from './UseStateImplementation';
import { logger } from '@app/lib/Logger';

let resetIndexFunction;

const { resetIndex, useState } = UseStateImplementation();

const displayCounter = () => {
  const [counter, setCounter] = useState(1);
  logger.info('Counter :: ', counter);

  if (counter !== 2) {
    setCounter(2);
  }
  resetIndexFunction = resetIndex;
};

export function UseStateRender() {
  displayCounter();
  resetIndexFunction();
  displayCounter();
  logger.info('UseStateComponent Rendered');
  return (
    <center>
      <div style={{ marginTop: '255px' }}>UseStateRender Component Called</div>
    </center>
  );
}
