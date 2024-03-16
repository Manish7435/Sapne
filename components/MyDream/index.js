'use client'

import React from 'react'
import Container from '../Container'
import dynamic from 'next/dynamic';

function MyDream() {

  const DynamicRichTextEditor = typeof window !== 'undefined' ?
  dynamic(() => import('../RichTextEditor')) : null;
  return (
    <div className='bg-[#0A0B07] h-screen'>
        <Container className='bg-[#0A0B07]'>
        {DynamicRichTextEditor && <DynamicRichTextEditor />}
        </Container>
    </div>
  )
}

export default MyDream