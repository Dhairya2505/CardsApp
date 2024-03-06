import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { FaBars } from "react-icons/fa6";
import Dashboardpage from "./Dashboardpage";

function Dashboard(){
    const [open,setOpen] = useState(true);

    return (
        <div>
            <div className="absolute lg:hidden">
                <div className={open ? `bg-black/45 h-screen w-screen` : `hidden`} onClick={()=>setOpen(false)}>
                </div>
            </div>
            <div className="lg:hidden">
                <div className={open ? `absolute bg-light-gray2 w-3/4 h-screen -left-0 border-dark-gray border-4 rounded-xl transition-all duration-300` : `absolute bg-black w-3/4 h-screen -left-full transition-all duration-300`}>
                        <div className="absolute text-dark-gray font-bold text-2xl md:text-4xl m-4 select-none">
                                DASHBOARD
                        </div>
                        <div className="absolute right-0 p-0.5 m-3 rounded-xl border-2 border-dark-gray cursor-pointer bg-white">
                            <RxCross2 className="size-8" onClick={()=>setOpen(false)}/>
                        </div>
                        <div className="absolute top-40 md:left-7 left-3 ">
                            <div className="md:text-2xl text-xl border-2 border-blue-800 bg-blue-300 m-2 p-2 rounded-lg select-none cursor-pointer md:hover:bg-light-gray3">
                                Your Details
                            </div>
                            <div className="md:text-2xl text-xl border-2 border-blue-800 bg-blue-300 m-2 p-2 rounded-lg select-none cursor-pointer md:hover:bg-light-gray3">
                                Your Card
                            </div>
                        </div>
                </div>
            </div>
            <div>
                <div className="flex justify-end">
                    <div className="p-1 border-2 border-black rounded-xl m-2 cursor-pointer" onClick={() => setOpen(true)}>
                        <FaBars className="size-9"/>
                    </div>
                </div>
                <div>
                    <Dashboardpage />
                </div>
            </div>
            
        </div>
    )
}

export default Dashboard;