import React from 'react';
import { logger } from '@app/lib/Logger';

import { ChildSubTree1 } from './ChildSubTree1';
import { ChildSubTree2 } from './ChildSubTree2';

export function Child() {
  logger.info('Child Component Rendered');

  return (
    <>
      <div>Child Component</div>
      <ChildSubTree1 />
      <ChildSubTree2 />
    </>
  );
}
