import { FormikErrors, FormikTouched } from 'formik';

export interface IJsonServerBookCreatePayload {
  title: string;
  pages: number;
  tag: string;
}

export interface IJsonServerBookEditPayload extends IJsonServerBookCreatePayload {
  id: number;
}

export type IJSonServerBookPayload = {
  title?: string;
  pages?: number;
  tag?: string;
};

export type IJsonServerBookDeletePayload = {
  id: number;
};

export type IJsonServerBook = IJsonServerBookEditPayload;

export type IJsonServerBookFormikErrorsTouched = {
  errors: FormikErrors<IJsonServerBookCreatePayload>;
  touched: FormikTouched<IJsonServerBookCreatePayload>;
};
