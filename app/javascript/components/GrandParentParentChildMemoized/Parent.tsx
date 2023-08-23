import React, { useState, ReactElement, useContext, useCallback } from 'react';
import { logger } from '@app/lib/Logger';
import { useUserContext } from './UserContext';
import { Child } from './Child';

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

// const ChildMemoized = React.memo(Child);

export function Parent() {
  // export function Parent({ children }: IProps) {
  // export function Parent({ initialValue, children }: IProps) {
  // const [counter, setCounter] = useState<number>(initialValue);
  const [counter, setCounter] = useState<number>(0);
  const user = useUserContext();

  let parentProp: number;
  if (counter > 5) {
    parentProp = counter;
  }

  // printChildrenArray(children);
  // printChildrenArray(ChildMemoized);

  // console.log(<Child parentProp={parentProp} />);
  const children = useCallback(() => <Child parentProp={parentProp} />, []);

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
        {/* <ChildMemoized parentProp={parentProp} /> */}
        {children()}
      </div>
    </>
  );
}

Parent.defaultProps = {
  initialValue: 0,
};
