"use client"
import { authClient } from '@/lib/auth-client';
import { redirect, useRouter } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';

const UpdateUser = ({user}) => {
    const router =useRouter()
     const {
             register,
             handleSubmit,
             watch,
             reset,
             formState: { errors },
           } = useForm()
    const handleUpdateUser = async(data)=>{
      
      const {name, photo} = data
        await authClient.updateUser({
    image:photo === "" ? user.image : photo,
    name: name === "" ? user.name : name,
})
reset();
  
      document.getElementById('my_modal_3').close()
      router.refresh()
    }
    // onClick={handleUpdateUser}
    return (
        <div  className='w-full'>
            <button onClick={()=>document.getElementById('my_modal_3').showModal()} className="btn border-none bg-gradient-to-r from-[#0D530E] text-white rounded-2xl  to-[#328E6E] w-full mx-3"> Update Profile</button>
        
        <dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <form onSubmit={handleSubmit(handleUpdateUser)} className='text-left space-y-3'>
        <h3 className="font-bold text-lg">Update Profile</h3>
    
  <label className="label text-lg text-black font-medium">Name</label>
  <input type="text" name='name' {...register("name")} defaultValue={user.name} className="input w-full rounded-2xl bg-base-200" placeholder="Enter your name" />
  {errors.name && <span className="text-red-700 text-md">This field is required.</span>}

  <label className="label text-lg text-black font-medium">Photo-url(link)</label>
  <input type="url" name='photo' {...register("photo")} defaultValue={user.image} className="input w-full rounded-2xl bg-base-200" placeholder="Enter your profile Image" />
  {errors.photo && <span className="text-red-700 text-md">This field is required.</span>}

  <button type='submit' className="btn border-none bg-gradient-to-r from-[#0D530E] text-white rounded-2xl  to-[#328E6E] text-lg w-full mx-3">Save</button>
    </form>
  </div>
</dialog>

        </div>

    );
};

export default UpdateUser;