import Image from 'next/image';
import React from 'react';
import img from "../../public/assets/nurse.png"
import { GrRadialSelected } from 'react-icons/gr';
import { FaUserDoctor } from 'react-icons/fa6';
import { LuHandHeart } from 'react-icons/lu';
import { FaUserClock } from 'react-icons/fa';
import { TbClock24 } from 'react-icons/tb';

const Featurs = () => {
    return (
        <div className='w-10/12 shadow-sm  rounded-2xl shadow-[#dff3ea] bg-[#dff3ea] grid lg:grid-cols-2 grid-cols-1 mx-auto'>
            
        <section className='reletive'>
            <Image src={img} alt='img' className='w-4xl object-contain h-130' width={400} height={400} ></Image>
              <div className='absolute md:-mt-19 md:ml-30 -mt-17  bg-white text-black flex items-center py-2 md:px-5 px-2 md:gap-7 gap-2 rounded-xl shadow-2xl'>
                             <div className='flex items-center gap-2.5'>
                              <div className='p-2 rounded-full bg-[#dff3ea]'>
                                <LuHandHeart className='text-xl text-[#0D530E]'/>
                              </div>
                              <div>
                                <h1 className='text-xl font-semibold' >265K</h1>
                                <p className='text-sm text-gray-600'>Successful Patients</p>
                              </div>
                             </div>
                               <div className='flex items-center gap-2.5'>
                              <div className='p-2 rounded-full bg-[#dff3ea]'>
                                <TbClock24 className='text-xl text-[#0D530E]'/>
                              </div>
                              <div>
                                <h1 className='text-xl font-semibold' >24/7</h1>
                                <p className='text-sm text-gray-600'>Emergency Support</p>
                              </div>
                             </div>
                            </div>
        </section>
         <section className='py-10 rounded-xl space-y-12 bg-[#dff3ea]'>
                <div className='space-y-3'>
                    <h1 className='text-black text-3xl font-semibold'>Modern Instrument</h1>
                    <p className='text-gray-600 text-md font-medium'>Experience the brilliance of advanced dental care. Our state-of-the-art instruments,<br /> combined with artistic precision, ensure exceptional results with comfort and accuracy.</p>
                </div>
                <div className='space-y-3'>
                    <h1 className='text-black text-3xl font-semibold'>Easy Billing System</h1>
                    <p className='text-gray-600 text-md font-medium'>Enjoy a seamless and transparent billing experience. Our streamlined system is designed to provide clarity, convenience, and complete peace of mind at every step.</p>
                </div>
                <div className='space-y-3'>
                    <h1 className='text-black text-3xl font-semibold'>Qualified Nurses & Staff</h1>
                    <p className='text-gray-600 text-md font-medium'>Entrust your care to a team of highly skilled professionals. Our experienced nurses and dedicated staff deliver compassionate service with the highest standards of excellence.</p>
                </div>
             </section>
        </div>
    );
};

export default Featurs;