import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='fixed w-full h-18 overflow-hidden top-0 left-0 backdrop-blur-3xl px-10 flex items-start justify-between p-4 z-10'>
        <div className='menu-Item'>
            <ul className='extralight' >
                <li className='text-hover'>Home</li>
                <li className='text-hover'>Service</li>
                <li className='text-hover'>Contact</li>
                <li className='text-hover'>Sucess</li>
            </ul>
        </div>
        
        <div className='logo'>
            <Image src={'/logos.svg'}  width={100} height={50} alt='logo'/>
        </div>

        <div className='gradient-button rounded-lg overflow-hidden '>
            <button className='btn p-2 font-extralight  px-4  backdrop-blur-xl '>Contact</button>
        </div>
    </nav>
  )
}

export default Navbar