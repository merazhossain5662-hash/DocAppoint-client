"use client"
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import { Bounce, toast } from 'react-toastify';

const DeletAppoinment = ({data}) => {
  console.log(data._id);
  
      const router =useRouter()
    const handleDelete =async()=>{
       const {data: tokenData} = await authClient.token()
       const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/appoinments/${data._id}`,{
            method: "DELETE",
            headers: {
              'content-type' : 'application/json',
              authorization : `Bearer ${tokenData?.token}`,
            }
    });
    document.getElementById('my_modal_1').close();
       router.refresh()
        toast.info('Appoinment Deleted succesfully', {
position: "top-center",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "colored",
transition: Bounce,
});
    };
    return (
       <div>
       
             <button onClick={()=>document.getElementById('my_modal_1').showModal()} className='btn btn-sm rounded-xl bg-red-500 text-white'><FaRegTrashAlt />Delete</button>
       
       <dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg">Just Checking…</h3>
    <p className="py-4">{`Do you really want to delete this Apponment with ${data.doctorName}? Once it's gone, it’s gone for good.`}</p>
    <button onClick={handleDelete} className='btn btn-sm rounded-xl bg-red-500 text-white'>Yes, Delete</button>
  </div>
</dialog>
       </div>
     
             
    );
};

export default DeletAppoinment;