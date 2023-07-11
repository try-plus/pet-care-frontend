'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


//image imports
import logo from '../../../public/images/logo.png'


export default function Nav() {
  return (
    <div className=' flex flex-col mt-6 lg:mt-14 lg:flex-row lg:justify-between '>
      <Image
      className=' w-48 mx-auto mb-10 lg:ml-20 lg:mr-32'
        alt='logo'
        src={logo}
      />  
      <ul className=' flex flex-col mx-auto text-center lg:flex-row lg:mr-48 lg:text-lg'>
        <li className='font-bold mb-2 lg:mr-14 my-auto'>
            <Link className='' href='/'>OUR SERVICES</Link>
        </li>
        <li className='font-bold mb-2 lg:mr-14 my-auto'>
            <Link href='/'>ABOUT US</Link>
        </li>
        <li className='font-bold mb-2 lg:mr-14 my-auto'>
            <Link href='/'>PRODUCTS</Link>
        </li>
        <li className='font-bold mb-2 lg:mr-14 my-auto'>
            <Link href='/'>PET CARE</Link>
        </li>
        <li className='font-bold mb-2 lg:mr-14 my-auto'>
            <Link href='/'>CONTACT</Link>
        </li>
        <li>
            <button className=' w-36 h-12 mx-auto mb-4 lg:mb-0 lg:mr-8 rounded-xl font-bold bg-cyan-900 text-white'>SIGN IN</button>
        </li>
        <li>
            <button className=' w-36 h-12 mx-auto rounded-xl font-bold bg-teal-100'>REGISTER</button>
        </li>
      </ul>
    </div>
  )
}
