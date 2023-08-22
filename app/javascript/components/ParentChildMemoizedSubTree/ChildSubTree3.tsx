import React from 'react';
import { logger } from '@app/lib/Logger';

export function ChildSubTree3() {
  logger.info('Child SubTree3 Component Rendered');

  return (
    <>
      <div>Child Component SubTree 3</div>
    </>
  );
}
