export type IamUser = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  active: boolean;
  twoFactorEnabled: boolean;
  emailVerified: boolean;
};
