import { useEffect, useState } from "react"

function ClickCounter({counterChange}){
    const [count, setCount] = useState(0)
    const increment = ()=>{
        setCount(count + 1)
    }
    useEffect(()=>{
        counterChange(count)

    },[count])
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>click</button>
        </div>
    )
}
export default ClickCounter