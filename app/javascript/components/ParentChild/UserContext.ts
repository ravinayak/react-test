import { createContext, useContext } from 'react';
import { User } from '@app/types/User';

export const UserContext = createContext<User | undefined>(undefined);

export const useUserContext = () => {
  const user = useContext(UserContext);
  if (user === undefined) {
    throw new Error('ParentContextProvider should wrap the compoonent to get correct value');
  }
  return user;
};
