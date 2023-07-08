import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../../public/images/logo.png'


export default function Nav() {
  return (
    <div className=' flex flex-row justify-between mt-14'>
      <Image
      className=' ml-20 mr-32'
        alt='logo'
        src={logo}
      />  
      <ul className=' flex flex-row mr-48 text-lg'>
        <li className='font-bold mr-14 my-auto'>
            <Link className='' href='/'>OUR SERVICES</Link>
        </li>
        <li className='font-bold mr-14 my-auto'>
            <Link href='/'>ABOUT US</Link>
        </li>
        <li className='font-bold mr-14 my-auto'>
            <Link href='/'>PRODUCTS</Link>
        </li>
        <li className='font-bold mr-14 my-auto'>
            <Link href='/'>PET CARE</Link>
        </li>
        <li className='font-bold mr-14 my-auto'>
            <Link href='/'>CONTACT</Link>
        </li>
        <li>
            <button className=' w-36 h-12 rounded-xl mr-8 font-bold bg-cyan-900 text-white'>SIGN IN</button>
        </li>
        <li>
            <button className=' w-36 h-12 rounded-xl font-bold bg-teal-100'>REGISTER</button>
        </li>
      </ul>
    </div>
  )
}
