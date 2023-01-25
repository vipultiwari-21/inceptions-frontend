import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import Cookies from 'js-cookie'
import { stateModifier } from '../../features/reducers/slice'


function UserProfile() {
    const dispatch = useDispatch()
   

const handleLogout=()=>{
    Cookies.remove("Token")
    dispatch(stateModifier(false))
}

  return (
    <div>
      <h1>Hello</h1>
      <button className='btn btn-error btn-outline' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default UserProfile
