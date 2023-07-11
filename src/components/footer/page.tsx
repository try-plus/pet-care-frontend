import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className=' flex flex-col text-center lg:flex-row lg:px-80 mb-8 pt-8 border-t-4 border-trueGray-300'>
      <p>all rights reserved & design by bharat</p>
      <Link href='/' className=' font-bold text-lg my-2 lg:my-0 lg:mr-10 lg:ml-auto'>OUR SERVICES</Link>
      <Link href='/' className=' font-bold text-lg my-2 lg:my-0 lg:mr-10'>ABOUT US</Link>
      <Link href='/' className=' font-bold text-lg my-2 lg:my-0 lg:mr-10'>SHIPPING</Link>
      <Link href='/' className=' font-bold text-lg my-2 lg:my-0 lg:mr-10'>FAQ</Link>
      <Link href='/' className=' font-bold text-lg my-2 lg:my-0 lg:mr-10'>CONTACT</Link>
    </div>
  )
}
