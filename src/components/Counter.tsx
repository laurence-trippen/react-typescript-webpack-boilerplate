import { useState } from "react"

function Counter() {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="counter">
      <p>{count}</p>
      <button className="counter__button" onClick={() => setCount(prev => prev += 1)}>Count up</button>
    </div>
  );
}

export default Counter