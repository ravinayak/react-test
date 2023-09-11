import React, { useState } from 'react';
import { ICounterProps } from '@app/types/CounterProps';

export function CounterWithProps(props: ICounterProps) {
  const { counter, handleIncrement, handleDecrement } = props;
  return (
    <div id='counter-with-props'>
      <div>Counter With Props Component</div>
      <div>******************************************************</div>
      <div>Counter :: {counter}</div>
      <br />
      <button type='button' onClick={handleIncrement}>
        Increment
      </button>
      <button type='button' onClick={handleDecrement}>
        Decrement
      </button>
    </div>
  );
}
