import React, { useContext, useState } from 'react'
import { ProfileContext } from '../context/Contextprofile'


function Login() {
  const count = useContext(ProfileContext)
 
  return (
   <>
   <div>
   <h1>Login  Page count = {count}</h1>
  

   </div>
   </>
  )
}

export default Login