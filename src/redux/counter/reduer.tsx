import { INCREMENT, DECREMENT } from './constants';
import { ModifyAction } from './actions';

interface StateStore {
  counter: number;
}

const defaultState: StateStore = {
  counter: 0,
};

const counterReducer = (state = defaultState, action: ModifyAction): StateStore => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};

export default counterReducer;
