import Image from 'next/image'


//image imports
import vec from '../../../../public/images/Vector1.png'
import dog from '../../../../public/images/main-dog.png'
import grooming from '../../../../public/svg/grooming.svg'
import healthcare from '../../../../public/svg/healthcare.svg'
import daycare from '../../../../public/svg/daycare.svg'
import training from '../../../../public/svg/training.svg'
import hyginic from '../../../../public/svg/hyginic.svg'
import sheepdog from '../../../../public/images/sheepdog.png'
import bone from '../../../../public/svg/Group.svg'
import bone1 from '../../../../public/svg/Group-1.svg'
import bone2 from '../../../../public/svg/Group-2.svg'
import bone3 from '../../../../public/svg/Group-3.svg'
import food1 from '../../../../public/images/food1.png'
import food2 from '../../../../public/images/food2.png'
import food3 from '../../../../public/images/food3.png'
import walking from '../../../../public/images/walking.png'
import customer from '../../../../public/images/customer.png'
import customer1 from '../../../../public/images/customer1.png'
import customer2 from '../../../../public/images/customer2.png'
import facebook from '../../../../public/svg/facebook.svg'
import insta from '../../../../public/svg/insta.svg'


export default function Home() {
  return (
    <main >
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
      <section className='flex flex-row justify-center'>
        <div className="LeftImg w-[761.17px] h-[750.73px] relative mr-48">
          <Image className="ShetlandSheepdogLyingFrontWhiteWall19197119183RemovebgPreview1 w-[589px] h-[424px] left-[144px] top-[134.88px] absolute" alt='sheepdog' src={sheepdog} />
          <Image src={bone} alt='bone' className="Group origin-top-left rotate-[137.13deg] w-[37.85px] h-[41.99px] left-[606.81px] top-[302.11px] absolute"/>
          <Image src={bone1} alt='bone' className="Group origin-top-left rotate-[72.97deg] w-[37.85px] h-[41.99px] left-[237.34px] top-[264.88px] absolute"/>
          <Image src={bone2} alt='bone' className="Group origin-top-left rotate-[104deg] w-[37.81px] h-[41.94px] left-[419.34px] top-[123.36px] absolute"/>
          <Image src={bone3} alt='bone' className="Group origin-top-left rotate-[-22.93deg] w-[42.21px] h-[29.59px] left-[221.46px] top-[391.16px] absolute"/>
        </div>
        <div className=' my-48'>
          <h2 className=' mb-16 text-4xl font-bold w-[510px]'>
            Dogs do speak, but only to <br /> those who know how to <br /> listen.
          </h2>
          <p className=' mb-16 text-2xl w-[510px]'>Sweet roll ice cream powder candy canes ice cream donut pudding biscuit ice cream.
            Cupcake tootsie roll sugar plum danish pudding fruitcake cheesecake jelly-o. Pie muffin topping cake. 
            Pudding biscuit caramels topb
          </p>
          <button className=' w-48 h-16 bg-cyan-900 text-white font-semibold rounded-lg'>EXPLORE MORE</button>
        </div>
      </section>
      <section className=' mx-80 '>
        <h2 className='text-3xl font-mediu'>Dog Nutrients & Food</h2>
        <p className='mb-20 border-b-4 border-cyan-600 w-1/12'></p>
        <div className='flex flex-row '>
          <h3 className='text-6xl font-bold mb-20'>25% OFF ALL PRODUCTS</h3>
          <button className=' ml-[450px] w-[192.69px] h-[59.60px] bg-cyan-900 rounded text-white'>View More</button>
        </div>
        <div>
          <ul className='flex flex-row text-center justify-between'>
            <li className='flex flex-col px-11'>
              <Image src={food1} alt='dog food' className='mx-auto mb-10'/>
              <h4 className=' text-2xl'>Drools | 3KG</h4>
              <p>Adult chicken and egg Egg, Chicken 3 kg Dry Adult dig Food</p>
              <button className=" ml-24 mt-10 w-[187px] h-[52px] rounded-md border-[3px] text-cyan-900 font-semibold text-[20px] border-cyan-900">Buy Now</button>
            </li>
            <li className='flex flex-col px-11'>
              <Image src={food2} alt='dog food' className='mx-auto mb-10'/>
              <h4 className=' text-2xl'>Canine Creek 4 KG</h4>
              <p>Adult chicken and egg Egg, Chicken 3 kg Dry Adult dig Food</p>
              <button className=" ml-24 mt-10 w-[187px] h-[52px] rounded-md border-[3px] text-cyan-900 font-semibold text-[20px] border-cyan-900">Buy Now</button>
            </li>
            <li className='flex flex-col px-11'>
              <Image src={food3} alt='dog food' className='mx-auto mb-10'/>
              <h4 className=' text-2xl'>Biscork Biscuits</h4>
              <p>Adult chicken and egg Egg, Chicken 3 kg Dry Adult dig Food</p>
              <button className=" ml-24 mt-10 w-[187px] h-[52px] rounded-md border-[3px] text-cyan-900 font-semibold text-[20px] border-cyan-900" >Buy Now</button>
            </li>
          </ul>
        </div>
      </section>
      <section className='flex flex-row justify-around mx-80'>
        <div className='mt-48'>
          <h2 className='mb-16 text-4xl font-bold w-[508px]'>NO ONE APPRECIATES THE VERY SPECIAL GENIUS OF YOUR CONVERSATION AS THE DOG DOES.</h2>
          <p className='mb-16 text-2xl w-[533px]'>Sweet roll ice powder candy canes ice cream donut pudding buscuit ice cream biscuit topb</p>
          <button className='w-[192.69px] h-[59.60px] bg-cyan-900 rounded text-white'>Explore More</button>
        </div>
        <div>
          <Image src={walking} alt='walking a dog' className='mt-28'/>
        </div>
      </section>
      <section className='mx-80 flex flex-col'>
        <h2 className='text-3xl font-mediu'>Happy Customer</h2>
        <p className='mb-20 border-b-4 border-cyan-600 w-1/12'></p>
        <ul className='flex flex-row justify-between text-center'>
          <li className='w-[360px] ml-32'>
            <div className='h-[269px] rounded-t-3xl bg-yellow-200 '>
              <Image src={customer} alt='its a dog' className='mx-auto pb-10 relative top-[-50px]'/>
            </div>
            <div className='bg-cyan-900 h-[138px]'>
              <h3 className='text-amber-300 text-[28px] pt-3'>Anna & Tobby</h3>
              <p className='text-white text-[16px] py-2'>Amazing Products & Delivery on time.</p>
              <p>bones</p>
            </div>
          </li>
          <li className='w-[360px] '>
            <div className='h-[269px] rounded-t-3xl bg-pink-300'>
              <Image src={customer1} alt='its a dog' className='mx-auto pb-10 h-[375px] relative top-[-45px]'/>
            </div>
            <div className='bg-cyan-900 h-[138px]'>
              <h3 className='text-amber-300 text-[28px] pt-3'>Christine & Tom</h3>
              <p className='text-white text-[16px] py-2'>Amazing Products & Delivery on time.</p>
              <p>bones</p>
            </div>
          </li>
          <li className='w-[360px] mr-32'>
            <div className='h-[269px] rounded-t-3xl bg-purple-200'>
              <Image src={customer2} alt='its a dog' className='mx-auto pb-10 h-[400px] relative top-[-90px]'/>
            </div>
            <div className='bg-cyan-900 h-[138px]'>
              <h3 className='text-amber-300 text-[28px] pt-3'>Sindy & Kitch</h3>
              <p className='text-white text-[16px] py-2'>Amazing Products & Delivery on time.</p>
              <p>bones</p>
            </div>
          </li>
        </ul>
        <button className='w-[192.69px] h-[59.60px] bg-cyan-900 rounded text-white mx-auto my-20'>Explore More</button>
      </section>
      <section className=' bg-[#edf1f0]'>
        <div className='pt-[80px]'>
          <h2 className='text-4xl font-bold text-center mb-28'>JOIN US WITH AFFILIATE PROGRAM</h2>
          <div className='flex justify-center'>
            <input type="text" placeholder='Type your email address here'  className='w-[751px] h-[118px] ml-48' />
            <button type='submit'className=' relative right-[250px] top-[30px] w-[192.69px] h-[59.60px] bg-cyan-900 rounded text-white'>Submit now</button>
          </div>
        </div>
        <ul className='flex flex-row justify-center py-20'>
          <li className='mr-[400px]'>
            <h3 className=' text-lg font-semibold'>Follow on social</h3>
            <div className='flex flex-row'>
            <Image src={facebook} alt='facebook logo' className='mr-10 pt-4'/>
            <Image src={insta} alt='insta logo' className='pt-4'/>
            </div>
          </li>
          <li className='mr-[100px]'>
            <h3 className=' text-lg font-semibold'>Boarding &day care</h3>
            <p className=' text-2xl font-semibold text-cyan-900 py-4'>(616)-459-8622</p>
            <p className=' text-xl'>3236 Howard Street ,Grand <br /> Rapids,MI Michigan</p>
          </li>
          <li>
            <h3 className=' text-lg font-semibold'>Health care</h3>
            <p className=' text-2xl font-semibold text-cyan-900 py-4'>(616)-556-5896</p>
            <p className=' text-xl'>3236 Howard Street ,Grand <br /> Rapids,MI Michigan</p>
          </li>
        </ul>
      </section>
    </main>
  )
}
