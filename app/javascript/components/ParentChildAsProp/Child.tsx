import React from 'react';
import { logger } from '@app/lib/Logger';
import { useUserContext } from './UserContext';

export function Child() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const user = useUserContext();

  // const name = `${user.childFirstName} ${user.childLastName}`;
  logger.info('Child Component Rendered');

  return <div>Child Component</div>;
}
