import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-black'>
        <div className='w-screen h-[40vh]  flex justify-around items-start section '>
            
            <figure >
                <Image src={'/logos.svg'}  width={200} height={200} alt='logo'/>
            </figure>
            
            <div className='text-start font-teachers max-w-[950px] flex flex-col '>
                <h1 className='my-2 font-light text-[.7rem] text-gray-400'>INFO</h1>
                <ul className='flex flex-col text-sm gap-[2px] '>
                    <li>Work</li>
                    <li>About Us</li>
                    <li>For Customer</li>
                    <li>Contact</li>
                </ul>
            </div>

            <div className='text-start font-teachers max-w-[950px] flex flex-col '>
                <h1 className='my-2 font-light text-[.7rem] text-gray-400'>CONTACT US</h1>
                <ul className='flex flex-col text-sm gap-[2px] '>
                    <li>+91 980 971 24 19</li>
                    <li>contact@fyris.in</li>
                </ul>
            </div>

            <div className='text-start font-teachers max-w-[950px] flex flex-col '>
                <h1 className='my-2 font-light text-[.7rem] text-gray-400'>FIND US</h1>
                <ul className='flex flex-col text-sm  '>
                    <li>1901 Thornridge Cir. Shiloh, Hawaii 81063</li>
                    <div className='font-light text-sm text-gray-400'>Everyday from 10 am to 8 pm</div>
                </ul>
            </div>

        </div>
                <footer className=" font-brunoace overflow-hidden  relative  text-start m-0 p-0 w-[102vw]"
                    style={{
                        transform: translateY('-1.5vw'),
                    }}
                >
                    <div className="text-[22.2rem]  m-0 p-0 leading-none w-full ">
                        <span className='text-gd'>F</span>
                        <span className='text-gd'>y</span>
                        <span className='text-gd'>r</span>
                        <span className='text-gd'>i</span>
                        <span className='text-gd'>s</span>

                    </div>
                </footer>
    </footer>
  )
}

export default Footer