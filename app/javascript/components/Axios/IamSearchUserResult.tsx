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
      <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
        Search User Result :: No User Found
      </div>
    );
  } else if (userData.length === 0) {
    return (
      <Stack className='stack user-details' spacing={2}>
        <div className='user-details-div'>User Search Result :: User Not found</div>
      </Stack>
    );
  } else {
    const user: IamUser = userData[0];
    return (
      <Stack className='stack user-details' spacing={2}>
        <div className='user-details-div'>User Search Result</div>
        <div>*******************************************************</div>
        <div className='user-details-enclosing-div'>
          <div>Id :: {user.id}</div>
          <div>Email :: {user.email}</div>
          <div>FirstName :: {user.firstName}</div>
          <div>LastName :: {user.lastName}</div>
          <div>Active :: {user.active ? 'true' : 'false'}</div>
          <div>TwoFactorEnabled :: {user.twoFactorEnabled ? 'true' : 'false'}</div>
          <div>EmailVerified :: {user.emailVerified ? 'true' : 'false'}</div>
        </div>
      </Stack>
    );
  }
}
