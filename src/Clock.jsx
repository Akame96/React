import { useEffect } from "react"
import { useState } from "react"

export function Clock(){
    const [data , setDate] = useState(new Date())

   useEffect(()=>{
    console.log('Setting up clock interval')
    const intervalId = setInterval(()=>{
        console.log('Updating date...')
        setDate(new Date())
    }, 1000)
    return () =>{
        console.log('Clearing interval..')
        clearInterval(intervalId)
    }
   },[])

    return <div><h2>Current time:{data.toLocaleTimeString()}</h2></div>
    
}