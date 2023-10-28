import React, { useState, ReactElement } from 'react';
// import { useContext } from 'react';
import { logger } from '@app/lib/Logger';
import { useUserContext } from './UserContext';
// import { Child } from './Child';

interface IProps {
  initialValue?: number;
  children: ReactElement;
}

const childrenArr: ReactElement[] = [];

const printChildrenArray = (child): void => {
  childrenArr.push(child);
  logger.info(childrenArr);
  childrenArr.forEach((_value, index) => {
    if (index > 0) {
      logger.info(
        `Index being compared :: ${index - 1} - ${index} :: `,
        Object.is(childrenArr[index], childrenArr[index - 1]),
      );
    }
  });
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function Parent({ initialValue, children }: IProps) {
  // export function Parent({ initialValue, children }: IProps) {
  // const [counter, setCounter] = useState<number>(initialValue);
  const [counter, setCounter] = useState<number>(0);
  const user = useUserContext();

  printChildrenArray(children);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  const reset = () => {
    // setCounter(initialValue);
    setCounter(0);
  };

  logger.info('Parent Component Rendered');

  const name = () => `${user.parentFirstName} ${user.parentLastName}`;

  return (
    <div
      style={{
        margin: 'auto',
        textAlign: 'center',
      }}
    >
      <br /> <br />
      <div id='counter'>Parent Counter :: {counter} </div>
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
        <div id='parent-user-name'> Parent User Name :: {name()}</div>
        <div id='parent-user-email'> Parent User Email :: {user.parentEmail}</div>
      </div>
      {children}
    </div>
  );
}

Parent.defaultProps = {
  initialValue: 0,
};
