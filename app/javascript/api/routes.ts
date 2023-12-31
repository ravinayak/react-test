export const DEFAULT_JSON_SERVER_ENDPOINT = 'http://localhost:3004/';
export const IAM_URL = 'https://iam-cn.ingress.ooma.com/';
export const UNSPLASH_URL = 'https://api.unsplash.com/';

export const usersApi = {
  create: 'users',
  get: 'users',
  delete: 'users',
  update: 'users',
  patch: 'users',
};

export const booksApi = {
  create: 'books',
  edit: 'books',
  delete: 'books',
  get: 'books',
};

export const iamApi = {
  login: 'v2/login',
  searchUsers: '/internal/user/search',
};

export const searchPhotosApi = {
  searchPhotos: 'search/photos',
};
