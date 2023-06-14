import React from 'react';
import { stateType } from '../store/store';
import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../store/store';

const Counter = () => {
  const dispatch = useDispatch();
  const counter: number = useSelector<stateType, number>(
    (state) => state.counter
  );
  const showCounter: boolean = useSelector<stateType, boolean>(
    (state) => state.showCounter
  );

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const customIncreaseHandler = (value: number) => {
    dispatch(counterActions.customIncrease(value));
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={() => customIncreaseHandler(5)}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// type CounterProps = {
//   counter: number;
//   increment: () => void;
//   decrement: () => void;
// };

// type IncrementAction = {
//   type: 'INCREMENT';
// };

// type DecrementAction = {
//   type: 'DECREMENT';
// };

// type CounterAction = IncrementAction | DecrementAction;

// class Counter extends React.Component<CounterProps> {
//   incrementHandler() {
//     this.props.increment();
//   }
//   decrementHandler() {
//     this.props.decrement();
//   }
//   toggleCounterHandler() {}
//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state: stateType) => ({ counter: state.counter });
// const mapDispatchToProps = (dispatch: Dispatch<CounterAction>) => ({
//   increment: () => dispatch({ type: 'INCREMENT' }),
//   decrement: () => dispatch({ type: 'DECREMENT' }),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
