import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DECREASE, INCREASE, MODAL_OPEN, RESET } from "./redux/action";

function Counter(props) {
  const dispatch = useDispatch()

  const state = useSelector(state=> state.CountState)

  return <div className="container">
    <h1>counter</h1>
    <p className="counter">{state}</p>
    <div className="buttons">
    <button type="button" className="btn" onClick={()=>dispatch({type:DECREASE})}>
      decrease
    </button>
    <button type="button" className="btn" onClick={()=>{dispatch({type:RESET});dispatch({type:MODAL_OPEN,payload:{name:"warning",text :"you clean the conter"}})}}>
      reset
    </button>
    <button type="button" className="btn" onClick={()=>dispatch({type:INCREASE})}>
      increase
    </button>
    </div>
  </div>;
}

export default Counter;
