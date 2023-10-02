import React from 'react';
import { useLocation } from 'react-router-dom';
import Stack from '@mui/material/Stack';

export function AxiosUserCreatedForm() {
  const location = useLocation();
  const errorFlag = location.state?.errorFlag;
  const userData = location.state?.userData;

  if (errorFlag) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
        Error Occurred: No User Created
      </div>
    );
  } else {
    const userAddressData = [];
    const userCompanyData = [];
    Object.keys(userData.address).forEach((key) => {
      typeof userData.address[key] === 'object'
        ? Object.keys(userData.address[key]).forEach((objectKey) => {
            userAddressData.push(
              <div>
                {objectKey} :: {userData.address[key][objectKey]}
              </div>,
            );
          })
        : userAddressData.push(
            <div>
              {key} :: {userData.address[key]}
            </div>,
          );
    });
    Object.keys(userData.company).forEach((key) => {
      userCompanyData.push(
        <div>
          {key} :: {userData.company[key]}
        </div>,
      );
    });
    return (
      <Stack className='stack user-details' spacing={2}>
        <div className='user-details-div'>User Details</div>
        <div>*******************************************************</div>
        <div>Id :: {userData.id}</div>
        <div>Name :: {userData.name}</div>
        <div>Username :: {userData.username}</div>
        <div>Email :: {userData.email}</div>
        {userAddressData}
        <div>Phone :: {userData.phone}</div>
        <div>Website :: {userData.website}</div>
        {userCompanyData}
      </Stack>
    );
  }
}
