import React from 'react';
import { useLocation } from 'react-router-dom';
import Stack from '@mui/material/Stack';

export function AxiosUserCreatedForm() {
  const location = useLocation();
  const error = location.state?.errorFlag;
  const userData = location.state?.data;

  if (error) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
        Error Occurred: No User Created
      </div>
    );
  }

  const userAddressData: React.JSX.Element[] = [];
  const userCompanyData: React.JSX.Element[] = [];

  const populateUserInfo = (userInfo: React.JSX.Element[], key: string, value: string) => {
    userInfo.push(
      <li key={key}>
        {key} :: {value}
      </li>,
    );
  };
  const processUserDataNestedKey = (userDataObject) => {
    Object.keys(userDataObject).forEach((objectKey) => {
      populateUserInfo(userAddressData, objectKey, userDataObject[objectKey]);
    });
  };

  Object.keys(userData.address).forEach((key) => {
    /*  eslint no-unused-expressions: ["error", { "allowTernary": true }]   */
    typeof userData.address[key] === 'object'
      ? processUserDataNestedKey(userData.address[key])
      : populateUserInfo(userAddressData, key, userData.address[key]);
  });

  Object.keys(userData.company).forEach((key) => {
    populateUserInfo(userCompanyData, key, userData.company[key]);
  });

  return (
    <Stack className='stack user-details' spacing={2}>
      <div className='user-details-div'>User Details</div>
      <div>*******************************************************</div>
      <div className='user-details-enclosing-div'>
        <ul>
          <li key='id'>Id :: {userData.id}</li>
          <li key='name'>Name :: {userData.name}</li>
          <li key='username'>Username :: {userData.username}</li>
          <li key='email'>Email :: {userData.email}</li>
          {userAddressData}
          <li key='phone'>Phone :: {userData.phone}</li>
          <li key='website'>Website :: {userData.website}</li>
          {userCompanyData}
        </ul>
      </div>
    </Stack>
  );
}
