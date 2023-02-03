import React,{useState,useEffect} from 'react'
import { useDispatch } from 'react-redux'
import Cookies from 'js-cookie'
import { stateModifier } from '../../features/reducers/slice'
import axios from '../../features/Interceptors/apiInterceptor'




function UserProfile() {
    const dispatch = useDispatch()
    const [userName,setUsername]=useState('')
    const [teamName,setTeamName]=useState('')


    const getUser=async()=>{

      const {data} = await axios.get(`${import.meta.env.VITE_API_ENDPOINT}profile/me`);
      
      setUsername(data.firstName);
      console.log(data.firstName)


    }


    const postEvent=async()=>{

    

      const {data}=await axios.post(`${import.meta.env.VITE_API_ENDPOINT}team/add`,{
        name:"randomsdfsdedaskjdasdjkerrrrr",
        isGCConsidered:true
      })
      console.log(data)

    }


    useEffect(() => {
  
      getUser()
     // postEvent()

    }, [])



    const saveTeam=async()=>{
      const {data}=await axios.post(`${import.meta.env.VITE_API_ENDPOINT}team/add`,{
        name:teamName,
        isGCConsidered:true
      })
      console.log(data)

    }
    


const handleLogout=()=>{
    Cookies.remove("Token")
    dispatch(stateModifier(false))
}

  return (
    <div>
      <h1>Hello {userName ? userName :  null}</h1>

      <input type="text" placeholder='Enter team name' value={teamName} onChange={(e)=>setTeamName(e.target.value)} />

      <br /> <br />
    <button className='btn btn-outline btn-warning' onClick={saveTeam}>Save team name</button>
      <button className='btn btn-error btn-outline' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default UserProfile
