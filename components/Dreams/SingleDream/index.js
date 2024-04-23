"use client"

import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import { connectToDatabase } from '@/lib/mongodb';
import { getCookie } from '@/utils/cookies';
import Image from 'next/image';
import CardSkeleton from '@/components/ui/CardSkeleton';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const SingleDream = ({ endPoint }) => {
  const [loading, setLoading] = useState(true);
  const dreamerId = getCookie('user_id');
  const dreamerName = getCookie('user_name');

  const { data: dreams, error } = useSWR(endPoint, async (url) => {
    await connectToDatabase();
    const res = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'dreamerId': dreamerId,
        'dreamerName': dreamerName
      }
    });
    const data = await res.json();
    return data.dreams;
  });

  useEffect(() => {
    setLoading(!dreams && !error);
  }, [dreams, error]);

  if (error) {
    console.error('Error fetching dreams:', error);
    return <div>Error fetching dreams</div>;
  }

  return (
    <div className="w-full overflow-y-scroll flex flex-col border-r-2 border-l-2 border-[#4673CA] px-20 pb-20">
      {loading ? (
        <CardSkeleton />
      ) : dreams && dreams.length ? (
        dreams.map((dream) => (
          <div key={dream._id} className="bg-[#373F5B] mt-20 rounded-lg p-4">
            <div className="flex items-center">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.pn" />
                <AvatarFallback>{dream.dreamerName.slice(0, 2).toUpperCase()}</AvatarFallback>
              </Avatar>
              <div className="ml-2">{dream.dreamerName.slice(0, 1).toUpperCase() + dream.dreamerName.slice(1)}</div>
            </div>
            <div className="text-xl font-extrabold text-lime-500">{dream.title}</div>
            <div className="text-lg font-bold text-white">{dream.tag}</div>
            <div className="text-md font-light" dangerouslySetInnerHTML={{ __html: dream.dream }}></div>
            <div>
              <Image style={{ fill: 'red' }} src="/Redheart.svg" alt="like" height={20} width={20} />
            </div>
          </div>
        ))
      ) : (
        <div className="flex items-center justify-center">NOTHING TO SHOW</div>
      )}
    </div>
  );
};

export default SingleDream;
