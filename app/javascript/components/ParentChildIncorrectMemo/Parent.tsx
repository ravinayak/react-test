import React, { useState, ReactElement } from 'react';
import { logger } from '@app/lib/Logger';
import { useUserContext } from './UserContext';
import { Car } from '@app/types/Car';
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
      logger.info(
        `Index being compared :: ${index - 1} - ${index} :: `,
        Object.is(childrenArr[index], childrenArr[index - 1]),
      );
    }
  });
};

const ChildMemoized = React.memo(Child);

export function Parent({ initialValue }: IProps) {
  const [counter, setCounter] = useState<number>(0);
  const user = useUserContext();
  const carProp: Car = {
    name: 'Honda',
    model: 'Civic 2005',
  };
  const arrayProp: Array<number> = [1, 2, 3, 4, 5];

  printChildrenArray(ChildMemoized);

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
        <ChildMemoized carProp={carProp} arrayProp={arrayProp} />
        {/* <ChildMemoized /> */}
      </div>
    </>
  );
}

Parent.defaultProps = {
  initialValue: 0,
};
