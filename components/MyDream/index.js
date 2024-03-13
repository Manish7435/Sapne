'use client'

import React from 'react'
import Container from '../Container'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import dynamic from 'next/dynamic';
import { signOut } from 'next-auth/react';

function MyDream() {

  const handleSignOut = ()=>{
    signOut()
  }

  const DynamicRichTextEditor = typeof window !== 'undefined' ?
  dynamic(() => import('../RichTextEditor')) : null;
  return (
    <div className='bg-[#0A0B07] h-screen'>
        <Container className='bg-[#0A0B07]'>
        {DynamicRichTextEditor && <DynamicRichTextEditor />}
        <div className='bg-red-500 object-contain' onClick={handleSignOut}>
          signOut
        </div>
        </Container>
    </div>
  )
}

export default MyDream