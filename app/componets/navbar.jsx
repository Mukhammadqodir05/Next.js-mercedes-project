'use client'
import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import logo from '/public/logo.png';
import { FaBars, FaTimes  } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isClickOpen, setIsClickOpen] = useState(false);

  const handleMenuClick = () => {
    setIsClickOpen((prev) => !prev);
  };

  const handleLogoClick = () => {
    window.location.reload();
    window.location.href = '/';
  };

  return (
    <nav className='fixed bg-black borderColor flex justify-between items-center w-full h-[90px] px-4 md:px-8 z-10'>
      <div onClick={handleLogoClick}>
        <Image src={logo} placeholder='blur' alt='Tesla Logo' className='h-16 rounded-full w-16 cursor-pointer' />
      </div>

        <ul className='hidden lg:flex space-x-6 text-white'>
            <li className='font-medium font-serif cursor-pointer'>
                <ScrollLink to='main'>C Class Sedan</ScrollLink>
            </li>
            <li className='font-medium font-serif cursor-pointer'>
                <ScrollLink to='eClass'>E Class Sedan</ScrollLink>
            </li>
            <li className='font-medium font-serif cursor-pointer'>
                <ScrollLink to='eClassWagon'>E Class Wagon</ScrollLink>
            </li>
            <li className='font-medium font-serif cursor-pointer'>
                <ScrollLink to='EQS'>EQS Sedan</ScrollLink>
            </li>
            <li className='font-medium font-serif cursor-pointer'>
                <ScrollLink to='maybach'>Maybach Sedan</ScrollLink>
            </li>
        </ul>

       <div className='flex items-center justify-center h-[90x]'>
          <Link href='/contact' className='bg-white p-1 px-2 rounded-s rounded-e  hidden md:flex'>Contact 📞</Link>
        <div
          className='md:hidden cursor-pointer text-4xl'
          onClick={handleMenuClick}
        >
          {!isClickOpen ? <FaBars className='text-3xl text-white' /> : ''}
        </div>

        {isClickOpen && (
          <div onClick={handleMenuClick} className='menu absolute md:hidden z-20 h-[400px] top-[0px] left-0 w-full navbar text-white py-4'>
            <div onClick={handleMenuClick} className='md:hidden cursor-pointer p-2 px-4 absolute z-10 text-4xl'>
              {isClickOpen ? (
                <FaTimes onClick={handleMenuClick} className='text-3xl text-white' />
              ) : (
                ''
              )}
            </div>

            <ul className='p-12 py-16 space-y-5'>
                <li className='font-medium font-serif cursor-pointer'>
                    <ScrollLink  onClick={handleMenuClick} to='main'>C Class Sedan</ScrollLink>
                </li>
                <li className='font-medium font-serif cursor-pointer'>
                    <ScrollLink onClick={handleMenuClick} to='eClass'>E Class Sedan</ScrollLink>
                </li>
                <li className='font-medium font-serif cursor-pointer'>
                    <ScrollLink  onClick={handleMenuClick} to='eClassWagon'>E Class Wagon</ScrollLink>
                </li>
                <li className='font-medium font-serif cursor-pointer'>
                    <ScrollLink  onClick={handleMenuClick} to='EQS'>EQS Sedan</ScrollLink>
                </li>
                <li className='font-medium font-serif cursor-pointer'>
                    <ScrollLink  onClick={handleMenuClick} to='maybach'>Maybach Sedan</ScrollLink>
                </li>
                <li className='font-medium font-serif cursor-pointer'>
                   <Link href='/contact'> Contact 📞</Link>  
                </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
