import Image from 'next/image';
import React from 'react';
import { TfiEmail } from 'react-icons/tfi';
import UpdateUser from './UpdateUser';

const Profile = ({user}) => {
  console.log(user);
  
    return (
        <div>
              <div className='bg-[#f4f9fd] py-9'>
           <div className="animate__animated animate__bounceInRight card space-y-0.5 relative glass rounded-2xl backdrop-blur-3xl shadow-2xl lg:w-md md:w-md w-xs mx-auto">
               
<div className="avatar mx-auto mt-5">
 <div className="ring-emerald-800 ring-offset-base-100 w-25 rounded-full ring ring-offset-2">
      <Image src={user?.image || user?.name.charAt(0)} width={600} height={600}  alt={user?.name}></Image>
   </div>
</div>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{user?.name}</h2>
    <p className='font-semibold text-sm flex items-center gap-1 text-gray-500'><TfiEmail /> {user?.email}</p>
    <div className="card-actions w-full tooltip"  data-tip={`last Updeted : ${user?.updatedAt.getDate()}/${user?.updatedAt.getMonth()}/${user?.updatedAt.getFullYear()} -- At ${user?.updatedAt.getHours()} O'clock`}>
        <UpdateUser user={user}></UpdateUser>
  {/* <button onClick={handleLogoutBtn} className='bg-transparent backdrop-blur-2xl shadow-red-100 hover:shadow-xl btn items-center btn-outline text-red-500'><IoLogOutOutline />Log Out
  </button> */}
    </div>
  </div>
</div>
        </div>
        </div>
    );
};

export default Profile;