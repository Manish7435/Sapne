'use client'

import Link from 'next/link'
import React from 'react'
import { signOut } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import Button from './Button';
import { ModeToggle } from '../Toggle';

export const Navebar = () => {

  const router = usePathname()
  
  const navItems = ["Home","Dreams", "MyDreams"]

  const handleSignOut = ()=>{
    signOut()
  }
  const splittedRouter = router.split('/')
 
  return (
    <div className={`text-[#AEB6D2] bg-inherit w-full text-[14px] px-28 py-6 fixed z-40`}>
      <ul>
        <li className='flex justify-between font-semibold '>
          <div className='flex gap-24'>
            {navItems.map((nav)=>{
              return (
              <Link href= { nav === "Home"? '/':`/${nav.toLowerCase()}`} key={nav}>
                    <div className={(splittedRouter[1] === nav.toLowerCase())? 'text-[#55F85C]':''}  > <Button>{nav}</Button></div>
              </Link>
              )
            })}
          </div>
         
          <div className='flex items-center gap-20'>
            <ModeToggle/>
            <div className='cursor-pointer' onClick={handleSignOut}>
              SignOut
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}
