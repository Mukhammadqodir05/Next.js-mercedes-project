'use client'
import React, { useState } from 'react'
import Image from 'next/image';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination } from 'swiper/modules';


import iriWhite from '/app/car-review/eqs-sedan/EQSimages/iriWhite.png'
import irisBlueEQS from '/app/car-review/eqs-sedan/EQSimages/irisBlue.png'
import irisBlackEQS from '/app/car-review/eqs-sedan/EQSimages/irisBlack.png'
import irisRed from '/app/car-review/eqs-sedan/EQSimages/irisRed.png'
import irisCirrusSilver from '/app/car-review/eqs-sedan/EQSimages/irisCirrusSilver.png'
import EQS1 from '/app/car-review/eqs-sedan/EQSimages/EQS1.webp'
import EQS2 from '/app/car-review/eqs-sedan/EQSimages/EQS2.webp'

// Performance
import performance1 from '/app/car-review/eqs-sedan/EQSimages/performance/performance1.webp'
import performance2 from '/app/car-review/eqs-sedan/EQSimages/performance/performance2.webp'
import performance3 from '/app/car-review/eqs-sedan/EQSimages/performance/performance3.webp'
import performance4 from '/app/car-review/eqs-sedan/EQSimages/performance/performance4.webp'

// Design
import design1 from '/app/car-review/eqs-sedan/EQSimages/design/design1.webp'
import design2 from '/app/car-review/eqs-sedan/EQSimages/design/design2.webp'
import design3 from '/app/car-review/eqs-sedan/EQSimages/design/design3.webp'
import design4 from '/app/car-review/eqs-sedan/EQSimages/design/design4.webp'

// Media
import multimedia1 from '/app/car-review/eqs-sedan/EQSimages/media/multimedia1.webp'
import multimedia2 from '/app/car-review/eqs-sedan/EQSimages/media/multimedia2.webp'
import multimedia3 from '/app/car-review/eqs-sedan/EQSimages/media/multimedia3.webp'
import multimedia4 from '/app/car-review/eqs-sedan/EQSimages/media/multimedia4.webp'

// Safety
import safety1 from '/app/car-review/eqs-sedan/EQSimages/safety/safety1.webp'
import safety2 from '/app/car-review/eqs-sedan/EQSimages/safety/safety2.webp'
import safety3 from '/app/car-review/eqs-sedan/EQSimages/safety/safety3.webp'
import safety4 from '/app/car-review/eqs-sedan/EQSimages/safety/safety4.webp'

// Luxury
import luxury1 from '/app/car-review/eqs-sedan/EQSimages/luxury/luxury1.webp'
import luxury2 from '/app/car-review/eqs-sedan/EQSimages/luxury/luxury2.webp'
import luxury3 from '/app/car-review/eqs-sedan/EQSimages/luxury/luxury3.webp'
import luxury4 from '/app/car-review/eqs-sedan/EQSimages/luxury/luxury4.webp'

// Accessories
import accessories1 from '/app/car-review/eqs-sedan/EQSimages/accessories/accessory1.webp'
import accessories2 from '/app/car-review/eqs-sedan/EQSimages/accessories/accessory2.webp'
import accessories3 from '/app/car-review/eqs-sedan/EQSimages/accessories/accessory3.webp'
import { EQSFeatures1, EQSFeatures2, EQSFeatures3 } from '@/app/utilities/cardata';


const EQS_sedan = () => {
  const [showPerformanceImages, setShowPerformanceImages] = useState(false);
  const [showDesignImages, setShowDesignImages] = useState(false);
  const [showLuxuryImages, setShowLuxuryImages] = useState(false);
  const [showMultimediaImages, setShowMultimediaImages] = useState(false);
  const [showSafetyImages, setShowSafetyImages] = useState(false);
  const [showAccessoriesImages, setShowAccessoriesImages] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);
  const [showFeatures2, setShowFeatures2] = useState(false);
  const [showFeatures3, setShowFeatures3] = useState(false);

  const toggleFeatures = () => setShowFeatures(!showFeatures);
  const toggleFeatures2 = () => setShowFeatures2(!showFeatures2);
  const toggleFeatures3 = () => setShowFeatures3(!showFeatures3);
  const togglePerformanceImages = () => setShowPerformanceImages(!showPerformanceImages)
  const toggleDesignImages = () => setShowDesignImages(!showDesignImages)
  const toggleLuxuryImages = () => setShowLuxuryImages(!showLuxuryImages)
  const toggleMultimediaImages = () => setShowMultimediaImages(!showMultimediaImages)
  const toggleSafetyImages = () =>  setShowSafetyImages(!showSafetyImages)
  const toggleAccessoriesImages = () =>  setShowAccessoriesImages(!showAccessoriesImages)

 

  return (
    <main className='flex flex-col h-full w-full items-center justify-center pb-20 p-3 overflow-hidden md:mt-[-100px] lg:mt-[-150px]'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
       <SwiperSlide><Image src={iriWhite} placeholder='blur' alt="" /></SwiperSlide>
       <SwiperSlide><Image src={irisBlackEQS} placeholder='blur' alt="" /></SwiperSlide>
       <SwiperSlide><Image src={irisBlueEQS} placeholder='blur' alt="" /></SwiperSlide>
       <SwiperSlide><Image src={irisRed} placeholder='blur' alt="" /></SwiperSlide>
       <SwiperSlide><Image src={irisCirrusSilver} placeholder='blur' alt="" /></SwiperSlide>
      </Swiper>
     
      <div className='flex flex-col  gap-2 lg:gap-40 md:grid md:grid-cols-2'>
          <div className='flex text-center text-2xl font-medium'>
            <h1>2023-</h1>
            <h1>AMG EQS Sedan</h1>
          </div>
         <h1 className='text-center text-2xl font-light'>$147,550 * MSRP</h1>
      </div>
       <div className='flex mt-3 border-t max-w-[1200px] border w-full border-gray-300'></div>
      
       <div className='lg:grid-cols-2 lg:grid flex items-center flex-col w-full max-w-[1100px]'>
       <div className='md:max-w-[800px] lg:max-w-[500px] justify-center items-center'>
         <Image  src={EQS1} placeholder='blur' alt="" />
         <Image src={EQS2} placeholder='blur' alt="" />
       </div>
       <div className='flex flex-col md:max-w-[800px] lg:max-w-[460px] lg:mt-[70px] mt-[30px] rounded-md w-full bg-[#f3e6e6] pb-5 p-3'>
         <h1 className='text-center text-xl font-light font-mono'>Key Features</h1>
          <div className='flex flex-col space-y-3 mt-2 p-2 '>
             <div className='flex justify-between gap-4'>
                <span className='font-light'>Passenger capacity</span>
                <span className='font-bold'>5</span>
             </div>
             <div className='border-b w-full border-black'></div>
             <div className='flex justify-between gap-4'>
                <span className='font-light'>Power</span>
                <span className='font-bold'> 649 hp (combined, w/boost to 751 hp)</span>
             </div>
             <div className='border-b w-full border-black'></div>
             <div className='flex justify-between gap-4'>
                <span className='font-light'>Cargo capacity</span>
                <span className='font-bold'>22-63 cu ft</span>
             </div>
             <div className='border-b w-full border-black'></div>
             <div className='flex justify-between gap-4'>
                <span className='font-light'>Electric motor</span>
                <span className='font-bold'>Dual Permanently Excited Synchronous</span>
             </div>
             <div className='border-b w-full border-black'></div>
             <div className='flex justify-between gap-4'>
                <span className='font-light'>Auto transmission</span>
                <span className='font-bold'>Single-speed </span>
             </div>
             <div className='border-b w-full border-black'></div>
             <div className='flex justify-between gap-4'>
                <span className='font-light'>Acceleration</span>
                <span className='font-bold'>3.4 sec 0-60 mph**</span>
             </div>
             <div className='border-b w-full border-black'></div>
             <div className='flex justify-between gap-4'>
                <span className='font-light'>Curb weight</span>
                <span className='font-bold'>5,952 lbs</span>
             </div>
             <div className='border-b w-full border-black'></div>
             <div className='flex justify-between gap-4'>
                <span className='font-light'>Wheels</span>
                <span className='font-bold'>21-inch AMG® twin 5-spoke</span>
             </div>
             <div className='border-b w-full border-black'></div>
            </div>
          </div>
         </div>

         <div className='flex flex-col justify-center items-center space-y-4 w-full mt-20 max-w-[1200px]'>
          <h1 className='text-2xl'> Essential Characteristics✔️</h1>
       {/* Performance */}
          <div className='flex flex-col space-y-5 w-full mt-10 max-w-[1200px]' onClick={togglePerformanceImages}>
            <div className='border-b w-full border-black'></div>     
            <div className='flex justify-between '>
              <h1 className=' font-serif'>Performance</h1>
              <button className='text-cyan-500 text-xl font-medium'>
                {showPerformanceImages ? <BsChevronUp  /> : <BsChevronDown/>}
              </button>
            </div>
            {showPerformanceImages && (
              <div className='grid gap-5 grid-cols-[repeat(auto-fill,minmax(250px,1fr))]'>
                <div className='space-y-2'>
                    <Image className='rounded-md' src={performance1} placeholder='blur' alt="" />
                    <h1 className='text-center font-bold'>Handcrafted AMG 2.0L inline-4 turbo with hybrid assist</h1>
                </div>
                <div className='space-y-2'>
                    <Image className='rounded-md' src={performance2} placeholder='blur' alt="" />
                    <h1 className='text-center font-bold'>Electric exhaust-gas turbocharger</h1>
                </div>
                <div className='space-y-2'>
                    <Image className='rounded-md' src={performance3} placeholder='blur' alt="" />
                    <h1 className='text-center font-bold'>9G-TRONIC automatic transmission</h1>
                </div>
                <div className='space-y-2'>
                    <Image className='rounded-md' src={performance4} placeholder='blur' alt="" />
                    <h1 className='text-center font-bold'>Two-stage direct injection</h1>
                </div>
              </div>
            )}
            <div className='border-b w-full border-black'></div>
          </div>

     {/* Design */}
          <div className='flex flex-col space-y-5 w-full mt-10 max-w-[1200px]' onClick={toggleDesignImages}>
            <div className='flex justify-between '>
              <h1 className=' font-serif'>Design</h1>
              <button className='text-cyan-500 text-xl font-medium'>
                {showDesignImages ? <BsChevronUp  /> : <BsChevronDown/>}
              </button>
            </div>
            {showDesignImages && (
              <div className='grid gap-5 grid-cols-[repeat(auto-fill,minmax(250px,1fr))]'>
                <div className='space-y-2'>
                    <Image className='rounded-md' src={design1} placeholder='blur' alt="" />
                    <h1 className='text-center font-bold'>Aggressively athletic aesthetics</h1>
                </div>
                <div className='space-y-2'>
                    <Image className='rounded-md' src={design2} placeholder='blur' alt="" />
                    <h1 className='text-center font-bold'>Technology with a human touch</h1>
                </div>
                <div className='space-y-2'>
                    <Image className='rounded-md' src={design3} placeholder='blur' alt="" />
                    <h1 className='text-center font-bold'>AMG interior with sport front seats</h1>
                </div>
                <div className='space-y-2'>
                    <Image className='rounded-md' src={design4} placeholder='blur' alt="" />
                    <h1 className='text-center font-bold'>Brushed stainless steel pedals</h1>
                </div>
              </div>
            )}
            <div className='border-b w-full border-black'></div>
          </div>
  
    {/* Luxury */}
          <div className='flex flex-col space-y-5 w-full mt-10 max-w-[1200px]' onClick={toggleLuxuryImages}>
            <div className='flex justify-between '>
              <h1 className=' font-serif'>Luxury</h1>
              <button className='text-cyan-500 text-xl font-medium'>
                {showLuxuryImages ? <BsChevronUp  /> : <BsChevronDown/>}
              </button>
            </div>
            {showLuxuryImages && (
              <div className='grid gap-5 grid-cols-[repeat(auto-fill,minmax(250px,1fr))]'>
                <div className='space-y-2'>
                    <Image className='rounded-md' src={luxury1} placeholder='blur' alt="" />
                    <h1 className='text-center font-bold'>Power front seats with memory</h1>
                </div>
                <div className='space-y-2'>
                    <Image className='rounded-md' src={luxury2} placeholder='blur' alt="" />
                    <h1 className='text-center font-bold'>Heated front seats</h1>
                </div>
                <div className='space-y-2'>
                    <Image className='rounded-md' src={luxury3} placeholder='blur' alt="" />
                    <h1 className='text-center font-bold'>40/20/40-split folding rear seats</h1>
                </div>
                <div className='space-y-2'>
                    <Image className='rounded-md' src={luxury4} placeholder='blur' alt="" />
                    <h1 className='text-center font-bold'>1 year of Mercedes me connect services</h1>
                </div>
              </div>
            )}
            <div className='border-b w-full border-black'></div>
          </div>

       {/* Multimedia */}
          <div className='flex flex-col space-y-5 w-full mt-10 max-w-[1200px]' onClick={toggleMultimediaImages}>
            <div className='flex justify-between '>
              <h1 className='font-serif'>Multimedia</h1>
              <button className='text-cyan-500 text-xl font-medium'>
                {showMultimediaImages ? <BsChevronUp  /> : <BsChevronDown/>}
              </button>
            </div>
            {showMultimediaImages && (
              <div className='grid gap-5 grid-cols-[repeat(auto-fill,minmax(250px,1fr))]'>
                <div className='space-y-2'>
                    <Image className='rounded-md' src={multimedia1} placeholder='blur' alt="" />
                    <h1 className='text-center font-bold'>Mercedes-Benz User Experience (MBUX)</h1>
                </div>
                <div className='space-y-2'>
                    <Image className='rounded-md' src={multimedia2} placeholder='blur' alt="" />
                    <h1 className='text-center font-bold'>12.3-inch digital instrument cluster</h1>
                </div>
                <div className='space-y-2'>
                    <Image g className='rounded-md' src={multimedia3} placeholder='blur' alt="" />
                    <h1 className='text-center font-bold'>11.9-inch touchscreen central multimedia display</h1>
                </div>
                <div className='space-y-2'>
                    <Image className='rounded-md' src={multimedia4} placeholder='blur' alt="" />
                    <h1 className='text-center font-bold'>Steering wheel with Touch Control Buttons</h1>
                </div>
              </div>
            )}
            <div className='border-b w-full border-black'></div>
          </div>

     {/* Safety */}
          <div className='flex flex-col space-y-5 w-full mt-10 max-w-[1200px]' onClick={toggleSafetyImages}>
            <div className='flex justify-between '>
              <h1 className=' font-serif'>Safety</h1>
              <button className='text-cyan-500 text-xl font-medium'>
                {showSafetyImages ? <BsChevronUp  /> : <BsChevronDown/>}
              </button>
            </div>
            {showSafetyImages && (
              <div className='grid gap-5 grid-cols-[repeat(auto-fill,minmax(250px,1fr))]'>
                <div className='space-y-2'>
                    <Image className='rounded-md' src={safety1} placeholder='blur' alt="" />
                    <h1 className='text-center font-bold'>PRE-SAFE</h1>
                </div>
                <div className='space-y-2'>
                    <Image className='rounded-md' src={safety2} placeholder='blur' alt="" />
                    <h1 className='text-center font-bold'>PRE-SAFE Sound</h1>
                </div>
                <div className='space-y-2'>
                    <Image className='rounded-md' src={safety3} placeholder='blur' alt="" />
                    <h1 className='text-center font-bold'>ATTENTION ASSIST</h1>
                </div>
                <div className='space-y-2'>
                    <Image className='rounded-md' src={safety4} placeholder='blur' alt="" />
                    <h1 className='text-center font-bold'>Active Brake Assist</h1>
                </div>
              </div>
            )}
            <div className='border-b w-full border-black'></div>
          </div>
          
    {/* Accessories */}
          <div className='flex flex-col space-y-5 w-full mt-10 max-w-[1200px]' onClick={toggleAccessoriesImages}>
            <div className='flex justify-between '>
              <h1 className=' font-serif'>Accessories</h1>
              <button className='text-cyan-500 text-xl font-medium'>
                {showAccessoriesImages ? <BsChevronUp  /> : <BsChevronDown/>}
              </button>
            </div>
            {showAccessoriesImages && (
              <div className='grid gap-5 grid-cols-[repeat(auto-fill,minmax(250px,1fr))]'>
                <div className='space-y-2'>
                    <Image className='rounded-md' src={accessories1} placeholder='blur' alt="" />
                    <h1 className='text-center font-bold'>Wheel locking bolts</h1>
                </div>
                <div className='space-y-2'>
                    <Image className='rounded-md' src={accessories2} placeholder='blur' alt="" />
                    <h1 className='text-center font-bold'>Chrome door handle inserts</h1>
                </div>
                <div className='space-y-2'>
                <Image className='rounded-md' src={accessories3} placeholder='blur' alt="" />
                <h1 className='text-center font-bold'>First-aid kit</h1>
                </div>
              </div>
            )}
            <div className='border-b w-full border-black'></div>
          </div>

         </div>
       
        <div className='mt-10 flex flex-col max-w-[1200px]'>
          <h1 className='text-2xl text-center font-medium'>Option Packages</h1>
          <div className=' gap-4 flex flex-col lg:grid-cols-3 lg:grid'>
            <div className='mt-10 w-full max-w-[450px] p-2 pb-5 lg:max-w-[400px] rounded-md'>
             <Image src={iriWhite} placeholder='blur' alt="" />
               <div className='flex font-bold font-serif justify-between'>
                  <h1>Premium Trim</h1>
                  <h1>Starting at $147,500*</h1>
               </div>
               <div className='mt-3'>
                 <span className='leading-7'>The car comes with a range of luxurious features as standard, such as a high-quality Burmester® surround sound system, customizable 64-color ambient lighting, a large Panorama roof, and advanced driver assistance technology.</span>
               </div>
                <div>
                {showFeatures2 && (
                 <ul className='list-disc ml-7'>
                   { EQSFeatures1.map((feature, index) => (
                    <li key={index}>{feature}</li>
                   ))}
                  </ul>
                 )}
                </div>
                <div onClick={toggleFeatures2} className='flex text-white justify-between mt-2 border rounded-md p-2 bg-[#8d2acf]'>
                    <button>
                        {showFeatures2 ? 'Hide Features' : 'Show Features'}
                    </button>
                    <button className='text-xl font-medium'>
                      {showFeatures2 ? <BsChevronUp  /> : <BsChevronDown/>}
                    </button>
                </div>
             </div>

               <div className='mt-10 w-full max-w-[450px] lg:max-w-[400] p-2 pb-5 rounded-md'>
                  <Image src={irisBlackEQS} placeholder='blur' alt="" />
                 <div className='flex font-bold font-serif justify-between'>
                    <h1>Exclusive Trim</h1>
                    <h1>Starting at $149,000*</h1>
                 </div>
                 <div className='mt-3'>
                   <span className=' leading-7'> the car offers 4-zone climate control, which is a thoughtful luxury feature.</span>
                 </div>
                  <div>
                   {showFeatures && (
                     <ul className='list-disc ml-7'>
                        {EQSFeatures2.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                   )}
                  </div>
                  <div onClick={toggleFeatures} className='flex lg:mt-[93px]  text-white justify-between mt-2 border rounded-md p-2 bg-[#8d2acf]'>
                    <button>
                        {showFeatures ? 'Hide Features' : 'Show Features'}
                    </button>
                    <button className='text-xl font-medium'>
                      {showFeatures? <BsChevronUp  /> : <BsChevronDown/>}
                    </button>
                 </div>
               </div>

              <div className='mt-10 w-full max-w-[450px] p-2 pb-5 lg:max-w-[400]   rounded-md'>
                <Image src={irisCirrusSilver} placeholder='blur' alt="" />
               <div className='flex font-bold font-serif justify-between'>
                  <h1>Pinnacle Trim</h1>
                  <h1>Starting at $155,000*</h1>
               </div>
               <div className='mt-3'>
                 <span className='leading-7'>The rear cabin offers luxurious amenities such as heated and ventilated power seats, wireless charging, and other innovative features for ultimate comfort and convenience.</span>
               </div>
                <div>
                {showFeatures3 && (
                  <ul className='list-disc ml-7'>
                  {EQSFeatures3.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>

                  )}
                </div>
                <div onClick={toggleFeatures3} className='flex text-white justify-between lg:mt-[37px] mt-2 border rounded-md p-2 bg-[#8d2acf]'>
                    <button>
                        {showFeatures3 ? 'Hide Features' : 'Show Features'}
                    </button>
                    <button className='text-xl font-medium'>
                      {showFeatures3 ? <BsChevronUp  /> : <BsChevronDown/>}
                    </button>
                  </div>
                </div>
            </div>
         </div>
     </main>
   )
}
export default EQS_sedan