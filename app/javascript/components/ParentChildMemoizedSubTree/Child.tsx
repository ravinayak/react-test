import React, { useState } from 'react';
import { logger } from '@app/lib/Logger';
import { useUserContext } from './UserContext';
import { ChildSubTree1 } from './ChildSubTree1';
import { ChildSubTree2 } from './ChildSubTree2';
import { ChildSubTree3 } from './ChildSubTree3';

interface IProps {
  childProps: number;
}

export function Child({ childProps }) {
  const user = useUserContext();
  const [counter, setCounter] = useState<number>(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const name = `${user.childFirstName} ${user.childLastName}`;
  logger.info('Child Component Rendered');

  return (
    <>
      <div>Child Component SubTree</div>
      <div
        style={{
          margin: 'auto',
          textAlign: 'center',
        }}
      >
        <br /> <br />
        <div id='counter'>Memoized Child Counter :: {counter} </div>
        <br /> <br />
        <button
          id='increment-button'
          type='button'
          onClick={() => increment()}
          style={{ marginRight: '10px' }}
        >
          Increment
        </button>
        <br /> <br />
        <ChildSubTree1 />
        <ChildSubTree2 />
        <ChildSubTree3 />
      </div>
    </>
  );
}
