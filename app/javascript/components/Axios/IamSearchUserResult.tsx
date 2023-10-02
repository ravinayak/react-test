import React from 'react';
import { useLocation } from 'react-router-dom';
import { IamUser } from '@app/types/iamUser';
import Stack from '@mui/material/Stack';

export function IamSearchUserResult() {
  const location = useLocation();
  const errorFlag: boolean = location.state?.error;
  const userData: IamUser[] = location.state?.data;

  if (errorFlag) {
    return (
      <div
        key='user-search-result-error'
        style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}
      >
        Search User Result :: No User Found
      </div>
    );
  }
  if (userData.length === 0) {
    return (
      <Stack className='stack user-details' spacing={2}>
        <div key='user-search-result-not-found' className='user-details-div'>
          User Search Result :: User Not found
        </div>
      </Stack>
    );
  }
  const user: IamUser = userData[0];
  return (
    <Stack className='stack user-details' spacing={2}>
      <div key='user-search-result-div' className='user-details-div'>
        User Search Result
      </div>
      <div key='separator-asterick'>*******************************************************</div>
      <div key='enclosing-div' className='user-details-enclosing-div'>
        <li key='id'>Id :: {user.id}</li>
        <li key='email'>Email :: {user.email}</li>
        <li key='firstName'>FirstName :: {user.firstName}</li>
        <li key='lastName'>LastName :: {user.lastName}</li>
        <li key='active'>Active :: {user.active ? 'true' : 'false'}</li>
        <li key='twoFactorEnabled'>
          TwoFactorEnabled :: {user.twoFactorEnabled ? 'true' : 'false'}
        </li>
        <li key='emailVerified'>EmailVerified :: {user.emailVerified ? 'true' : 'false'}</li>
      </div>
    </Stack>
  );
}
