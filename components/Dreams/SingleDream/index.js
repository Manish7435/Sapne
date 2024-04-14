'use client'

import React, { useEffect, useState } from 'react'
import { connectToDatabase } from '@/lib/mongodb'
import Container from '@/components/Container'
import { getCookie } from '@/utils/cookies'

const SingleDream = ({endPoint}) => {
  const [dreams , setDreams]= useState([])
  const dreamerId = getCookie('user_id')


  useEffect(() => {
    const fetchData = async () => {
      try {
        await connectToDatabase();
        const res = await fetch(endPoint, {
          headers: {
            'Content-Type': 'application/json',
            'dreamerId': dreamerId
          }
        });
        const data = await res.json();
        setDreams(data.dreams);
      } catch (error) {
        console.error('Error fetching dreams:', error);
      }
    };

    fetchData();

  }, [endPoint,dreamerId]);

  return (
    <div className='bg-[#0A0B07] h-screen overflow-y-scroll'>
        <Container >
          <div className='flex'>
            <div className=' bg-[#4673CA] w-[1px] mr-8 mt-16'></div>
            <div className='flex flex-col'>
              {dreams && dreams.map((dream)=>{
                return(
                  <div key = {dream._id} className='bg-[#373F5B] mt-20 rounded-lg p-4'>
                    <div className='text-xl font-extrabold text-lime-500'> {dream.title}</div>
                    <div className='text-lg font-bold text-white'>{dream.tag}</div>
                    <div className='text-white text-md font-light' dangerouslySetInnerHTML={{ __html: dream.dream }}></div>
                    {/* <div><Image style={{fill: 'red'}} src='/Heart.svg' alt='like' height={20} width={20}/></div> */}
                  </div>
                )
              })}          
            </div>
            <div className='bg-[#4673CA] w-[1px] ml-8 mt-16'></div>
          </div>
        </Container>
    </div>

  )
}
export default SingleDream
