import Image from 'next/image'
import vec from '../../../../public/images/Vector1.png'
import dog from '../../../../public/images/main-dog.png'
import grooming from '../../../../public/svg/grooming.svg'
import healthcare from '../../../../public/svg/healthcare.svg'
import daycare from '../../../../public/svg/daycare.svg'
import training from '../../../../public/svg/training.svg'
import hyginic from '../../../../public/svg/hyginic.svg'

export default function Home() {
  return (
    
    <main className=" ">
      <section className=' mt-48 mb-64'>
        <Image
          src={vec}
          alt='background'
          layout='fill'
          objectFit='cover'
          className=' mt-48 -z-10' 
        />
        <div className='flex flex-row justify-center z-10'>
          <div className=' mt-48'>
            <h2 className=' mb-16 text-6xl font-bold'>TAKING CARE <br/> FOR YOUR SMART DOG!</h2>
            <p className=' mb-16 text-2xl'>Human-canine bonding is the relationship <br/> between dogs and humans.</p>
            <button className=' w-48 h-16 bg-cyan-900 text-white font-semibold rounded-lg'>EXPLORE MORE</button>
          </div>
          <Image
            src={dog}
            alt='main dog'
            className=' ml-24'
          />
        </div>
      </section>


      <section className=''>
        <h2 className=' text-4xl ml-60 mb-20'>Services Category</h2>
        <ul className='flex flex-row justify-center mb-20'>
          <li className=' text-center mr-20 border rounded-2xl border-teal-200 w-52 h-56'>
            <Image
            src={grooming}
            alt='yes'
            className='mx-auto mt-10'
            />
            <p className='mt-7 font-semibold text-xl'>Grooming</p>
          </li>
          <li className=' text-center mr-20 border border-yellow-200 rounded-2xl w-52 h-56 bg-gradient-to-b from-yellow-50 to-white'>
            <Image
            src={healthcare}
            alt='yes'
            className='mx-auto mt-10'
            />
            <p  className='mt-7 font-semibold text-xl'>Healthcare</p>
          </li>
          <li className=' text-center mr-20 border rounded-2xl border-teal-200 w-52 h-56'>
            <Image
            src={daycare}
            alt='yes'
            className='mx-auto mt-10'
            />
            <p  className='mt-7 font-semibold text-xl'>Daycare</p>
          </li>
          <li  className=' text-center mr-20 border border-yellow-200  rounded-2xl w-52 h-56 bg-gradient-to-b from-yellow-50 to-white'>
            <Image
            src={training}
            alt='yes'
            className='mx-auto mt-10'
            />
            <p  className='mt-7 font-semibold text-xl'>Training</p>
          </li>
          <li className=' text-center border rounded-2xl border-teal-200 w-52 h-56'>
            <Image
            src={hyginic}
            alt='yes'
            className='mx-auto mt-10'
            />
            <p  className='mt-7 font-semibold text-xl'>Hyginic care</p>
          </li>
        </ul>
      </section>
         
       
    

    </main>
  )
}
