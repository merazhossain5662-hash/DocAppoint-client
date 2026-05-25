"use client"
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';
import { MdCancel } from 'react-icons/md';
import { TfiPencilAlt } from 'react-icons/tfi';

const UpdateAppoinment = ({data}) => {
     const modalId = `my_modal_${data._id}`    
    const router =useRouter()
       const {
                       register,
                       handleSubmit,
                       watch,
                       formState: { errors },
                     } = useForm()  

                       const onSubmit =async(datal)=>{
                         const {data: tokenData} = await authClient.token()
                           const res = await fetch(`http://localhost:5000/appoinments/${data._id}`,{
            method: "PATCH",
            headers: {
              'content-type' : 'application/json',
                 authorization : `Bearer ${tokenData?.token}`,
            },
            body: JSON.stringify(datal)
          })
          document.getElementById(modalId).close();
           router.refresh()
                       }
    return (
       <div>
          <button onClick={()=>document.getElementById(modalId).showModal()} className='btn bg-[#e6fdf3] dark:bg-base-300 btn-sm rounded-xl'><TfiPencilAlt />Update</button>
          <dialog id={modalId} className="modal">
            <div className="modal-box">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-lg btn-circle btn-ghost absolute right-2 top-2"><MdCancel /></button>
              </form>
              <div>
                  <h3 className="font-bold text-xl">Update Appointment</h3>
              
              </div>
             <form onSubmit={handleSubmit(onSubmit)}>
              <fieldset className="fieldset">
          </fieldset>
             <fieldset className="fieldset">
            <legend className="fieldset-legend">Doctor Name</legend>
            <input type="text" className="input w-full bg-base-300 rounded-4xl" disabled={true} defaultValue={data.doctorName} {...register("doctorName", { required: true })} readOnly />
          </fieldset>
             <fieldset className="fieldset">
            <legend className="fieldset-legend">Patient Name *</legend>
            <input type="text" defaultValue={data.paitientName} className="input w-full  rounded-4xl" {...register("paitientName", { required: true })} placeholder='Full Name'/>
             {errors.paitientName && <span className="text-red-700 text-md">This field is required.</span>}
          </fieldset>
            
              
               <div className='grid grid-cols-2 gap-2'>
                 <fieldset className="fieldset">
            <legend className="fieldset-legend">Date *</legend>
                <input type="date" defaultValue={data.date} className="input rounded-3xl" {...register("date", { required: true })} />
                 {errors.date && <span className="text-red-700 text-md">This field is required.</span>}
            </fieldset>
                 <fieldset className="fieldset">
            <legend className="fieldset-legend">Time *</legend>
           <input type="time" className="input " defaultValue={data.time} {...register("time", { required: true })}  />
            {errors.time && <span className="text-red-700 text-md">This field is required.</span>}
            </fieldset>
                 
               </div>
               <fieldset className="fieldset">
            <legend className="fieldset-legend">Reason (optional)</legend>
            <input type="text" defaultValue={data?.reason} className="input w-full  rounded-4xl" placeholder="Brief reason for visit" {...register("reason")}/>
          </fieldset>
          
             <button type='submit' className='btn w-full mt-4 px-3.5 bg-linear-to-r from-[#0D530E] text-white rounded-md text-lg py-3  to-[#328E6E] border-none'>Confirm Booking</button>
             </form>
            </div>
          </dialog>
          
       </div>
    );
};

export default UpdateAppoinment;