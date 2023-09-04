import React from 'react';
import { logger } from '@app/lib/Logger';
import { useUserContext } from './UserContext';

export function Child() {
  const user = useUserContext();

  const name = `${user.childFirstName} ${user.childLastName}`;
  logger.info('Child Component Rendered');

  return (
    <>
      <div>Child Component</div>
    </>
  );
}
Child.whyDidYouRender = true;
