import React, { useState } from 'react';
import { logger } from '@app/lib/Logger';
import { CounterWithProps } from './CounterWithProps';

export function ParentCounterWithProps() {
  const initialValue = 0;
  const [counter, setCounter] = useState<number>(initialValue);

  const handleIncrement = () => {
    logger.info('I am in increment');
    setCounter(counter + 1);
  };
  const handleDecrement = () => {
    logger.info('I am in decrement');
    setCounter(counter - 1);
  };

  return (
    <div id='parent-counter-with-props'>
      <div>Parent Counter With Props Component Rendered</div>
      <div>******************************************************</div>
      <div>
        This component is passing following props to its child component
        <ul
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            marginLeft: '780px',
          }}
        >
          <li>State Variable: Counter</li>
          <li>Increment Function: handleIncrement</li>
          <li>Decrement Function: handleDecrement</li>
        </ul>
      </div>
      <CounterWithProps
        counter={counter}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
    </div>
  );
}
