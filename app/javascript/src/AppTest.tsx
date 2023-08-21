import React, { useState } from 'react';
// import { GrandParent } from './GrandParent';
import { Parent } from '@app/components/ParentChild/Parent';
import { User } from '@app/types/User';
import { UserContext } from '@app/components/ParentChild/UserContext';
import { UserObject } from '@app/shared/UserObject';

export function AppTest() {
  const [userObject, setUserObject] = useState<User | undefined>(undefined);
  if (userObject === undefined) {
    setUserObject(UserObject);
  }
  return (
    <UserContext.Provider value={userObject}>
      <Parent />
    </UserContext.Provider>
  );
  // return <GrandParent />;
}
