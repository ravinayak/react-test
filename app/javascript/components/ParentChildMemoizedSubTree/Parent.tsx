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

const ChildMemoized = React.memo(Child);

export function Parent({ initialValue }: IProps) {
  const [counter, setCounter] = useState<number>(initialValue);
  const user = useUserContext();
  let childProps: number;

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

  const changeProps = () => {
    initialValue = Math.random();
    logger.info('Props passed to component updated', initialValue);
  };

  const changeChildProps = () => {
    childProps = Math.random();
    logger.info('Props passed to component updated', childProps);
  };
  const name = () => `${user.parentFirstName} ${user.parentLastName}`;

  logger.info('InitalValue Props :: ', initialValue);
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
        <div id='props'>Parent Props :: {initialValue} </div>
        <br /> <br />
        <button
          id='increment-button'
          type='button'
          onClick={() => increment()}
          style={{ marginRight: '10px' }}
        >
          Increment
        </button>
        <button
          id='decrement-button'
          type='button'
          onClick={() => decrement()}
          style={{ marginRight: '10px' }}
        >
          Decrement
        </button>
        <button
          id='reset-button'
          type='button'
          onClick={() => reset()}
          style={{ marginRight: '10px' }}
        >
          Reset
        </button>
        <button
          id='change-props-button'
          type='button'
          onClick={() => changeProps()}
          style={{ marginRight: '10px' }}
        >
          Change Own Props
        </button>
        <button
          id='change-child-props-button'
          type='button'
          onClick={() => changeChildProps()}
          style={{ marginRight: '10px' }}
        >
          Change Child Props
        </button>
        <br /> <br />
        <div>
          <div id='parent-user-name'> Parent User Name :: {name()}</div>
          <div id='parent-user-email'> Parent User Email :: {user.parentEmail}</div>
        </div>
        <ChildMemoized childProps={childProps} />
      </div>
    </>
  );
}

Parent.defaultProps = {
  initialValue: 0,
};
