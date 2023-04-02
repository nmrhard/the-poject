import { StateSchema } from 'app/provider/StoreProvider';

export const getLoginUsername = (state: StateSchema) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  state?.loginForm?.username || '';
