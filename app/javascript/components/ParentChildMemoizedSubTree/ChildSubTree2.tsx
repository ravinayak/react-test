import React from 'react';
import { logger } from '@app/lib/Logger';

export function ChildSubTree2() {
  logger.info('Child SubTree2 Component Rendered');

  return (
    <div>Child Component SubTree 2</div>
  );
}
