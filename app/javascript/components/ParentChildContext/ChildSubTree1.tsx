import React from 'react';
import { logger } from '@app/lib/Logger';

export function ChildSubTree1() {
  logger.info('Child Sub Tree 1 rendered');

  return <div>Child Sub Tree 1 rendered</div>;
}
