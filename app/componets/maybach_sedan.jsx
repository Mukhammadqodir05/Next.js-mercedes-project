import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import maybachBg2 from '/app/car-review/maybach-sedan/maybachImages/irisMango.png'
import maybachBg from '/app/car-review/maybach-sedan/maybachImages/maybachBg.png'

const Maybach_sedan = () => {
  return (
    <main name='maybach' 
          className='sections flex flex-col w-full h-screen justify-center items-center overflow-hidden p-3'
   
    >
      <div className='absolute flex flex-col mt-[-400px] text-black text-center'>
        <h1 className='text-3xl font-serif font-bold'>Maybach Sedan</h1>
        <p className='text-lg'>Starting at $230,000*</p>
      </div>

      <div className='lg:hidden '>
        <Image src={maybachBg} placeholder='blur' alt="" />
      </div>
      <div className='hidden lg:flex max-w-[1000px]'>
         <Image src={maybachBg2} placeholder='blur' alt="" />
      </div>  
      <div className='flex justify-center items-center  absolute flex-col mt-[450px] md:mt-[550px] gap-4 rounded-md md:gap-[30px] md:grid md:grid-cols-2 max-w-[600px] text-center'>
           <div className='border-gray-400 border whiteButton buttons md:max-w-[285px] text-xl text-black rounded-md p-2'>
               <Link href='/car-review/maybach-sedan'>LEARN MORE</Link>
           </div>
           <div className='border blackButton buttons md:max-w-[300px] text-xl text-white rounded-md p-2 '>
               <Link href='/contact'>BUY NOW</Link>
           </div>
         </div>
    </main>
  )
}

export default Maybach_sedan
