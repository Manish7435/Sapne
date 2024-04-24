import React from 'react'

function ButtonAnimate({children}) {
  return (
    <div className='group overflow-hidden relative text-md cursor-pointer leading-6 '>
        <span className='inline-block transition duration-500 ease-out p-1 group-hover:-translate-y-[120%]'>{children}</span>
        <span className='inline-block transition duration-500 ease-out p-1 absolute left-0 translate-y-[120%] rotate-[20deg] group-hover:translate-y-0 group-hover:rotate-0'>{children}</span>
    </div>
  )
} 

export default ButtonAnimate