import React from 'react';
import data  from "../../public/logos.json"
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
const Corporet = () => {
    return (
        <div className='my-14 space-y-5'>
            <h1 className='lg:text-5xl md:text-4xl text-2xl bg-linear-to-r from-[#0D530E] via-[#328E6E] to-[#2FA084] bg-clip-text text-transparent text-center font-semibold'>Corporate Partners</h1>
            <div className='w-10/12 items-center  bg-base-100 py-2 shadow-2xs container mx-auto'>
              <Marquee autoFill="true" pauseOnHover speed="43">
            
            <div className='flex justify-between gap-20 items-center'>
                  {
                data.map((logo)=>{
                
                return  <div key={logo.id} className=''>
                        <Image  src={logo.logo} alt='logo' width={200} height={200} className='w-30 object-contain'></Image>
                    </div>
                })
            }
            </div>
              </Marquee>
          
        </div>
        </div>
    );
};

export default Corporet;