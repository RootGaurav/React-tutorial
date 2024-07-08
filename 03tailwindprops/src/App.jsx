import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./components/card"

function App() {
  const [count, setCount] = useState(0)
  let myobj={
    username: "gaurav",
    age:21
  }
  let newArr=[1,2,3,4]

  return (
    <>
     <h1 className='bg-green-400 p-4 rounded-xl'>Tailwind test</h1>
     <Card username="chaiorcode" someObje={myobj} btnText="click me"/>
     <Card username="chaiorcode2" someObje={newArr} btnText="Visit me"/>
     
    </>
  )
}

export default App
