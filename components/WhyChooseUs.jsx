import Image from 'next/image'
import React from 'react'

const WhyChooseUs = () => {
  return (
    <section className='w-screen py-10 bg-black'>
        <header className='text-4xl font-brunoace section'>
            <h1>Why They Choose <span className='text-gd'>Us</span> ?</h1>
        </header>
        <main className='flex justify-center items-center '>
            <div className='w-[200px] h-[200px] '>
                <Image src='/quot.png' alt='quot mark' height={200} width={200} />
            </div>
        
                <div className='max-w-[500px] font-teachers text-center mt-16' >
                    <p className=' text-lg'>Fyiris turned our rough idea into a product that exceeded all expectations. Their design and tech teams are truly world-class.</p>
                    <h1 className='font-bold text-xl mt-3'>—-CEO, CostaVida</h1>
                </div>


            <div className='w-[200px] h-[200px] '>
                <Image className='rotate-180' src='/quot.png' alt='quot mark' height={200} width={200} />
            </div>

        </main>
    </section>
  )
}

export default WhyChooseUs