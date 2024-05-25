import React, {useEffect, useState} from "react";


function MyComponent () {
   const [count, setCount] = useState(0);
    const incrementCount =  () => {
    setCount(count + 1);
    } 
    const decrementCount =  () => {
    setCount(count - 1);
    } 

useEffect(() => {
    console.log('Component did mounted');
    const timer = setInterval(() => setCount ((previousCount) => previousCount + 1), 1000);
    return () => {
        console.log("Component will be unmounted")
        clearInterval(timer);
    }
},[])

    return (
        <div>
            <h1>Count: {count}</h1>
            <button  onClick={incrementCount}>Increment</button>
            <button onClick={decrementCount}>Decrement</button>
        </div>
    );

}

export default MyComponent