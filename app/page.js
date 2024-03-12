'use client'
import Navbar from './componets/navbar'
import C_classSedan from './componets/c_classSedan';
import EClassSedan from './componets/eClassSedan';
import EclassWagon from './componets/e_classWagon'
import EQS_sedan from './componets/eqs_sedan'
import Maybach_sedan from './componets/maybach_sedan';
import { useEffect, useState } from 'react';
import logo from '/public/logo.png';
import Image from 'next/image';

const page = () => {
  const [imageLoaded, setImageLoaded] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setImageLoaded(false)
    }, 2000);
  }, []);

  return (
    <div>
     { imageLoaded === true ? (
        <div className='flex flex-col bg-black w-full h-screen justify-center items-center '> 
         <Image src={logo} alt="" className='max-w-[200px] w-full ' />
          <h1 className='gradient-text text-5xl absolute  bottom-14 font-bold'>Mercedes Benz</h1>
        </div>
      ) : (
      <>
        <Navbar />
        <C_classSedan />
        <EClassSedan />
        <EclassWagon />
        <EQS_sedan />
        <Maybach_sedan />
      </>
    )}
    </div>
  )
}

export default page