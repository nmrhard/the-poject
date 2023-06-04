/* eslint-disable implicit-arrow-linebreak */
import { StateSchema } from 'app/provider/StoreProvider/config/StateSchema';

export const getAddCommentFormText = (state: StateSchema) =>
  state.addCommentForm?.text;
export const getAddCommentFormError = (state: StateSchema) =>
  state.addCommentForm?.error;
