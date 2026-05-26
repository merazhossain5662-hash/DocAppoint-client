import BookBtn from '@/components/BookBtn';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Image from 'next/image';
import React from 'react';
import { BsHospital } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';
import { LiaMoneyCheckAltSolid } from 'react-icons/lia';
import { LuClock3 } from 'react-icons/lu';
import { RiEmotionHappyFill } from 'react-icons/ri';

export async function generateMetadata({ params }) {
    const {token} = await auth.api.getToken({
            headers: await headers() 
        });
  const {id} = await params; 
  
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/allDoctors/${id}`,
    {
            headers : {
                authorization : `Bearer ${token}`,
            }
        }
  )
  const data = await res.json();
  console.log(data);
  
     
  return {
    title: `DocAppoint - ${data?.name}`,
    description: data?.description,
  }
}


const DetailsPage = async({params}) => {
     const {token} = await auth.api.getToken({
            headers: await headers() 
        });
  const {id} = await params; 
  
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/allDoctors/${id}`,
    {
            headers : {
                authorization : `Bearer ${token}`,
            }
        }
  )
  const data = await res.json();
     
        
    return (
        <div className='w-10/12 mx-auto h-full py-7 flex gap-7 md:flex-row flex-col'>
           <section>
            <div className="hover-3d ">
  {/* content */}
  <figure className="max-w-100 h-100  border shadow-2xl rounded-2xl">
  <Image src={data.image} alt={data.name} width={900} height={900} className='h-full object-fill'></Image>
  </figure>
  {/* 8 empty divs needed for the 3D effect */}
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
           </section>
            <section className='space-y-4'>
               <div>
                <div className="badge badge-soft badge-success">{data.specialty}</div>
               <h1 className='text-3xl font-semibold'>{data.name}</h1>
               </div>
               <p className='text-gray-500'>{data.description}</p>
              <section className='grid md:grid-cols-2 grid-cols-1 gap-2'>
                <div className='flex items-center gap-4 bg-base-200 py-2 border border-green-800 rounded-3xl px-4'>
                    <div className='p-2 rounded-full bg-[#dff3ea]'>
                                        <LuClock3 className='text-2xl text-[#0D530E]' />
                                      </div>
                    <span>
                        <h1 className='font-light text-green-700 text-sm'>Experience</h1>
                        <p className='text-lg font-semibold'>{data.experience}</p>
                    </span>
                </div>
                <div className='flex items-center gap-4 bg-base-200 py-2 border border-green-800 rounded-3xl px-4'>
                    <div className='p-2 rounded-full bg-[#dff3ea]'>
                                        <BsHospital className='text-2xl text-[#0D530E]' />
                                      </div>
                    <span>
                        <h1 className='font-light text-green-700 text-sm'>Hospital</h1>
                        <p className='text-lg font-semibold'>{data.hospital}</p>
                    </span>
                </div>
                <div className='flex items-center gap-4 bg-base-200 py-2 border border-green-800 rounded-3xl px-4'>
                    <div className='p-2 rounded-full bg-[#dff3ea]'>
                                        <CiLocationOn className='text-2xl text-[#0D530E]' />
                                      </div>
                    <span>
                        <h1 className='font-light text-green-700 text-sm'>Location</h1>
                        <p className='text-lg font-semibold'>{data.location}</p>
                    </span>
                </div>
                <div className='flex items-center gap-4 bg-base-200 py-2 border border-green-800 rounded-3xl px-4'>
                    <div className='p-2 rounded-full bg-[#dff3ea]'>
                                        <LiaMoneyCheckAltSolid className='text-2xl text-[#0D530E]' />
                                      </div>
                    <span>
                        <h1 className='font-light text-green-700 text-sm'>Consultation Fee</h1>
                        <p className='text-lg font-semibold'><span className='font-light'>৳</span> {data.fee}</p>
                    </span>
                </div>
              </section>
               <div className='space-y-1.5 '>
                <p className='ml-1'>Availability</p>
                {
                   data.availability.map((avil , index)=>{
                         return <div key={index} className="badge mr-3 badge-soft badge-success">{avil}</div>
                   })
                }
               </div>

              <BookBtn data={data}></BookBtn>
            </section>
        </div>
    );
};

export default DetailsPage;