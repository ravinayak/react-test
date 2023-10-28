import { FormikErrors, FormikTouched } from 'formik';

export type IBookCreatePayload = {
  title: string;
};

export type IBook = {
  id: number;
  title: string;
};

export type BookCreateFormikErrorsTouched = {
  errors: FormikErrors<IBookCreatePayload>;
  touched: FormikTouched<IBookCreatePayload>;
};
