import React, { useState, ReactElement } from 'react';
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
      logger.info(
        `Index being compared :: ${index - 1} - ${index} :: `,
        Object.is(childrenArr[index], childrenArr[index - 1]),
      );
    }
  });
};

export function Parent({ initialValue }: IProps) {
  const [counter, setCounter] = useState<number>(0);
  const user = useUserContext();

  const child = <Child />;
  printChildrenArray(child);

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

  const value = { name: 'faisal' };
  const getUs = () => ({
    name: 'faisal',
  });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_us, setUs] = useState(value);
  const handleClick = () => {
    setUs(getUs());
  };

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
      <button
        id='increment-button'
        type='button'
        onClick={() => increment()}
        style={{ marginRight: '5px' }}
      >
        Increment
      </button>
      <button
        id='decrement-button'
        type='button'
        onClick={() => decrement()}
        style={{ marginRight: '5px' }}
      >
        Decrement
      </button>
      <button id='reset-button' type='button' onClick={() => reset()}>
        Reset
      </button>
      <br /> <br />
      <div id='parent-why-did-you-render'>
        {' '}
        Click button below to see logs of why did you render library
      </div>
      <br />
      <button onClick={handleClick} type='button'>
        whyDidYouRender in Action
      </button>
      <br /> <br />
      <div>
        <div id='parent-user-name'> Parent User Name :: {name()}</div>
        <div id='parent-user-email'> Parent User Email :: {user.parentEmail}</div>
      </div>
      {child}
    </div>
  );
}

Parent.defaultProps = {
  initialValue: 0,
};
Parent.whyDidYouRender = true;
