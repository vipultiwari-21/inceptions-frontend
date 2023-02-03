import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'
import { Container } from "@mui/system";
import Background from '../custom_styling/Background';
import Logo from "../../assets/exceptions/png/E.png";
import Exceptions from "../../assets/svg/male.svg";

function EmailConfirmation() {

    const [params]=useSearchParams()
    const jwtToken=params.get("jwtToken")
    const [result,setResult]=useState('')
    const [loading,setLoading]=useState('')


    const handleVerification=async()=>{
      setLoading(true)
        console.log(jwtToken)
        try{
            const {data}=await axios.get(`${import.meta.env.VITE_API_ENDPOINT}auth/verify-email?jwtToken=${jwtToken}`)
           setResult(data.message)
    
        }catch(err){
            setResult(err.response.data.error)
        }
        setLoading(false)
    }

 

  return (


    <Container maxWidth="xl">
    <Background />
    <section className="h-screen gradient-form  md:h-screen login-container text-center">
      <div className="container py-12 px-6 h-full">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div className="xl:w-10/12">
            <div
              className="block text-neutral-content login-container-part1
      h-full w-full  rounded-md bg-white-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0
       shadow-lg rounded-lg
       border-2 border-sky-500
       "
            >
              <div className="lg:flex lg:flex-wrap g-0">
                <div className="lg:w-6/12 px-4 md:px-0">
                  <div className="md:p-12 md:mx-6">
                    <div className="text-center ">
                      <img className="mx-auto w-48" src={Logo} alt="logo" />
                      <h4
                        className="text-xl font-semibold  mb-3 pb-1 text-primary"
                        style={{ fontFamily: "Orbitron" }}
                      >
                        EXCEPTIONS - 2023
                      </h4>
                    </div>
                   
                          <div className="text-center pt-1 mb-6 pb-1">
                            <button onClick={handleVerification}
                              className={`px-6 py-2.5 text-neutral btn btn-outline btn-warning
                              text-neutral font-bold btn-register
                             text-sm leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg 
                             focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition
                              duration-150 ease-in-out w-72  ml-3 ${
                                loading ? "loading" : null
                              } `}
                              type="submit"
                              data-mdb-ripple="true"
                              data-mdb-ripple-color="light"
                            >
                              CONFIRM YOUR EMAIL 
                            </button>
              
                          </div>

                          <div className="">
                          <p className="text-neutral-content font-bold   text-center my-3">
                             {result!='' && result=='Token invalid' ? 'This token is expired!!' : result!='' && result!='Token invalid'? "Email verified! try logging in now" : null}
                            </p>

                            <p className="text-primary font-bold  underline text-center mt-3">
                              {" "}
                              <Link to="/">Back Home</Link>
                            </p>
                          </div>
                      
                  </div>
                </div>
                <div
                  className="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none
            justify-center align-center
            login-container-part2 
           
           "
                  style={{
                    background: "linear-gradient(to right, #8360c3, #2ebf91)",
                  }}
                >
                  <img
                    src={Exceptions}
                    style={{ width: "500px", height: "500px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Container>

    // <div>
    //   <button className='btn btn-outline btn-warning' onClick={handleVerification}>Verify Email</button>
    //  
    // </div>
  )
}

export default EmailConfirmation
