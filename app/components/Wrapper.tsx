import React from 'react'
import Navbar from './Navbar'

type WrapperProps = {
    children: React.ReactNode;
}

const Wrapper = ({children}:WrapperProps) => {
  return (
    <div className='flex w-full flex-col justify-center'>
        <div className='w-full'>
            <Navbar/>
        </div>
        <div className='px-5 md:px-[10%] mt-8 mb-10'>
            {children}
        </div>
    </div>
  )
}

export default Wrapper