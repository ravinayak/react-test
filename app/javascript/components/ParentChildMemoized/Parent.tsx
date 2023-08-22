import React, { useState, ReactElement, useContext } from 'react';
import { logger } from '@app/lib/Logger';
import { useUserContext } from './UserContext';
import { Child } from './Child';

interface IProps {
  initialValue?: number;
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
const ChildMemoized = React.memo(Child);

export function Parent({ initialValue }: IProps) {
  const [counter, setCounter] = useState<number>(initialValue);
  const user = useUserContext();
  let parentProp: number;

  printChildrenArray(ChildMemoized);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  if (counter > 5) {
    parentProp = counter;
  }

  const reset = () => {
    setCounter(initialValue);
  };

  logger.info('Parent Component Rendered');

  const name = () => `${user.parentFirstName} ${user.parentLastName}`;

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
        <ChildMemoized parentProp={parentProp} />
      </div>
    </>
  );
}

Parent.defaultProps = {
  initialValue: 0,
};
