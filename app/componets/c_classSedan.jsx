import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import SedanBlackBg from '/app/car-review/c_classsedan/SedanImages/SedanBlackBg.png'
import CsedanBg from '/app/car-review/c_classsedan/SedanImages/CsedanBg.png'

const C_classSedan = () => {
  return (
    <main name='main' className='sections flex w-full h-screen justify-center items-center overflow-hidden'
    >
 
    <div className='absolute flex flex-col mt-[-400px] text-black text-center'>
        <h1 className='text-3xl font-serif font-bold'>C Class Sedan</h1>
        <p className='text-lg'>Starting at $59,900 *</p>
     </div>

     <div className='lg:hidden'  >
         <Image src={CsedanBg}  placeholder='blur' alt="" />
      </div> 

      <div className='hidden lg:flex max-w-[1200px]'>
         <Image src={SedanBlackBg} placeholder='blur' alt="" />
      </div>  

      <div className='flex absolute flex-col mt-[450px] md:mt-[550px] gap-4 rounded-md md:gap-[30px] md:grid md:grid-cols-2 max-w-[600px] text-center'>
            <Link className='border-gray-400 border whiteButton buttons md:max-w-[285px] text-xl text-black rounded-md p-2' href='/car-review/c_classsedan'>LEARN MORE</Link>
            <Link className='border blackButton buttons md:max-w-[300px] text-xl text-white rounded-md p-2 ' href='/contact'>BUY NOW</Link>
      </div>
    </main>
  )
}

export default C_classSedan 

