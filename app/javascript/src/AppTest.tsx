import React, { useState } from 'react';
// import { GrandParent } from './GrandParent';
// import { Parent } from '@app/components/ParentChildAsProp/Parent';
// import { Child } from '@app/components/ParentChildAsProp/Child';
// import { UserContext } from '@app/components/ParentChildAsProp/UserContext';
// import { Parent } from '@app/components/ParentChild/Parent';
// import { Child } from '@app/components/ParentChild/Child';
// import { UserContext } from '@app/components/ParentChild/UserContext';
// import { Parent } from '@app/components/ParentChildAsRenderFunction/Parent';
// import { Child } from '@app/components/ParentChildAsRenderFunction/Child';
// import { UserContext } from '@app/components/ParentChildAsRenderFunction/UserContext';
// import { Parent } from '@app/components/ParentChildMemoized/Parent';
// import { UserContext } from '@app/components/ParentChildMemoized/UserContext';
// import { GrandParent } from '@app/components/GrandParentParentMemoizedChild/GrandParent';
// import { UserContext } from '@app/components/GrandParentParentMemoizedChild/UserContext';
import { GrandParent } from '@app/components/GrandParentParentChildMemoized/GrandParent';
// import { UserContext } from '@app/components/GrandParentParentChildMemoized/UserContext';
// import { User } from '@app/types/User';
import { logger } from '@app/lib/Logger';
// import { UserObject } from '@app/shared/UserObject';

export function AppTest() {
  // const [userDetails, setUserDetails] = useState<User | undefined>(undefined);
  // const [counter, setCounter] = useState<number>(0);

  // if (userDetails === undefined) {
  //   setUserDetails(UserObject);
  // }
  logger.info('AppTest is being rendered');

  // const increment = () => {
  //   setCounter(counter + 1);
  // };

  return (
    <GrandParent />
    // <UserContext.Provider value={userDetails}>
    //   <div
    //     style={{
    //       margin: 'auto',
    //       textAlign: 'center',
    //     }}
    //   >
    //     <div id='counter'>GrandParent Counter :: {counter} </div>
    //     <br /> <br />
    //     <button id='increment-button' type='button' onClick={() => increment()}>
    //       Increment
    //     </button>
    //   </div>
    //   <Parent initialValue={counter} />
    // </UserContext.Provider>
    // <UserContext.Provider value={userDetails}>
    // a. Pass Child component as a prop explicitly
    //   <Parent children={<Child />} />
    // b. Pass Child component as a prop implicitly as a component
    //   <Parent>
    //     <Child />
    //   </Parent>
    // c. Pass Child component as a prop and receive it as a prop in Parent element

    // a. Pass children as a render function
    //   <Parent children={() => <Child />} />
    // </UserContext.Provider>
  );
  // return <GrandParent />;
}