"use client"
import React from 'react';
import { BiTimeFive } from 'react-icons/bi';
import { CiClock1 } from 'react-icons/ci';
import { FaRegTrashAlt } from 'react-icons/fa';
import { LuUser } from 'react-icons/lu';
import { MdOutlineDateRange } from 'react-icons/md';
import { TfiPencilAlt } from 'react-icons/tfi';
import DeletAppoinment from './DeletAppoinment';
const Appoinments = ({datas}) => {


//     date
// : 
// "2026-06-06"
// doctorName
// : 
// "Dr. Mahmudul Karim"
// gender
// : 
// "♂ Male"
// paitientName
// : 
// "drtghsertgh"
// phonNumber
// : 
// "54451541"
// reason
// : 
// "joipj jkhiub opbvf u  v ugh jbj ji"
// time
// : 
// "18:21"
// userEmail
// : 
// "merazhossain5662@gmail.com"
// _id
// : 
// "6a12ec7e571b1a4a9b9475f3"
    return (
        <div className='lg:w-8/12 w-11/12 mx-auto grid md:grid-cols-2 grid-cols-1 items-center gap-3 my-3'> 
         {
          datas.length !== 0?  datas.map((data)=>{
             return <div key={data._id} className='bg-base-100  max-w-120 p-5 space-y-2 rounded-2xl shadow-2xl'>
             <p className='font-semibold bg-linear-to-r from-[#0D530E] via-[#328E6E] to-[#2FA084] bg-clip-text text-transparent text-lg'>{data.doctorName}</p>
             <div className='space-y-1'>
                <p className='text-sm flex items-center gap-1'><span className='text-gray-500 text-muted-foreground flex items-center gap-2'><LuUser /> Patient:</span> {data.paitientName}</p>
                <p className='text-sm flex items-center gap-1'><span className='text-gray-500 text-muted-foreground flex items-center gap-2'><MdOutlineDateRange /> Date:</span> {data.date}</p>
                <p className='text-sm flex items-center gap-1'><span className='text-gray-500 text-muted-foreground flex items-center gap-2'><BiTimeFive /> Time:</span> {data.time}</p>
             </div>
             {
                data.reason ? <p className='text-sm'>Reason: {data.reason}</p>
                : <p></p>
             }

             <div className='mt-4 space-x-2'>
                <button className='btn bg-[#e6fdf3] dark:bg-base-300 btn-sm rounded-xl'><TfiPencilAlt />Update</button>
               <DeletAppoinment data={data}></DeletAppoinment>
             </div>
             </div>
            })
            :
            <p className='text-lg text-center font-medium text-gray-500 '>No appointments to show. When you book one, it will appear here.</p>
         }
        </div>
    );
};

export default Appoinments;