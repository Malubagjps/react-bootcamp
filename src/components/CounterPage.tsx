import { useState } from 'react'

const CounterPage = () => {
    const [count, setCount] = useState(0)

    const add = () => {
        setCount(count + 1);
    }
    const substract = () => {
        setCount(count - 1);
    }
    
  return (
    <div>
        <p>Count Values: {count}</p>
        <div style={{display: 'flex', justifyContent: 'space-evenly', width: '300px'}}>
            <button onClick={substract} style={{backgroundColor: "red", color: "white"}}>-</button>
            <button onClick={add} style={{backgroundColor: "green", color: "white"}}>+</button>
        </div>
    </div>
  )
}

export default CounterPage