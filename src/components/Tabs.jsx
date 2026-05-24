"use client"
import React, { useState } from 'react';
import Appoinments from './appoinments';
import { authClient } from '@/lib/auth-client';

const Tabs = ({user, data}) => {
    const [active, setActive] = useState("My Bookings");
    
    
    return (
        <div>
            <div className="tabs tabs-box max-w-55 mx-auto flex px-3 rounded-3xl dark:bg-base-100 bg-[#e6fdf3] justify-center">
  <input onClick={()=>setActive("My Bookings")} type="radio" name="my_tabs_1" className="tab rounded-2xl px-3" aria-label="My Bookings" defaultChecked />
  <input onClick={()=>setActive("My Profile")} type="radio" name="my_tabs_1" className="tab rounded-2xl px-3" aria-label="My Profile" />
</div>

     <div>
        {
            active === "My Bookings" ? <Appoinments datas={data}></Appoinments>
            :  active === "My Profile" && <div>
               4514251584451
            </div>
        }
     </div>

        </div>
    );
};

export default Tabs;