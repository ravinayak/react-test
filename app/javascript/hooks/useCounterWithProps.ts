import { useState } from 'react';
import { ICounterProps } from '@app/types/CounterProps';

export const useCounterWithProps = (props: ICounterProps) => {
  const [counter, setCounter] = useState<number>(props.counter);
  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };
  return {
    counter,
    increment,
    decrement,
  };
};
