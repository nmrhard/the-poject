/* eslint-disable implicit-arrow-linebreak */
import * as React from 'react';
import { AddCommentFormProps } from './AddCommentForm';

export const AddCommentFormAsync = React.lazy<React.FC<AddCommentFormProps>>(
  () => import('./AddCommentForm')
);
