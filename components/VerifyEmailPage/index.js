'use client'

import React, { useCallback, useEffect, useState } from 'react'
// import { Link } from 'next/link';

export default function VerifyEmailPage() {
    const [token, setToken] = useState("")
    const [verified, setVerified] = useState(false)
    const [error , setError]= useState(false) 

    const verifyUserEmail = useCallback(async()=>{
        try {
            await fetch('api/user/verifyemail',{
                method: 'POST',
                body:JSON.stringify({ token })
            })
            setVerified(true)
            
        } catch (error) {
            setError(true)
            console.log(error.message)
        }
    },[token]) 

    useEffect(()=>{
        const urlToken = window.location.search.split("=")[1] 
        setToken(urlToken || "")
    },[])


    useEffect(()=>{
        if(token.length>0){
            verifyUserEmail()
        }
    },[token,verifyUserEmail])

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
            <div className='text-2xl text-center text-white'>
                    {error ?(
                            <h2 className='text-2xl'>There is an error</h2>
                    ):
                    <>
                        <div className='flex flex-col items-center justify-center text-center sm:text-xl text-sm '>
                            You have successfully verified your email
                        
                        </div>
                        {/* <Link href={'/login'} className=' border-2 border-white'>
                        LogIn
                    </Link> */}
                    </>
                         }
                    </div>  
    </div>
  )
}
