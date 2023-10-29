import React from 'react';
import { Formik, Form, ErrorMessage, Field, FormikValues } from 'formik';
import { BookCreateFormikErrorsTouched, IBook } from '@app/types/bookCreate';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import * as Yup from 'yup';

interface IProps {
  handleSubmit: (arg: string | number, id?: number) => void;
  buttonName: string;
  setBookEdit?: (arg: boolean) => void;
  book?: IBook;
}
export function BookForm({ handleSubmit, buttonName, setBookEdit, book }: IProps) {
  const initialValues = { title: setBookEdit ? book.title : '' };

  const validationSchema = Yup.object({
    title: Yup.string().required('Please enter a book title').max(20),
  });

  const bookEdit = (title: string): void => {
    setBookEdit(false);
    handleSubmit(title, book.id);
  };

  const handleFormSubmit = (values: FormikValues, { resetForm }) => {
    const bookTitle = values.title;
    resetForm({ value: { title: '' } });
    if (setBookEdit) {
      return bookEdit(bookTitle);
    }
    return handleSubmit(bookTitle);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleFormSubmit}
      validationSchema={validationSchema}
    >
      {({ errors, touched }: BookCreateFormikErrorsTouched) => (
        <Form>
          <CardContent className='flex-display'>
            <Field
              autoFocus
              as={TextField}
              fullWidth
              id='new-book-title'
              name='title'
              inputProps={{
                'data-test-id': 'test-new-book-title',
              }}
              label='Book Title'
              helperText={<ErrorMessage name='title' />}
              error={!!touched.title && errors.title != ''}
            />
          </CardContent>
          <CardActions className='flex-display new-book-button'>
            <Button
              color='primary'
              variant='outlined'
              type='submit'
              data-test-id='test-new-book-button'
              id='new-book-submit'
            >
              {buttonName}
            </Button>
          </CardActions>
        </Form>
      )}
    </Formik>
  );
}

BookForm.defaultProps = {
  setBookEdit: null,
  book: null,
};
