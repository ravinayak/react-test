import { rest } from 'msw';
import { USER_JSON_API_ENDPOINT, USERS_JSON } from '../../shared/Constants';

export const handlers = [
  rest.get(USER_JSON_API_ENDPOINT, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(USERS_JSON));
  }),
];
