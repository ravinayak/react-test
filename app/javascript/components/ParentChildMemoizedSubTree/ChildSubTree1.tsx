import React from 'react';
import { logger } from '@app/lib/Logger';

export function ChildSubTree1() {
  logger.info('Child SubTree1 Component Rendered');

  return (
    <div>Child Component SubTree 1</div>
  );
}
