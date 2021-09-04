import React, {useState} from "react"
import "./App.css"
export default function  App(){
    const [state, setState] = useState({count:1, incStatus:false, decStatus: false})
    function Increment(){
        console.log("inc called")
         setState({
             ...state,
             count:state.count+1
         })
    }
    function Decrement(){
        console.log("dec called")
        setState({
            ...state,
            count:state.count - 1
        })
    }
    return (
        <>
          <div className="btn-group">
            <button className="dec" disabled={state.count <= 1} onClick={Decrement}>-</button>
            <div className="val">{state.count}</div>
            <button className="box inc" disabled = {state.count >= 1000} onClick ={Increment}>+</button>
          </div>
        </>
    )
}