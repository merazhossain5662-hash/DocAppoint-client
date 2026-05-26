import React from 'react';
import { FaArrowRight, FaRegClock, FaStar } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { IoLocationOutline } from 'react-icons/io5';
import ViewBtn from './ViewBtn';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

const TopDocs = async() => {

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/allDoctors`
    )
               const docs = await res.json()
    
 const topDocsData=docs.slice(1,4);

    return (
        <div className='w-10/12 py-4 mx-auto my-6 bg-base-100 space-y-4'>
            <h1 className='text-center text-4xl font-bold'>Top Rated Doctors</h1>
            <p className='mb-2 text-center text-lg font-semibold text-gray-500'>Highly reviewed specialists ready to see you.</p>
              <div className='grid lg:grid-cols-3 my-7  md:grid-cols-2 grid-cols-1 gap-4 lg:px-15'>
                {
                    topDocsData.map((data)=>{                        
                      return <div key={data.id} className='rounded-3xl max-w-100 hover:shadow-2xl  shadow-[#013d20]'>
                      <div className="card transition-transform duration-400 ease-in-out hover:scale-103 h-140  bg-base-200  border-[#016133] border-b border-l  p-1">
  <figure className='transition-transform duration-400 ease-in-out hover:scale-97 '>
    <Image src={data.image} alt={data.name} width={400} height={400} className='rounded-2xl'></Image>
  </figure>
  <div className="card-body">
    <h2 className="card-title">{data.name}</h2>
    <p className='text-green-700'>{data.specialty}</p>
    <p className='text-gray-400 text-sm '>{data.description}</p>
    <p className='text-gray-400 text-sm flex items-center gap-2'><IoLocationOutline />{data.location}</p>
    <p className='text-gray-400 text-sm flex items-center gap-2'><FaRegClock />{data.experience} experience</p>
     <div className="divider"></div>
    <div className=" flex items-center  justify-between">
      <div>
        <p>Consultation</p>
        <p className='text-green-800 text-lg font-semibold'><span className='font-light'>৳</span>{data.fee}</p>
      </div>
      <ViewBtn id={data._id}></ViewBtn>
    </div>
  </div>
</div>
                      </div>
                    })
                }
              </div>

          
        </div>
    );
};

export default TopDocs;