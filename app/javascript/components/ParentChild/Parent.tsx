import React, { useState } from 'react';
import { logger } from '@app/lib/Logger';
import { useUserContext } from './UserContext';
import { Child } from './Child';

interface IProps {
  initialValue?: number;
}
export function Parent({ initialValue }: IProps) {
  const [counter, setCounter] = useState<number>(0);
  const user = useUserContext();

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  const reset = () => {
    setCounter(initialValue);
  };

  const name = () => `${user.parentFirstName} ${user.parentLastName}`;

  logger.info('Parent Component Rendered');

  return (
    <>
      <div
        style={{
          margin: 'auto',
          textAlign: 'center',
        }}
      >
        <br /> <br />
        <div id='counter'>Counter :: {counter} </div>
        <br /> <br />
        <button id='increment-button' type='button' onClick={() => increment()}>
          Increment
        </button>
        <button id='decrement-button' type='button' onClick={() => decrement()}>
          Decrement
        </button>
        <button id='reset-button' type='button' onClick={() => reset()}>
          Reset
        </button>
        <br /> <br />
        <div>
          <div id='parent-user-name'> User Name :: {name()}</div>
          <div id='parent-user-email'> User Email :: {user.parentEmail}</div>
        </div>
        <Child />
      </div>
    </>
  );
}

Parent.defaultProps = {
  initialValue: 0,
};
