import { legacy_createStore as createStore } from 'redux';

const initialState = { counter: 0 };
type stateType = typeof initialState;

const counterReducer = (
  state: stateType = initialState,
  action: any
): stateType => {
  if (action.type === 'INCREMENT') return { counter: state.counter + 1 };
  if (action.type === 'CUSTOM_INCREASE') return { counter: state.counter + action.value };
  if (action.type === 'DECREMENT') return { counter: state.counter - 1 };
  return state;
};

const store = createStore(counterReducer);

export default store;
export type { stateType };
