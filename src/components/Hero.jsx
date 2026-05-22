import Image from 'next/image';
import React from 'react';
import doctorsImage from "../../public/assets/Gemini_Generated_Image_dx494sdx494sdx49.png"
import { FaArrowRight, FaRegCalendarCheck } from 'react-icons/fa';
import Link from 'next/link';
import { FaUserDoctor } from 'react-icons/fa6';
import { RiEmotionHappyFill } from 'react-icons/ri';

const Hero = () => {
    return (
        <div>
            <div className='w-10/12  grid lg:grid-cols-2 md:grid-cols-1  grid-cols-1 mx-auto'>
             <section className='py-10 pl-10 space-y-12 bg-[#dff3ea]'>
                <h1 className='text-7xl font-semibold bg-linear-to-r from-[#0D530E] via-[#328E6E] to-[#2FA084] bg-clip-text text-transparent'>Your Health, Our Priority</h1>
            <p className=' text-xl text-[#1c7474]'>Connect with experienced doctors, avoid long queues,<br /> and take control of your health journey today.</p>
            <div className='space-x-3'>
              <Link href={"/all-apoinments"}>
                <button className='btn px-3.5 bg-linear-to-r from-[#0D530E] text-white rounded-md text-lg py-3  to-[#328E6E] border-none'>Browse Doctors <FaArrowRight /> </button>
              </Link>
               <Link href={"/dashboard"}>
                <button className='btn text-md btn-outline bg-transparent backdrop-blur-3xl hover:text-white border-green-800 text-green-900 hover:bg-linear-to-r hover:from-[#0D530E]  hover:to-[#328E6E] '><FaRegCalendarCheck /> My Bookings</button>
               </Link>
            </div>
             </section>
              <section className='reletive '>
                <div className='absolute md:mt-9 mt-50  bg-white text-black flex items-center py-2 px-5 gap-2 rounded-xl shadow-2xl'>
                   <div className='p-2 rounded-full bg-[#dff3ea]'>
                     <FaUserDoctor className='text-xl text-[#0D530E]' />
                   </div>
                      <div>
                        <h1 className='text-lg font-semibold'>300+</h1>
                        <p>Verified Doctors</p>
                      </div>
                </div>
                 <Image className='w-full' src={doctorsImage} width={550} height={550} alt='banner image' />
                   <div className='absolute -mt-20 ml-60  bg-white text-black lg:flex md:flex items-center py-2 px-10 gap-6 hidden  rounded-xl shadow-2xl'>
                   <div className='p-2 rounded-full bg-[#dff3ea]'>
                     <RiEmotionHappyFill className='text-3xl text-[#0D530E]' />
                   </div>
                      <div>
                        <h1 className='text-2xl font-bold'>10M+<span className='text-sm font-medium text-gray-700'>/YR</span></h1>
                        <p className='text-lg'>Happy Patients</p>
                      </div>
                </div>
              </section>
            </div>
        </div>
    );
};

export default Hero;