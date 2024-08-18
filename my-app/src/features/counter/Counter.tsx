import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { increment } from './counterSlice';

const Counter: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <button
        className="bg-blue-500 text-white p-2"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <p>{count}</p>
    </div>
  );
};

export default Counter;
