"use client"
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';
import { FaGoogle } from 'react-icons/fa';
import { Bounce, toast } from 'react-toastify';

const RegisterPage = () => {
   const {
             register,
             handleSubmit,
             watch,
             formState: { errors },
           } = useForm()
           
    const handleGoogleSingin= async()=>{
       const data = await authClient.signIn.social({
        provider: "google",
      });
         toast.success('Registation succesfull', {
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
     }
         
      const handleRegisterSubmit = async(datal)=>{
       const {name, email, password, photo} = datal
        const { data, error } = await authClient.signUp.email({
    name: name, // required
    email: email, // required
    password: password, // required
    image: photo,
    callbackURL: "/",
});

  if(error){
 toast.error(error.message, {
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
 }else if(data){
      toast.success('Registation succesfull', {
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
      redirect("/login")
 }
      }
     
    return (
        <div className=' bg-[#f4f9fd] py-14'>
           <form onSubmit={handleSubmit(handleRegisterSubmit)}>
             <fieldset className="animate__animated animate__fadeInDownBig fieldset mx-auto space-y-3 galss shadow-2xl backdrop-blur-3xl rounded-3xl rounded-box lg:w-lg md:w-md w-xs py-6 px-4">
  <legend className="fieldset-legend text-4xl text-center font-bold">Register</legend>

  <label className="label text-lg text-black font-medium">Name</label>
  <input type="text" name='name' {...register("name",  { required: true })}  className="input w-full rounded-2xl bg-base-200" placeholder="Enter your name" />
  {errors.name && <span className="text-red-700 text-md">This field is required.</span>}

  <label className="label text-lg text-black font-medium">Photo-url(link)</label>
  <input type="url" name='photo' {...register("photo",  { required: true })} className="input w-full rounded-2xl bg-base-200" placeholder="Enter your profile Image" />
  {errors.photo && <span className="text-red-700 text-md">This field is required.</span>}
  
  <label className="label text-lg text-black font-medium">Email</label>
  <input type="email" name='email' {...register("email",  { required: true })} className="input w-full rounded-2xl bg-base-200" placeholder="Enter yor email address" />
  {errors.email && <span className="text-red-700 text-md">This field is required.</span>}

  <label className="label text-lg text-black font-medium">Password</label>
  <input type="password" name='password' {...register("password",  { required:"Password is required" ,minLength: {
            value: 6,
            message: "Minimum length is 6 characters"
          },
          pattern: {
            value: /^(?=.*[a-z])(?=.*[A-Z]).+$/,
            message:"Must contain at least 1 uppercase and 1 lowercase letter"
          }})} className="input w-full rounded-2xl bg-base-200" placeholder="Add your password" />
{errors.password && <span className="text-red-700 text-md">{errors.password.message}</span>}

  <div>
<p className='flex items-center text-sm gap-1'><input  type="checkbox" {...register("checkbox",  { required: true })} name="checkbox"   />Accept <span className='font-extrabold'>Term & Conditions</span></p>
{errors.checkbox && <span className="text-red-700 text-md">Without Accept This You Can Not Registar.</span>}
 </div>

  <button type='submit' className="btn btn-neutral rounded-2xl text-xl mt-4">Register</button>
   <div className="divider">OR</div>
   <p className=' font-light text-sm'>Already Have An Account ? <Link href={"/login"} className=' text-green-700 font-medium hover:underline'>Login</Link></p>  
<button onClick={handleGoogleSingin} className="btn text-green-900 btn-outline items-center gap-2 w-full rounded-2xl text-lg py-4 font-semibold mt-4"><FaGoogle /> Continue with Google</button>
</fieldset>
           </form>
        </div>
    );
};

export default RegisterPage;