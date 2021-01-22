import { createStore } from 'redux';
import counterReducer from './counter/reducer';

const store = createStore(counterReducer);

export type RootState = ReturnType<typeof store.getState>;

export default store;
