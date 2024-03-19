'use client'

import Link from 'next/link'
import React from 'react'
import { signOut } from 'next-auth/react';
import { usePathname } from 'next/navigation';

export const Navebar = () => {

  const router = usePathname()

let bgColor = '#FFFFFF'
  if(router !== '/login'){
      bgColor = 'black'
  }
  
  const navItems = ["Home","Dreams", "MyDreams"]

  const handleSignOut = ()=>{
    signOut()
  }
  const splittedRouter = router.split('/')
 
  return (
    <div className={`bg-${bgColor} text-[#4673CA] w-full text-[14px] px-28 py-3 fixed z-40`}>
      <ul>
        <li className='flex justify-between font-semibold '>
          <div className='flex gap-24'>
            {navItems.map((nav)=>{
              return (
              <Link href= { nav === "Home"? '/':`/${nav.toLowerCase()}`} key={nav}>
                    <div className={(splittedRouter[1] === nav.toLowerCase())? 'text-emerald-500':''}  >{nav}</div>
              </Link>
              )
            })}
          </div>
          <div className='flex gap-20'>
            <div className='cursor-pointer'>
                 Profile
            </div>
            <div className='cursor-pointer' onClick={handleSignOut}>
              SignOut
                 {/* <Image src={'/MProfile.svg'} height={30} width={30} alt='profile'/> */}
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}
