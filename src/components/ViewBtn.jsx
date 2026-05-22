import Link from 'next/link';
import React from 'react';

const ViewBtn = ({id}) => {
    return (
        <div>
            <Link href={`doctor/${id}`}><button className="btn bg-linear-to-r from-[#0D530E] via-[#328E6E] to-[#2FA084] text-white  rounded-md">View Details</button></Link>
        </div>
    );
};

export default ViewBtn;