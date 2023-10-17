import React from 'react';
import { ErrorMessage, Form, Formik, Field, FormikValues } from 'formik';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { SearchImagesFormikErrorsTouched } from '@app/types/searchImages';

interface IProps {
  handleClick: (term: string) => void;
}
export function SearchBar({ handleClick }: IProps) {
  const handleSubmit = (values: FormikValues) => {
    handleClick(values.searchTerm);
  };

  return (
    <Card component='main'>
      <CardHeader title='Search for Images' />
      <Formik
        initialValues={{
          searchTerm: '',
        }}
        onSubmit={handleSubmit}
      >
        {({ touched, errors }: SearchImagesFormikErrorsTouched) => (
          <Form>
            <CardContent>
              <Field
                autoFocus
                as={TextField}
                id='searchTerm'
                name='searchTerm'
                inputProps={{ 'data-test-id': 'search-bar' }}
                label='Enter Search Term :: '
                helperText={<ErrorMessage name='searchTerm' />}
                error={!!touched.searchTerm && errors.searchTerm}
              />
            </CardContent>
            <CardActions>
              <Button
                color='primary'
                variant='contained'
                type='submit'
                data-test-id='search-bar-submit-button'
              >
                Search
              </Button>
            </CardActions>
          </Form>
        )}
      </Formik>
    </Card>
  );
}
