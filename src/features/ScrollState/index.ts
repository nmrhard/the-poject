export { ScrollStateSchema } from './model/types/ScrollStateSchema';

export { getScrollStateByPath } from './model/selectors/scrollState';
export {
  scrollStateReducer,
  scrollStateActions,
} from './model/slices/ScrollStateSlice';
