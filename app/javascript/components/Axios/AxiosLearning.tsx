import React, { useState, useRef } from 'react';
import { AxiosResponse, AxiosError } from 'axios';
import { routes } from '@app/config/routes';
import Alert from '@mui/material/Alert';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { CircularColor } from '@app/components/ProgressIndicator/CircularColor';
import { ErrorMessage, Form, Field, Formik } from 'formik';
import { LoadingButton } from '@mui/lab';
import { ICreateUserTypiCodePayload } from '@app/types/UserTypiCode';
import { createUser } from '@app/queries/createUser';
import { logger } from '@app/lib/Logger';
import { AxiosUserCreatedForm } from './AxiosUserCreatedForm';
import '../../src/App.css';
import { useNavigate } from 'react-router-dom';

export function AxiosLearning() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formValues, setFormValues] = useState<ICreateUserTypiCodePayload>(null);
  const [createUserDataProcessed, setCreateUserDataProcessed] = useState<boolean>(false);
  const navigate = useNavigate();

  const initialValues = {
    name: 'Default Name',
    username: 'Default Username',
    email: 'Default Email',
    address: {
      street: 'Default Street',
      suite: 'Default Suite',
      city: 'Default City',
      zipcode: 'Default Zipcode',
      geo: {
        lat: 'Default lat',
        lng: 'Default lng',
      },
    },
    phone: 'Default Phone',
    website: 'Default Website',
    company: {
      name: 'Default Company Name',
      catchPhrase: 'Default CatchPhrase',
      bs: 'Default bs',
    },
  };

  const handleSubmit = async (formValues: ICreateUserTypiCodePayload) => {
    setIsLoading(true);
    setFormValues(formValues);
  };

  const processResponseData = (response) => {
    setIsLoading(false);

    navigate(routes.USER_CREATED, {
      state: { userData: response.responseData, errorFlag: response.errorFlag },
    });
  };
  const createUserFunc = async () => {
    const { name, username, email, address, phone, website, company } = formValues;
    const response = await createUser({
      name,
      username,
      email,
      address,
      phone,
      website,
      company,
    });
    if (response) {
      processResponseData(response);
    }
  };

  if (formValues && !createUserDataProcessed) {
    setCreateUserDataProcessed(true);
    createUserFunc();
  }

  if (isLoading) {
    logger.info('Circular color');
    return <CircularColor />;
  }

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <Card variant='outlined' className='card'>
        <CardHeader>Please enter your profile details to create your Profile</CardHeader>
        {/* <Stack spacing={2} sx={{ mx: (theme) => theme.spacing(2) }}>
        <Typography>This is the Typography Element - 1</Typography>
        <Typography>This is the Typography Element - 2</Typography>
      </Stack> */}
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {({ errors, touched }) => (
            <Form className='form'>
              <CardContent className='card-content'>
                <Stack spacing={2} className='stack'>
                  <Field
                    as={TextField}
                    id='name'
                    name='name'
                    label='Name'
                    fullWidth
                    inputProps={{ 'data-test-id': 'name-test-id' }}
                    helperText={<ErrorMessage name='name' />}
                    error={!!(touched.name && errors.name)}
                  />
                  <Field
                    as={TextField}
                    id='username'
                    name='username'
                    label='Username'
                    fullWidth
                    inputProps={{ 'data-test-id': 'username-test-id' }}
                    helperText={<ErrorMessage name='username' />}
                    error={!!(touched.username && errors.username)}
                  />
                  <Field
                    as={TextField}
                    id='email'
                    name='email'
                    label='Email'
                    fullWidth
                    inputProps={{ 'data-test-id': 'email-test-id' }}
                    helperText={<ErrorMessage name='email' />}
                    error={!!(touched.email && errors.email)}
                  />
                  <Divider />
                  <Typography>Address Information</Typography>
                  <Field
                    as={TextField}
                    id='street'
                    name='address.street'
                    label='Street'
                    fullWidth
                    inputProps={{ 'data-test-id': 'street-test-id' }}
                    helperText={<ErrorMessage name='address.street' />}
                    error={!!(touched.address?.street && errors.address?.street)}
                  />
                  <Field
                    as={TextField}
                    id='suite'
                    name='address.suite'
                    label='Suite'
                    fullWidth
                    inputProps={{ 'data-test-id': 'suite-test-id' }}
                    helperText={<ErrorMessage name='address.suite' />}
                    error={!!(touched.address?.suite && errors.address?.suite)}
                  />
                  <Field
                    as={TextField}
                    id='city'
                    name='address.city'
                    label='City'
                    fullWidth
                    inputProps={{ 'data-test-id': 'city-test-id' }}
                    helperText={<ErrorMessage name='address.city' />}
                    error={!!(touched.address?.city && errors.address?.city)}
                  />
                  <Field
                    as={TextField}
                    id='zipcode'
                    name='address.zipcode'
                    label='Zipcode'
                    fullWidth
                    inputProps={{ 'data-test-id': 'zipcode-test-id' }}
                    helperText={<ErrorMessage name='address.zipcode' />}
                    error={!!(touched.address?.zipcode && errors.address?.zipcode)}
                  />
                  <Typography>Address - Geo Information</Typography>
                  <Field
                    as={TextField}
                    id='lat'
                    name='address.geo.lat'
                    label='Lat'
                    fullWidth
                    inputProps={{ 'data-test-id': 'lat-test-id' }}
                    helperText={<ErrorMessage name='address.geo.lat' />}
                    error={!!(touched.address?.geo?.lat && errors.address?.geo?.lat)}
                  />
                  <Field
                    as={TextField}
                    id='lng'
                    name='address.geo.lng'
                    label='Lng'
                    fullWidth
                    inputProps={{ 'data-test-id': 'lng-test-id' }}
                    helperText={<ErrorMessage name='address.geo.lng' />}
                    error={!!(touched.address?.geo?.lng && errors.address?.geo?.lng)}
                  />
                  <Divider />
                  <Field
                    as={TextField}
                    id='phone'
                    name='phone'
                    label='Phone'
                    fullWidth
                    inputProps={{ 'data-test-id': 'phone-test-id' }}
                    helperText={<ErrorMessage name='phone' />}
                    error={!!(touched.phone && errors.phone)}
                  />
                  <Field
                    as={TextField}
                    id='website'
                    name='website'
                    label='Website'
                    fullWidth
                    inputProps={{ 'data-test-id': 'website-test-id' }}
                    helperText={<ErrorMessage name='website' />}
                    error={!!(touched.website && errors.website)}
                  />
                  <Divider />
                  <Typography>Company Information</Typography>
                  <Field
                    as={TextField}
                    id='company-name'
                    name='company.name'
                    label='Company Name'
                    fullWidth
                    inputProps={{ 'data-test-id': 'company-name-test-id' }}
                    helperText={<ErrorMessage name='company.name' />}
                    error={!!(touched.company?.name && errors.company?.name)}
                  />
                  <Field
                    as={TextField}
                    id='catchPhrase'
                    name='company.catchPhrase'
                    label='CatchPhrase'
                    fullWidth
                    inputProps={{ 'data-test-id': 'catchPhrase-test-id' }}
                    helperText={<ErrorMessage name='company.catchPhrase' />}
                    error={!!(touched.company?.catchPhrase && errors.company?.catchPhrase)}
                  />
                  <Field
                    as={TextField}
                    id='bs'
                    name='company.bs'
                    label='BS'
                    fullWidth
                    inputProps={{ 'data-test-id': 'bs-test-id' }}
                    helperText={<ErrorMessage name='company.bs' />}
                    error={!!(touched.company?.bs && errors.company?.bs)}
                  />
                </Stack>
              </CardContent>
              <CardActions className='card-actions'>
                <LoadingButton
                  type='submit'
                  id='btn-create-user-button'
                  disabled={isLoading}
                  loading={isLoading}
                  color='primary'
                  variant='outlined'
                >
                  Create User
                </LoadingButton>
              </CardActions>
            </Form>
          )}
        </Formik>
      </Card>
    </div>
  );
}
// AxiosLearning.whyDidYouRender = true;
