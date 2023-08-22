import React, { useState, useContext } from 'react';
import { User } from '@app/types/User';
import { logger } from '@app/lib/Logger';
import { UserObject } from '@app/shared/UserObject';
import { Parent } from '@app/components/GrandParentParentMemoizedChild/Parent';
import { Child } from '@app/components/GrandParentParentMemoizedChild/Child';
import { UserContext } from '@app/components/GrandParentParentMemoizedChild/UserContext';

const ParentMemoized = React.memo(Parent);

export function GrandParent() {
  const [userDetails, setUserDetails] = useState<User | undefined>(undefined);
  const [counter, setCounter] = useState<number>(0);

  let parentProp;

  if (counter > 5) {
    parentProp = counter;
  }

  if (userDetails === undefined) {
    setUserDetails(UserObject);
  }
  logger.info('GrandParent is being rendered');

  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <UserContext.Provider value={userDetails}>
      <div
        style={{
          margin: 'auto',
          textAlign: 'center',
        }}
      >
        <div id='counter'>GrandParent Counter :: {counter} </div>
        <br /> <br />
        <button id='increment-button' type='button' onClick={() => increment()}>
          Increment
        </button>
      </div>
      {/* <ParentMemoized initialValue={counter}>
        <Child parentProp={parentProp} />
      </ParentMemoized> */}
      <ParentMemoized>
        <Child parentProp={parentProp} />
      </ParentMemoized>
    </UserContext.Provider>
  );
}
