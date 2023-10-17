import { FormikErrors, FormikTouched } from 'formik';

export type ISearchImagePayload = {
  searchTerm: string;
};
export type SearchImagesFormikErrorsTouched = {
  errors: FormikErrors<ISearchImagePayload>;
  touched: FormikTouched<ISearchImagePayload>;
};
