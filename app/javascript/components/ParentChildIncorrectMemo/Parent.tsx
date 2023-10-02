import React, { useState, ReactElement, MemoExoticComponent } from 'react';
import { logger } from '@app/lib/Logger';
import { Car } from '@app/types/Car';
import { useUserContext } from './UserContext';
import { Child } from './Child';

interface IProps {
  initialValue?: number;
}

const childrenArr: MemoExoticComponent<any>[] = [];
const childPropArr: Array<any> = [];

const printPropArray = (arr) => {
  if (arr.length === 3) {
    return;
  }
  for (let index = 3; index < arr.length; index += 3) {
    logger.info(index);
    const res: string = `${Object.is(arr[index - 3], arr[index])} - ${Object.is(
      arr[index - 2],
      arr[index + 1],
    )} - ${Object.is(arr[index - 1], arr[index + 2])}`;
    logger.info(`Index being compared :: ${index - 3} - ${index} :: `, res);
  }
};

const printArray = (arr, isProp = false) => {
  logger.info(arr);
  if (isProp) {
    return printPropArray(arr);
  }
  arr.forEach((_value, index) => {
    if (index > 0) {
      logger.info(
        `Index being compared :: ${index - 1} - ${index} :: `,
        Object.is(arr[index], arr[index - 1]),
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
  const handleClick: Function = () => '"I am return of function being called"';

  childPropArr.push(carProp, arrayProp, handleClick);
  printArray(childPropArr, true);

  childrenArr.push(ChildMemoized);
  printArray(childrenArr);

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
        <ChildMemoized carProp={carProp} arrayProp={arrayProp} handleClick={handleClick} />
        {/* <ChildMemoized /> */}
      </div>
  );
}

Parent.defaultProps = {
  initialValue: 0,
};
