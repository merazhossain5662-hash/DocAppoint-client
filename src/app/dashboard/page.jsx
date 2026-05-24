import Tabs from '@/components/Tabs';
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import React from 'react';

const DashboardPage = async() => {
      const session = await auth.api.getSession({
        headers: await headers() 
    });

    const user = session?.user
    const res= await fetch(`http://localhost:5000/appoinments/${user?.email}`);
    const data = await res.json();
    return (
        <div className='py-10 space-y-4 dark:bg-base-200 bg-[#f6fdfa]'>
            <h1 className='text-center text-3xl font-bold'>Dashboard</h1>
           <Tabs user={user} data={data}></Tabs>
        </div>
    );
};

export default DashboardPage;