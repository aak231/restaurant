import React, { useState, useReducer } from 'react'
import './style.css'

const reducer = (state, action) => {
    if(action.type === "INCREMENT") {
        state = state+1
    }
    else{
        state = state>0 ? state - 1: 0
    }
    return state
}

const UseReducer = () => {

    const initialData = 10
    // const [myNum, setMyNum] = useState(initialData)

    const [state, dispatch] = useReducer(reducer, initialData)


    
    return (
        <>
            <div className="center_div">
                <p>{state}</p>
                <div className="button2" onClick={() => dispatch({type: "INCREMENT"})}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    INCREMENT
                </div>
                <div className="button2" onClick={()=> dispatch({type: "DECREMENT"})}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    DECREMENT
                </div>
            </div>
        </>
    )
}

export default UseReducer
