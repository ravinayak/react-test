import React, { useContext } from 'react';
import { CounterContext } from './CounterContext';
import { logger } from '@app/lib/Logger';

export function ChildSubTree2() {
  const counterContext = useContext(CounterContext);
  logger.info('Child Sub Tree 2 rendered');

  return (
    <>
      <div>Child Sub Tree 1 rendered</div>
      <div>Counter Context :: {counterContext}</div>
    </>
  );
}
