"use client"
import ViewBtn from '@/components/ViewBtn';
import GetAllData from '@/lib/GetAllData';
import Image from 'next/image';
import React, { use, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaRegClock } from 'react-icons/fa';
import { IoLocationOutline } from 'react-icons/io5';

const AllAppointment = () => {
   const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const [docs, setDocs] = useState([])
      const [searched , setSearched] = useState("");
              useEffect(()=>{
            GetAllData().then(response => response) .then(data =>  setDocs(data))
          }, [])
         
       useEffect(()=>{
         setSearched(watch("value"));
       },[watch("value")])
         
    return (
        <div className='py-5'>
           <div className='space-y-5'>
          <div>
              <h1 className='text-center text-4xl font-bold'>All Appointments</h1>
            <p className='mb-2 text-center text-lg font-semibold text-gray-500'>Find the right doctor for you.</p>
          </div>
            <form className='mx-auto md:w-120' >
              <label className="input md:w-full  mx-auto">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" className='' required placeholder="Search by doctor name or specialty..." {...register("value")} />
</label>
            </form>
           </div>
                <div className='grid lg:grid-cols-3 my-7  md:grid-cols-2 grid-cols-1 gap-4 lg:px-15'>
                            {
                              docs.length != 0 ? docs.map((data)=>{
                                 
                                if(data.name.toLowerCase().includes(searched.toLowerCase()) || data.specialty.toLowerCase().includes(searched.toLowerCase()) || searched === ""){
                                     return <div key={data.id} className='rounded-3xl max-w-120 hover:shadow-2xl  shadow-[#013d20]'>
                                  <div className="card transition-transform duration-400 ease-in-out hover:scale-103 h-130  bg-base-200  border-[#016133] border-b border-l  p-1">
              <figure className='w-full aspect-square transition-transform duration-400 ease-in-out hover:scale-97 '>
                <Image src={data.image} alt={data.name} width={400} height={400} className='object-contain rounded-2xl'></Image>
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
                                }
                                })
                                :<div className='grid lg:grid-cols-3 my-7 lg:w-500 w-100  md:grid-cols-2 grid-cols-1 gap-10 lg:px-15'>
                                <section>
                                    <div className="flex w-70 flex-col gap-4">
                                    <div className="skeleton bg-[#e5fff3] h-45 w-full"></div>
                                    <div className="skeleton bg-[#dff3ea] h-4 w-28"></div>
                                    <div className="skeleton bg-[#dff3ea] h-4 w-full"></div>
                                    <div className="skeleton bg-[#dff3ea] h-4 w-full"></div>
                                    </div>
                                </section>
                                <section>
                                    <div className="flex w-70 flex-col gap-4">
                                    <div className="skeleton  bg-[#e5fff3] h-45 w-full"></div>
                                    <div className="skeleton  bg-[#e5fff3] h-4 w-28"></div>
                                    <div className="skeleton  bg-[#e5fff3] h-4 w-full"></div>
                                    <div className="skeleton  bg-[#e5fff3] h-4 w-full"></div>
                                    </div>
                                </section>
                                <section>
                                    <div className="flex w-70 flex-col gap-4">
                                    <div className="skeleton  bg-[#e5fff3] h-45 w-full"></div>
                                    <div className="skeleton  bg-[#e5fff3] h-4 w-28"></div>
                                    <div className="skeleton  bg-[#e5fff3] h-4 w-full"></div>
                                    <div className="skeleton  bg-[#e5fff3] h-4 w-full"></div>
                                    </div>
                                </section>
                                 
                                </div>
                                
       

                            }
                          </div>
            
        </div>
    );
};

export default AllAppointment;