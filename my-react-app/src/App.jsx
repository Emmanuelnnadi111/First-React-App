import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  {add} from './components/module'

function App() {
  const [count, setCount] = useState(0)
  console.log(add(4, 55));
  return (
    <>
        
    </>
  )
}

export default App
