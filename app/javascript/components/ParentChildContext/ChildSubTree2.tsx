import React, { useContext } from 'react';
import { logger } from '@app/lib/Logger';
import { CounterContext } from './CounterContext';

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
