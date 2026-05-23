"use client"
// import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import { FaGoogle } from 'react-icons/fa';
// import { toast, Zoom } from 'react-toastify';

const loginPage = () => {
 

 const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const handleLoginSubmit =async (datal)=>{
    const {email, password}=datal
// const { data, error } = await authClient.signIn.email({
//     email: email, // required
//     password: password, // required
//     rememberMe: true,
//     callbackURL: "/",
// }); 
// if(error){
// toast.error(error.message, {
// position: "top-center",
// autoClose: 5000,
// hideProgressBar: false,
// closeOnClick: false,
// pauseOnHover: true,
// draggable: true,
// progress: undefined,
// theme: "dark",
// transition: Zoom,
// });
// }else{
//     toast.success('Login Successfull!', {
//     position: "top-center",
//     autoClose: 5000,
//     hideProgressBar: false,
//     closeOnClick: false,
//     pauseOnHover: true,
//     draggable: true,
//     progress: undefined,
//     theme: "dark",
//     transition: Zoom,
//     });

// }
}

// const handleGoogleSingin= async()=>{
//    const data = await authClient.signIn.social({
//     provider: "google",
//   });
//  }
    return (
        <div className=' bg-[#f4f9fd]'>
           
  <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse animate__animated animate__zoomIn">
    <div className="text-center lg:text-left animate__animated lg:animate__slideInRight animate__fadeInDown">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">
        Access your personalized library and start borrowing books instantly.
Discover new reads, save your favorites, and manage your reading journey—all in one place.
      </p>
    </div>
    <div className="card glass animate__animated lg:animate__slideInLeft animate__fadeInUp  backdrop-blur-3xl border-blur-md border-2 rounded-2xl lg:w-lg md:w-md w-xs shrink-0 shadow-2xl">
      <div className="card-body ">
       <form onSubmit={handleSubmit(handleLoginSubmit)}>
         <fieldset className="fieldset relative">
          <label className="label text-xl text-black font-medium">Email</label>
          <input type="email"  name='email' {...register("email",  { required: true })} className="input w-full rounded-2xl bg-base-200" placeholder="Email" />
          {errors.email && <span className="text-red-700 text-md">This field is required.</span>}
          
          <label className="label text-xl text-black font-medium">Password</label>
          <input type="password" name='password' {...register("password",  { required: true })} className="input w-full rounded-2xl bg-base-200" placeholder="Password" />
          {errors.password && <span className="text-red-700 text-md">This field is required.</span>}
<p className=' font-light text-sm'>Don’t Have An Account ? <Link href={"/register"} className=' text-[#1c7474] font-medium hover:underline'> Register </Link></p>  
        <button type='submit' className="btn  bg-[#0a627c] text-white rounded-2xl text-lg font-semibold py-2 my-4">Login</button>
        <div className="divider">OR</div>
     
        </fieldset>
        {/* <button onClick={handleGoogleSingin} className="btn text-[#0a627c] btn-outline items-center gap-2 w-full rounded-2xl text-lg py-4 font-semibold mt-4"><FaGoogle /> Login with Google</button> */}
      <div className='border-t border-gray-300'>
      </div>
       </form>
        </div>
    </div>
  </div>
</div>
            </div>
       
    );
};

export default loginPage;