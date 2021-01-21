import { DECREMENT, INCREMENT } from './constants';

interface INCREMENTAction {
  type: typeof INCREMENT;
}

interface DECREMENTAction {
  type: typeof DECREMENT;
}

// 定义 ModifyAction 类型，包含 INCREMENTAction 和 DECREMENTAction
export type ModifyAction = INCREMENTAction | DECREMENTAction;

// 增加 state 次数的 action
export const incrementAction = (): INCREMENTAction => ({
  type: INCREMENT,
});

// 减少 state 次数的 action
export const decrementAction = (): DECREMENTAction => ({
  type: DECREMENT,
});
