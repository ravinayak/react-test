/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { logger } from '@app/lib/Logger';
import { useUserContext } from './UserContext';

interface IProps {
  parentProp: number;
}
export function Child({ parentProp }: IProps) {
  const user = useUserContext();
  const [counter, setCounter] = useState<number>(0);

  const name = `${user.childFirstName} ${user.childLastName}`;

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  /* eslint-disable no-param-reassign */
  if (counter > 5) {
    parentProp += ' Hi ';
  }

  const reset = () => {
    setCounter(0);
  };

  logger.info('Child Component Rendered');

  return (
    <>
      <br /> <br />
      <div id='counter'>Child Counter :: {counter} </div>
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
      <br /> <br />
      <div id='childName'> Child User :: {name} </div>
      <div id='childEmail'> Child Email :: {user.childEmail} </div>
      <br /> <br />
      <div id='parentProp'> Parent Props :: {parentProp} </div>
      <br /> <br />
      <div>Child Component</div>
    </>
  );
}
