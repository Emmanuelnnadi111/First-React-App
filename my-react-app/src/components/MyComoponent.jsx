import React, {useEffect, useState} from "react";
const MyComponent = () => {
   const [count, setCount] = useState(0);
    // const incrementCount =  () => {
    // setCount = count + 1;
    // } 
  
useState(() => {
    console.log('Component will be mounted');
    setInterval((setCount) => {
        setCount =  count + 1;
    }, 1000);
    return () => {
        console.log('Component has been mounted');
        clearInterval(count);
    }
},[])
}




export default MyComponent