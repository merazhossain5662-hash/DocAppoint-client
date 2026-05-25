import Image from 'next/image';
import React from 'react';
import { FaSquareXTwitter, FaXTwitter } from 'react-icons/fa6';
import { GiBookAura } from 'react-icons/gi';
import { SiWorldhealthorganization } from 'react-icons/si';


const Footer = () => {
    return (
        <div className='mt-20'>
         <footer className="footer sm:justify-center md:justify-around sm:footer-horizontal bg-[#033103] py-9 text-white lg:px-15">
<nav>
    <span className='flex gap-1  items-center' href={"/"}><span className='text-3xl'><SiWorldhealthorganization /></span><h1 className='text-2xl font-semibold'>DocAppoint</h1></span>
    <p>Your trusted health partner, <br /> always with you.</p>
</nav>

  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Social</h6>
    <div className="grid grid-flow-col gap-4">
      <a>
         <FaSquareXTwitter className='text-2xl' />

      </a>
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
        </svg>
      </a>
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
        </svg>
      </a>
    </div>
  </nav>
</footer>
<footer className="py-5 text-center bg-[#033103] text-white border-t border-green-300 p-4">
  
    
    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
  
 
</footer>
        </div>
    );
};

export default Footer;