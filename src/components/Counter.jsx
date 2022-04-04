import { useState } from "react"

export const Counter = () => {
    const [counter, setCounter] = useState(0)

    const increment = () => {
        setCounter(counter + 1)
    }

    return (
        <div>
            <h2>{counter}</h2>

            <button type="button" onClick={increment}>Increment</button>
        </div>
    )
}