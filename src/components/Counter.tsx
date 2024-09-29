import { useState } from "react"

function Counter() {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount(prev => prev += 1)}>Count up</button>
    </>
  )
}

export default Counter