'use client'

import React, { useEffect } from 'react'
import Container from '../Container'
import dynamic from 'next/dynamic';
import { useSession } from 'next-auth/react';
import { connectToDatabase } from '@/lib/mongodb';
import SingleDream from '../Dreams/SingleDream';

function MyDream() {
  const {data: session} = useSession()

  const DynamicRichTextEditor = typeof window !== 'undefined' ?
  dynamic(() => import('../RichTextEditor')) : null;
  return (
    <div className='bg-[#0A0B07] h-screen'>
        <Container>
            {DynamicRichTextEditor && <DynamicRichTextEditor />}
            <SingleDream endPoint={'/api/dream/getByUserId'}/>
        </Container>
    </div>
  )
}

export default MyDream