'use client'

import React, { useEffect, useState } from 'react'
import { connectToDatabase } from '@/lib/mongodb'
import { getCookie } from '@/utils/cookies'
import  Image  from 'next/image';
import CardSkeleton from '@/components/ui/CardSkeleton';

const SingleDream = ({endPoint}) => {
  const [dreams , setDreams]= useState([])
  const [loading, setLoading] = useState(true)
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
        setLoading(false)
      } catch (error) {
        console.error('Error fetching dreams:', error);
      }
    };

    fetchData();

  }, [endPoint,dreamerId]);

  return (
    <>
    
          <div className=' w-full overflow-y-scroll flex flex-col border-r-2 border-l-2 border-[#4673CA] px-20 pb-20'>
              {loading ? <CardSkeleton/>: dreams.map((dream)=>{
                return(
                  <div key = {dream._id} className='bg-[#373F5B] mt-20 rounded-lg p-4'>
                    
                    <div className='text-xl font-extrabold text-lime-500'> {dream.title}</div>
                    <div className='text-lg font-bold text-white'>{dream.tag}</div>
                    <div className='text-white text-md font-light' dangerouslySetInnerHTML={{ __html: dream.dream }}></div>
                    <div><Image style={{fill: 'red'}} src='/Redheart.svg' alt='like' height={20} width={20}/></div>
                  </div>
                )
              })}          
          </div>
    </>


  )
}
export default SingleDream
