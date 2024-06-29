import { useEffect, useState } from "react"

export function Counter({ initialValue = 0 }){
    const [counter, setCounter] = useState(initialValue)

    useEffect(()=>{
        console.log(` the value of the caounter is ${counter}`)
    }, [counter])

    function handleCaunterIncrement(){
     setCounter((c) => c + 1)
    }
    function handleCaunterDecrement(){
    setCounter((c) => c - 1)
    }
    function handleCounterReset(){
    setCounter(initialValue)
    }

    return (
    <div>
     <h2> I have counted to {counter} </h2>
     <button onClick = {handleCaunterIncrement}>Increment</button>
     <button onClick = {handleCaunterDecrement}>Decrement</button>
     <button onClick = {handleCounterReset}> Reset </button>
    </div>
    )
}