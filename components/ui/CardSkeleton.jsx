import React from 'react'
import { Skeleton } from './skeleton'

function CardSkeleton() {
  return (
    'abc'.split('').map((i)=>{
      return(
        <div key={i} className='mt-20 rounded-lg p-4 border-slate-300 border-[1px]'>         
           <Skeleton className='w-32 h-[24px] '/>          
           <Skeleton className='w-32 h-[24px] mt-4'/>
           <Skeleton className='w-full h-[24px] mt-4'/>
           <Skeleton className='w-full h-[24px] mt-4'/>
           <Skeleton className='w-64 h-[24px] mt-4'/>
           <Skeleton className="h-[30px] w-[30px] rounded-full mt-4"/>
       </div> 
      )
    })
       
  )
}

export default CardSkeleton
