import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  {add} from './components/module'
import { FizzBuzz } from './components/prints'
import { findLargestNumber } from './components/findLargest'
import  {calculateGrade}  from './components/calculateGrade'
import MyComponent  from './components/MyComponent.jsx'

function App() {
  const [count, setCount] = useState(0)
  // console.log(add(4, 55));
  // console.log(FizzBuzz(9));
  // console.log(findLargestNumber(10, 20, 30));
  // console.log(calculateGrade(77));
  return (
    <>
       <MyComponent />
    </>
  )
}

export default App
