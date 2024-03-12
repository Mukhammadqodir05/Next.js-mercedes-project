import React from 'react'
import EQSsedan2 from '/app/car-review/eqs-sedan/EQSimages/irisBlack.png'
import EQSsedan from '/app/car-review/eqs-sedan/EQSimages/EQSsedan.png'
import Image from 'next/image'
import Link from 'next/link'

const EQS_sedan = () => {
  return (
    <main name='EQS'
      className='sections flex w-full h-screen justify-center items-center overflow-hidden'
    >
       <div className='absolute flex flex-col mt-[-400px] text-black text-center'>
        <h1 className='text-3xl font-serif font-bold'>EQS Sedan</h1>
        <p className='text-lg'>Starting at $147,550*</p>
     </div>

      <div className='lg:hidden'  >
        <Image src={EQSsedan} placeholder='blur' alt="" />
      </div> 

      <div className='hidden lg:flex max-w-[1100px]'>
        <Image src={EQSsedan2} placeholder='blur'  alt="" />
      </div>  

      <div className='flex absolute flex-col mt-[450px] md:mt-[550px] gap-4 rounded-md md:gap-[30px] md:grid md:grid-cols-2 max-w-[600px] text-center'>
          <div className='border-gray-400 border whiteButton buttons md:max-w-[285px] text-xl text-black rounded-md p-2'>
               <Link href='/car-review/eqs-sedan'>LEARN MORE</Link>
           </div>
           <div className='border blackButton buttons md:max-w-[300px] text-xl text-white rounded-md p-2 '>
               <Link href='/contact'>BUY NOW</Link>
           </div>
      </div>
  </main>
  )
}

export default EQS_sedan