import { useReducer } from "react";

type CounterState = {
  count: number;
};

type ActionType = {
  type: string;
  payload: number;
};

const initialState = {
  count: 0,
};

function reducer(state: CounterState, action: ActionType) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    default:
      return state;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement", payload: 25 });
        }}
      >
        Decrement
      </button>
      <p>Count: {state.count}</p>
    </>
  );
};

export default Counter;
