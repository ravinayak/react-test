import React, { useState } from 'react';
import { routes } from '@app/config/routes';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { CircularColor } from '@app/components/ProgressIndicator/CircularColor';
import { ErrorMessage, Form, Field, Formik, FormikValues } from 'formik';
import { LoadingButton } from '@mui/lab';
import axios from 'axios';
import { searchIamUser } from '@app/queries/searchUsersIam';
import '../../src/App.css';
import { useNavigate } from 'react-router-dom';

export function IamSearchUsers() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const searchUserFunction = async (email: string): Promise<void> => {
    const searchResponse = await searchIamUser({ email });
    if (axios.isAxiosError(searchResponse)) {
      navigate(routes.SEARCH_USER_RESULT, {
        state: { error: true, message: searchResponse.message },
      });
    } else {
      navigate(routes.SEARCH_USER_RESULT, { state: { error: false, data: searchResponse.data } });
    }
  };

  const handleSubmit = async (values: FormikValues) => {
    setIsLoading(true);
    searchUserFunction(values.email);
  };

  const initialValues = {
    email: '',
  };

  if (isLoading) {
    return <CircularColor />;
  }

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <Card variant='outlined' className='card'>
        <CardHeader>Search User</CardHeader>
        <Divider />
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {({ errors, touched }) => (
            <Form className='form'>
              <CardContent className='card-content'>
                <Stack spacing={2} className='stack'>
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
                  Search User
                </LoadingButton>
              </CardActions>
            </Form>
          )}
        </Formik>
      </Card>
    </div>
  );
}
