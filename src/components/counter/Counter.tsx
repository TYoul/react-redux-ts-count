import React from 'react';
import { incrementAction, decrementAction } from '../../redux/counter/actions';
import { useDispatch } from 'react-redux';
import { useSelector } from '../../redux/hooks';

const Counter: React.FC = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);

  const incrementHandler = () => {
    dispatch(incrementAction());
  };

  const decrementHandler = () => {
    dispatch(decrementAction());
  };
  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={e => incrementHandler()}>IncrementCount</button>
      <button onClick={e => decrementHandler()}>DecrementCount</button>
    </div>
  );
};

export default Counter;
