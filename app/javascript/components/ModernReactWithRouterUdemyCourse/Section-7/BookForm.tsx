import React from 'react';
import { Formik, Form, ErrorMessage, Field, FormikValues } from 'formik';
import {
  IJsonServerBook,
  IJsonServerBookEditPayload,
  IJsonServerBookFormikErrorsTouched,
  IJsonServerBookCreatePayload,
} from '@app/types/jsonServerBook';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import * as Yup from 'yup';

interface IProps {
  handleEdit?: ({ id, title, pages, tag }: IJsonServerBookEditPayload) => Promise<void>;
  handleCreate?: ({ title, pages, tag }: IJsonServerBookCreatePayload) => Promise<void>;
  buttonName: string;
  setBookEdit?: (arg: boolean) => void;
  book?: IJsonServerBook;
}
export function BookForm({ handleEdit, handleCreate, buttonName, setBookEdit, book }: IProps) {
  const initialValues = {
    title: setBookEdit ? book.title : '',
    pages: setBookEdit ? book.pages : '',
    tag: setBookEdit ? book.tag : '',
  };

  const validationSchema = Yup.object({
    title: Yup.string()
      .required('Please enter a book title')
      .max(30, 'Please enter less than 20 characters'),
    pages: Yup.number()
      .required('Please enter number of pages')
      .max(500, 'Please enter less than 500 pages'),
    tag: Yup.string()
      .required('Please enter tag for book')
      .max(20, 'Please enter less than 10 characters'),
  });

  const bookEdit = ({ id, title, pages, tag }: IJsonServerBookEditPayload): void => {
    setBookEdit(false);
    handleEdit({ id, title, pages, tag });
  };

  const handleFormSubmit = (values: FormikValues, { resetForm }) => {
    const bookTitle = values.title;
    const bookPages = values.pages;
    const bookTag = values.tag;
    resetForm({ value: { title: '', pages: '', tag: '' } });
    if (setBookEdit) {
      return bookEdit({ title: bookTitle, pages: bookPages, tag: bookTag, id: book.id });
    }
    return handleCreate({ title: bookTitle, pages: bookPages, tag: bookTag });
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleFormSubmit}
      validationSchema={validationSchema}
    >
      {({ errors, touched }: IJsonServerBookFormikErrorsTouched) => (
        <Form>
          <CardContent className='flex-display column-flex-direction'>
            <Stack spacing={3}>
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
              <Field
                as={TextField}
                fullWidth
                id='new-book-pages'
                name='pages'
                inputProps={{
                  'data-test-id': 'test-new-book-pages',
                }}
                label='Book Pages'
                helperText={<ErrorMessage name='pages' />}
                error={!!touched.pages && errors.pages != ''}
              />
              <Field
                as={TextField}
                fullWidth
                id='new-book-tag'
                name='tag'
                inputProps={{
                  'data-test-id': 'test-new-book-tag',
                }}
                label='Book Tag'
                helperText={<ErrorMessage name='tag' />}
                error={!!touched.tag && errors.tag != ''}
              />
            </Stack>
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
  handleEdit: null,
  handleCreate: null,
};
