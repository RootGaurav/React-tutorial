import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] =useState(5) 

  //let counter=5;
  const addValue=()=>{
    setCounter(counter+1)
    console.log("value added",counter);
  }

  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter Value : {counter}</h2>
      <button
      onClick={addValue}
      >Add value</button>
      <br />
      <button>remove Value {counter}</button>
      <p>footer :{counter} </p>
    </>
  )
}

export default App
