import React, { useContext, useState } from 'react'
import { ProfileContext } from '../context/Contextprofile'


function Profile() {
  var count = useContext(ProfileContext)
  
  return (
    <div>
              <h1>Profile  Page count = {count}</h1>
          

             

    </div>
  )
}

export default Profile