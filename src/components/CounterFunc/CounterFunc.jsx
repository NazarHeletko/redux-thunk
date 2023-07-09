import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decreaseFuncCounterAction, increaseFuncCounterAction } from "../../store/reducers/counterFuncReducer";

function CounterFunc() {
  const counter = useSelector((store) => store.counterFunc.counterFunc);
  const dispatch = useDispatch()
  return (
    <div className="item">
      <h4>Count: {counter}</h4>
      <button onClick={()=>dispatch(increaseFuncCounterAction())}>increase</button>
      <button onClick={()=>dispatch(decreaseFuncCounterAction())}>decrease</button>
    </div>
  );
}

export default CounterFunc;
