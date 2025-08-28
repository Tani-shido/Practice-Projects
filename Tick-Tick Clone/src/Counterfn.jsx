import { useState } from 'react'

// function App() {

//   return <div>
//     <b>Counter Function</b>
//     <PostComponent />
//   </div>
// }

// First we define our component function which returns the html (COMPONENT)

function PostComponent () {

  // state (which is dynamic)

  // This is our count state variable and using of useState hook
  const [count, setCount] = useState(0);

  function increaseCount () {
    setCount(count + 1);
  }
  function decreaseCount () {
    setCount(count - 1);
  }
  function resetCount () {
    setCount(0);
  }

  // component (which is constant)
  return <div>
    <h1>{count}</h1>
    <button onClick={increaseCount}>Increase count</button>
    <button onClick={decreaseCount}>Decrease count</button>
    <button onClick={resetCount}>Reset count</button>

  </div>
}

// export default App 
