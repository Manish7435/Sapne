import React from 'react'
import Image from "next/legacy/image"
import Link from 'next/link'


export const Hero = () => {
  return (
    <div className="bg-[#0A0B07] h-screen  text-white flex p-28">
        <div>
            <div className="font-extrabold text-[100px] font-sans w-[500px] bg-clip-text text-transparent bg-gradient-to-t from-[#30A0F1] leading-tight to-[#7EF6BC]">
            WHAT DID YOU SEE?
            </div>
            <div className='bg-white text-black text-[12px] px-5 py-2 w-fit rounded-3xl flex items-center mt-10 cursor-pointer'>
                <Link href={'/login'}>
                     Let&apos;s keep track of  our dreams
                </Link>
                <Image src="/Rightarrow.svg" className='ml-[20px]' width={30} height={15} alt="Icon" />
            </div>
        </div>
        
        <div className="grid grid-cols-3 w-[500px] ml-32 gap-3 ">
            <div className="relative overflow-hidden row-span-3 bg-white p-3 rounded-md">
                <Image
                        src="https://media2.giphy.com/media/cLkg857UN0y4ISQoTT/giphy.webp?cid=ecf05e4750f84pd6ml2j286z3xnlkn0n9xi6z80dvojkhqia&ep=v1_gifs_search&rid=giphy.webp&ct=g"
                        layout="fill"
                        objectFit="cover"
                        alt="Hero Pattern"
                    />
            </div>
            <div className="row-span-2 relative overflow-hidden bg-white p-3 rounded-md">
                <Image
                        src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGNuOTk2YmYzaHRwc3l6Zzc4YzR5b2MzcjR4MWs0cWI2eTJxOGxodCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/mfQe8Uw0ye9lm/giphy.gif"
                        layout="fill"
                        objectFit="cover"
                        alt="Hero Pattern"
                    /></div>
            <div className="relative bg-white p-3 overflow-hidden rounded-md">
                    <Image
                        src="https://i.pinimg.com/originals/0b/72/33/0b72338bf1a1a0e0bbd583148a2d2ad5.gif"
                        layout="fill"
                        objectFit="cover"
                        alt="Hero Pattern"
                    />
                </div>
            <div className="relative overflow-hidden bg-white p-3 rounded-md">
                <Image
                        src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2J1b3gzdzdtaHAxb2g5ODdtdmpzaHNra2Jtbm1kM2R4dnphd3ZwaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/28aGE5xerXkbK/giphy.gif"
                        layout="fill"
                        objectFit="cover"
                        alt="Hero Pattern"
                    /></div>
            <div className="relative overflow-hidden col-span-2  bg-white p-3 rounded-md">
                <Image
                        src="https://media0.giphy.com/media/lSPlEENLTonvclZP44/giphy.gif"
                        layout="fill"
                        objectFit="cover"
                        alt="Hero Pattern"
                    /></div>
            <div className="relative overflow-hidden bg-white p-3 rounded-md">
            <Image
                        src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWp4MGtsYzgydWplMnJ2Z3Jla2thczd1b3Bic2pxZzYwNGhkZzQzMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/YqGeOQ0u6hB5u/giphy.gif"
                        layout="fill"
                        objectFit="cover"
                        alt="Hero Pattern"
                    />
            </div>
            <div className="relative overflow-hidden bg-white p-3 rounded-md">
            <Image
                        src="https://media3.giphy.com/media/3o7aCQFv0s5231IvWE/200.webp?cid=ecf05e474wblfvvudjbf9zpqyof5rm8bhvrtom02w0goaqv1&ep=v1_gifs_search&rid=200.webp&ct=g"
                        layout="fill"
                        objectFit="cover"
                        alt="Hero Pattern"
                    />
            </div>
            <div className="relative overflow-hidden bg-white p-3 rounded-md">
            <Image
                        src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3VzbHNpeHh2YjdrZWxtMHlxODZpdWx2b241ZmRpenRoMTgxMDQwdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/yvorbGKy6Lg8OIa1V0/giphy.gif"
                        layout="fill"
                        objectFit="cover"
                        alt="Hero Pattern"
                    />
            </div>
        </div>
    </div>
  )
}
