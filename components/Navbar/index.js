'use client'

import Link from 'next/link'
import React from 'react'
import { signOut } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import ButtonAnimate from './Button';
import { ModeToggle } from '../Toggle';
import { Button } from "@/components/ui/button"
import { useSession } from 'next-auth/react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { AlignLeft } from 'lucide-react';

export const Navebar = () => {

  const {data} = useSession()

  const router = usePathname()
  
  const navItems = ["Home","Dreams", "MyDreams"]

  const handleSignOut = ()=>{
    signOut()
  }
  const splittedRouter = router.split('/')
 
  return (
<>
      <div className={`text-[#AEB6D2] bg-inherit w-full text-[14px] sm:px-28 sm:py-6 p-4 fixed z-40 `}>
        <ul className='sm:block hidden'>
          <li className='flex justify-between font-semibold '>
            <div className='flex gap-24'>
              {navItems.map((nav)=>{
                return (
                <Link href= { nav === "Home"? '/':`/${nav.toLowerCase()}`} key={nav}>
                      <div className={(splittedRouter[1] === nav.toLowerCase())? 'text-[#55F85C]':''}  > <ButtonAnimate>{nav}</ButtonAnimate></div>
                </Link>
                )
              })}
            </div>
          
            <div className='flex items-center gap-20'>
              <ModeToggle/>
              {
                data?.token ?
                  <div className='cursor-pointer' onClick={handleSignOut}>
                    SignOut
                  </div> :(splittedRouter[1]!== 'login'? <div className='cursor-pointer'>
                        <Link href={'/login'}>
                            SignIn
                        </Link>
                  </div>: "")
              }
            </div>
          </li>
        </ul>
        <div className='sm:hidden flex justify-between'>
          <DropdownMenu >
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <AlignLeft className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              
            {navItems.map((nav)=>{
                  return (
                    <DropdownMenuItem key={nav}>
                    <Link href= { nav === "Home"? '/':`/${nav.toLowerCase()}`} >
                          <div className={(splittedRouter[1] === nav.toLowerCase())? 'text-[#55F85C]':''}  > {nav}</div>
                    </Link>
                  </DropdownMenuItem>
                  )
                })}
              <DropdownMenuItem onClick={handleSignOut}>
              {
                data?.token ?
                  <div className='cursor-pointer' onClick={handleSignOut}>
                    SignOut
                  </div> :(splittedRouter[1]!== 'login' ? <div className='cursor-pointer'>
                        <Link href={'/login'}>
                            SignIn
                        </Link>
                  </div>: "")
              }
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <ModeToggle/>
        </div>
      </div>
      
</>
  )
}
