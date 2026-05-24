"use client"
import { authClient } from '@/lib/auth-client';
import React from 'react';
import { CgGenderMale } from 'react-icons/cg';
import { FcCancel } from 'react-icons/fc';
import { MdCancel } from 'react-icons/md';

const BookBtn = ({data}) => {
  const { data: session } = authClient.useSession();
   const user =session?.user;
    console.log(user);
    return (
        <div>
             <button  onClick={()=>document.getElementById('my_modal_3').showModal()} className='btn mt-4 px-3.5 bg-linear-to-r from-[#0D530E] text-white rounded-md text-lg py-3  to-[#328E6E] border-none'>Book Appointment</button>
             <dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-lg btn-circle btn-ghost absolute right-2 top-2"><MdCancel /></button>
    </form>
    <div>
        <h3 className="font-bold text-xl">Book Appointment</h3>
    <p className="text-gray-500">with {data.name}</p>
    </div>
   <fieldset className="fieldset">
  <legend className="fieldset-legend">User Email</legend>
  <input type="text" className="input w-full bg-base-300 rounded-4xl" value={user?.email} readOnly />
</fieldset>
   <fieldset className="fieldset">
  <legend className="fieldset-legend">Doctor Name</legend>
  <input type="text" className="input w-full bg-base-300 rounded-4xl" value={data.name} readOnly />
</fieldset>
   <fieldset className="fieldset">
  <legend className="fieldset-legend">Patient Name *</legend>
  <input type="text" className="input w-full  rounded-4xl" placeholder='Full Name'/>
</fieldset>
  
     <div className='grid md:grid-cols-2 grid-cols-1 gap-2'>
    <fieldset className="fieldset">
  <legend className="fieldset-legend">Gender *</legend>
  <select defaultValue="♂ Male" className="select">
    <option>♂ Male</option>
    <option>♀ Female</option>
    <option>Other</option>
  </select>
</fieldset>

 <fieldset className="fieldset">
  <legend className="fieldset-legend">Phone *</legend>
  <input type="number" maxLength="11" className="input  rounded-4xl" placeholder='01XXXXXXXX'/>
</fieldset>
     </div>
     <div className='grid grid-cols-2 gap-2'>
       <fieldset className="fieldset">
  <legend className="fieldset-legend">Date *</legend>
      <input type="date" className="input rounded-3xl" />
  </fieldset>
       <fieldset className="fieldset">
  <legend className="fieldset-legend">Time *</legend>
 <input type="time" className="input " />
  </fieldset>
       
     </div>
     <fieldset className="fieldset">
  <legend className="fieldset-legend">Reason (optional)</legend>
  <input type="text" className="input w-full  rounded-4xl" placeholder="Brief reason for visit"/>
</fieldset>

   <button className='btn w-full mt-4 px-3.5 bg-linear-to-r from-[#0D530E] text-white rounded-md text-lg py-3  to-[#328E6E] border-none'>Confirm Booking</button>
  </div>
</dialog>

        </div>
    );
};

export default BookBtn;