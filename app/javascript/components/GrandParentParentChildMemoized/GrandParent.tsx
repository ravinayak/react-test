import React, { useState } from 'react';
// import { useContext } from 'react';
import { Parent } from '@app/components/GrandParentParentChildMemoized/Parent';
import { logger } from '@app/lib/Logger';
import { UserObject } from '@app/shared/UserObject';
import { User } from '@app/types/User';
// import { Child } from '@app/components/GrandParentParentChildMemoized/Child';
import { UserContext } from '@app/components/GrandParentParentChildMemoized/UserContext';

export function GrandParent() {
  const [userDetails, setUserDetails] = useState<User | undefined>(undefined);
  const [counter, setCounter] = useState<number>(0);

  let parentProp;

  if (counter > 5) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
      {/* <Parent>
        <Child parentProp={parentProp} />
      </Parent> */}
      <Parent />
    </UserContext.Provider>
  );
}
