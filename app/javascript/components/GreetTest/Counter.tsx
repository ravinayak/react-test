import React, { useState } from 'react';

export function Counter() {
  const [counter, setCounter] = useState<number>(0);
  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <br />
      <br />
      <div>Counter Component</div>
      <div>*******************************</div>
      <br />
      <div id='counter'>Counter :: {counter}</div>
      <br />
      <br />
      <button type='button' onClick={increment}>
        Increment
      </button>
      <br />
      <br />
      <button type='button' onClick={decrement}>
        Decrement
      </button>
    </div>
  );
}
