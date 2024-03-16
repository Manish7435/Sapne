'use client'

// import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { signOut } from 'next-auth/react';

export const Navebar = () => {

  const navItems = ["Home","Dreams", "MyDreams"]

  const handleSignOut = ()=>{
    signOut()
  }
 
  return (
    <div className={` text-[#4673CA] w-full text-[14px] px-28 py-3 fixed`}>
      <ul>
        <li className='flex justify-between font-semibold '>
          <div className='flex gap-24'>
            {navItems.map((nav)=>{
              return (
              <Link href= { nav === "Home"? '/':`/${nav.toLowerCase()}`} key={nav}>
                    <div className='cursor-pointer'>{nav}</div>
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
