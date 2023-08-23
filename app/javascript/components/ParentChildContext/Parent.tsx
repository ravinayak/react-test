import React, { useState, ReactElement } from 'react';
import { logger } from '@app/lib/Logger';
import { Child } from './Child';
import { CounterContext } from './CounterContext';

interface IProps {
  initialValue?: number;
  children?: ReactElement;
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

// Alternate syntax for receiving children through props directly
// export function Parent(props) {
export function Parent({ initialValue }: IProps) {
  // export function Parent({ initialValue, children }: IProps) {
  const [counter, setCounter] = useState<number>(0);
  let counterContext: number;

  // const children = props.children;

  // printChildrenArray(children);
  const ChildElement = <Child />;

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  if (counter > 5) {
    counterContext = counter;
  }

  logger.info('Parent Component Rendered');

  return (
    // <CounterContext.Provider value={counterContext}>
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
      <br /> <br />
      {/* {children} */}
      {ChildElement}
    </div>
    // </CounterContext.Provider>
  );
}

Parent.defaultProps = {
  initialValue: 0,
};
