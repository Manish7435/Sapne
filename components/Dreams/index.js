'use client'

import React, { useEffect, useState } from 'react'
import Container from '../Container'
import { connectToDatabase } from '@/lib/mongodb'

const Dreams =() => {

  const [dreams , setDreams]= useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        await connectToDatabase();
        const res = await fetch('/api/dream/get'); // Relative URL
        const data = await res.json();
        console.log(data.dreams)
        setDreams(data.dreams);
      } catch (error) {
        console.error('Error fetching dreams:', error);
      }
    };

    fetchData();

  }, []);

  useEffect(() => {
    console.log('Updated dreams:', dreams);
  }, [dreams]);
  return (
    <div className='bg-[#0A0B07] h-screen overflow-y-scroll'>
     
        <Container >
            {/* <div className='bg-[#4673CA] h-[600px] w-[1px] mr-8'></div> */}
            {dreams && dreams.map((dream)=>{
              return(
                <div key = {dream._id} className='bg-[#CCC0FB] mt-32 rounded-lg p-4'>
                  <div className='text-xl font-extrabold text-lime-500'> {dream.title}</div>
                  <div className='text-lg font-bold'>{dream.tag}</div>
                  <div dangerouslySetInnerHTML={{ __html: dream.dream }}></div>
                </div>
              )

            })}          
            {/* <div className='bg-[#4673CA] h-[600px] w-[1px] ml-8'></div> */}
        </Container>

    </div>

  )
}
export default Dreams
