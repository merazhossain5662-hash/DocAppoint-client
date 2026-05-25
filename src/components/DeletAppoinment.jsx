"use client"
import { useRouter } from 'next/navigation';
import React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';

const DeletAppoinment = ({data}) => {
      const router =useRouter()
    const handleDelete =async()=>{
       const res = await fetch(`http://localhost:5000/appoinments/${data._id}`,{
            method: "DELETE",
            headers: {
              'content-type' : 'application/json'
            }
    });
    document.getElementById('my_modal_3').close();
       router.refresh()
    };
    return (
       <>
       
             <button onClick={()=>document.getElementById('my_modal_3').showModal()} className='btn btn-sm rounded-xl bg-red-500 text-white'><FaRegTrashAlt />Delete</button>
       
       <dialog id="my_modal_3" className="modal">
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
       </>
     
             
    );
};

export default DeletAppoinment;