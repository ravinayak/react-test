import React, { ReactElement, useState } from 'react';
import { logger } from '@app/lib/Logger';

interface IProps {
  children: ReactElement;
}

const childrenArr: ReactElement[] = [];

export function Parent({ children }: IProps) {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1);
  };
  childrenArr.push(children);
  logger.info(childrenArr);
  childrenArr.forEach((_value, index) => {
    if (index > 0) {
      logger.info(
        `Index being compared :: ${index - 1} - ${index} :: `,
        Object.is(childrenArr[index], childrenArr[index - 1]),
      );
    }
  });
  logger.info('Parent Component Rendered');
  return (
    <>
      <div>Counter - Parent Component :: {counter}</div>
      <div> {children} </div>
      <button id='button' onClick={() => increment()} type='button'>
        Increment Parent Component
      </button>
    </>
  );
}
