import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Navlink = ({href, children}) => {
     const pathName =usePathname();     
     const isActive= href === pathName;
    return (
        <div className='animate__animated animate__zoomIn'>
            <Link className={`${isActive ? "text-[#06923E] border-b-3 backdrop-blur-lg rounded-b-sm px-1 border-[#06923E] bg-[#dff3ea]" : "" } hover:font-bold hover:text-[#06923E] py-0.5`} href={href} >{children}</Link>
        </div>
    );
};

export default Navlink;