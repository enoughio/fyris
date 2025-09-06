import React from 'react'
import GradientButton from './GradientButton'

const BottomCta = () => {
  return (
    <div className='w-screen h-[60vh] bg-black backdrop-blur-3xl flex flex-col justify-center items-center gap-10 '>

        <div className='text-center font-brunoace text-[3rem] leading-tight max-w-[950px] flex flex-col '>
            <h1>Let’s create something </h1>    
            <h1>remarkable <span className='text-gd'>together.</span></h1>    
        </div>

        <GradientButton />

    </div>
  )
}

export default BottomCta