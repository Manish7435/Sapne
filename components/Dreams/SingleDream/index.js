'use client'

import React, { useEffect, useState } from 'react'
import { connectToDatabase } from '@/lib/mongodb'
import { getCookie } from '@/utils/cookies'
import  Image  from 'next/image';
import CardSkeleton from '@/components/ui/CardSkeleton';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { tags } from '@/constants';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { formatDate } from '@/lib/utils';


const SingleDream = ({endPoint}) => {
  const [dreams , setDreams]= useState([])
  const [loading, setLoading] = useState(true)
  const dreamerId = getCookie('user_id')
  const dreamerName = getCookie('user_name')


  useEffect(() => {
    const fetchData = async () => {
      try {
        await connectToDatabase();
        const res = await fetch(endPoint, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
            'dreamerId': dreamerId,
            'dreamerName': dreamerName
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

  }, [endPoint,dreamerId,dreamerName]);

  return (
    <>
          <div className=' sm:w-full w-auto overflow-y-scroll flex flex-col border-r-2 border-l-2 dark:border-[#4673CA]  sm:px-20 p-4 sm:pb-20 '>
            {loading ? <CardSkeleton/>: dreams.length ? dreams.map((dream)=>{
              return(
                      <Card key={dream._id} className="sm:mt-8 mt-12">
                        <CardHeader>
                          <CardTitle>
                            <div  className="flex items-center ">
                                <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.pn" />
                                    <AvatarFallback>{dream.dreamerName.slice(0,2).toUpperCase()}</AvatarFallback>
                                </Avatar>
                                <div className='ml-2'>
                                  {dream.dreamerName.slice(0,1).toUpperCase() + dream.dreamerName.slice(1)}
                                </div>
                            </div>
                            <div className='text-xl font-extrabold text-lime-500'> {dream.title}</div>
                            {tags.filter((item)=> item.tag===dream.tag).map((item)=>{
                              return(
                                <div
                                    key={item.tag}
                                    style={{
                                      background: item.tag === dream.tag ? item.color : '',
                                    }}
                                    className={`sm:p-4 p-2 h-[24px] sm:text-base text-sm mt-1 flex items-center justify-center rounded-md w-min`}
                                  >
                                    {item.tag}
                                </div>
                              )
                            })}
                          </CardTitle>
                          <CardDescription ></CardDescription>
                        </CardHeader>
                        <CardContent className='text-md font-light' dangerouslySetInnerHTML={{ __html: dream.dream }}>
                          
                        </CardContent>
                        <CardFooter className="flex items-center justify-between">
                          <Image src='/Redheart.svg' alt='like' height={20} width={20}/>
                          <div className='text-[12px]'>{formatDate(dream.createdAt)}</div>
                        </CardFooter>
                      </Card>
            )
          } ) : <div className='flex items-center justify-center'> NOTHING TO SHOW </div>

          }          
      </div>    
    </>


  )
}
export default SingleDream
