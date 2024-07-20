import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import {ProfileContext} from './context/Contextprofile'

function App() {
  
  const [count, setCount] = useState(useContext(ProfileContext))
  function handleclick(){
   setCount(count+1);
  }
  return (
    <ProfileContext.Provider value={count}>
      <div>
        <h1>Main  Page count = {count}</h1>
        <button onClick={handleclick}
              className='btn'>Click Me</button>
      </div>
      <Profile/>
      <Login/>
        
    </ProfileContext.Provider>
  )
}

export default App
