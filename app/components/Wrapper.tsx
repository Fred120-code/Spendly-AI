import React from 'react'
import Navbar from './Navbar'

type WrapperProps = {
    children: React.ReactNode;
}

const Wrapper = ({children}:WrapperProps) => {
  return (
    <div className='flex w-full'>
        <div className='w-1/7'>
            <Navbar/>
        </div>
        <div className='px-5 md:px-[10%] mt-8 mb-10'>
            {children}
        </div>
    </div>
  )
}

export default Wrapper