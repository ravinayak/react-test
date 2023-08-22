import React, { useState, ReactElement } from 'react';
import { logger } from '@app/lib/Logger';
import { useUserContext } from './UserContext';

interface IProps {
  initialValue?: number;
  children: ReactElement;
}

const childrenArr: ReactElement[] = [];

const printChildrenArray = (child) => {
  childrenArr.push(child);
  logger.info(childrenArr);
  childrenArr.forEach((_value, index) => {
    if (index > 0) {
      logger.info(Object.is(childrenArr[index], childrenArr[index - 1]));
    }
  });
};

// Alternate syntax for receiving children through props directly
// export function Parent(props) {

export function Parent({ initialValue, children }: IProps) {
  const [counter, setCounter] = useState<number>(0);
  const user = useUserContext();

  // const children = props.children;

  printChildrenArray(children);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  const reset = () => {
    // setCounter(props.initialValue);

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
    </>
  );
}

Parent.defaultProps = {
  initialValue: 0,
};
