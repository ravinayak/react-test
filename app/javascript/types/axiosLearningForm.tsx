import { FormikErrors, FormikTouched } from 'formik';
import { ICreateUserTypiCodePayload } from './UserTypiCode';

export type FormikErrorsTouched = {
  errors: FormikErrors<ICreateUserTypiCodePayload>;
  touched: FormikTouched<ICreateUserTypiCodePayload>;
};
