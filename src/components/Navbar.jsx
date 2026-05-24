"use client"

import Image from 'next/image';
import logo from "../../public/assets/Gemini_Generated_Image_4xrel14xrel14xre.png"
import React from 'react';
import Link from 'next/link';
import Navlink from './Navlink';
import { authClient } from '@/lib/auth-client';
import { IoLogOutOutline } from 'react-icons/io5';

const Navbar = () => {
  
const { data: session } = authClient.useSession();
 const user =session?.user;
  console.log(user);
  

    return (
        <div className="lg:px-35 px-3 navbar backdrop-blur-xl bg-transparent sticky top-0 z-50 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-md dropdown-content  bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       <Navlink href={"/"}><li>Home</li></Navlink>
       <Navlink href={"/doctors"}><li>All Appointment</li></Navlink>
       <Navlink href={"/dashboard"}><li>Dashboard</li></Navlink>
      </ul>
    </div>
    <div>
        <Link href={"/"} className='flex items-center gap-1.5'>
           <Image src={logo} alt='logo' width={50} height={60} className='rounded-full' ></Image>
          <h1 className='lg:text-3xl md:text-2xl text-xl font-semibold bg-linear-to-r from-[#0D530E] via-[#328E6E] to-[#2FA084] bg-clip-text text-transparent'>DocAppoint</h1>
        </Link>
        
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
   <ul className="flex gap-4 px-1">
     <li><Navlink  href={"/"}>Home</Navlink></li>
    <li> <Navlink href={"/all-apoinments"}>All Appointment</Navlink></li>
    <li> <Navlink href={"/dashboard"}>Dashboard</Navlink></li>
    </ul>
  </div>
  <div className="navbar-end gap-2">
   {
         user ? <div className='flex items-center gap-2'>
          <div className="avatar">
  <div className="ring-emerald-800 ring-offset-base-100 w-9 rounded-full ring ring-offset-2">
     <Image src={user?.image || user?.name.charAt(0)} width={100} height={100}  alt={user?.name}></Image>
  </div>
</div>
  <Link onClick={async ()=> await authClient.signOut()} href={"/"}  className="btn border-none bg-gradient-to-r from-[#0D530E] text-white rounded-2xl  to-[#328E6E]"><IoLogOutOutline /> Logout</Link>
         </div> : <div className='flex items-center gap-2'>
           <Link href={"/login"}>Login</Link>
    <Link href={"/register"} className="btn border-none bg-gradient-to-r from-[#0D530E] text-white rounded-2xl  to-[#328E6E]">Register</Link>
         </div> 
   }
  </div>
</div>
    );
};

export default Navbar;