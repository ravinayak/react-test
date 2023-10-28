import React, { useState } from 'react';
// import user from '@testing-library/user-event';

export function InputAmount() {
  const initialValue = 0;
  const [amount, setAmount] = useState<number>(initialValue);
  const [count, setCount] = useState<number>(initialValue);

  return (
    <div>
      <br /> <br />
      <div>Input Amount Component</div>
      <div>*******************************</div>
      <br />
      <div id='amount-div' data-testid='count'>
        {count}
      </div>
      <br />
      <button type='button' onClick={() => setAmount(amount + 1)}>
        Increment
      </button>
      <input
        type='number'
        name='amount'
        value={amount}
        onChange={(e) => setAmount(parseInt(e.target.value, 10))}
      />
      <button type='button' onClick={() => setCount(amount)}>
        Set
      </button>
      <br /> <br />
    </div>
  );
}
