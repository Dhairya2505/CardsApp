import { FaUserCircle } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

import { useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

export default function Signin({signin,setSignin,text,setText}){
    
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [noUser,setnoUser] = useState('');

    const navigate = useNavigate()

    const getToken = async () => {
        if(username === '' || password === ''){
            setnoUser('*Fill all the fields');
            return;
        }
        await axios.post('http://localhost:8001/signin',{
            username : username,
            password : password,
        })
        .then((response) => {
            const token = response.data.token;
            localStorage.setItem("CATIT",`${token}`);
            if(localStorage.getItem('CATIT')){
                navigate('/dashboard');
            }
        })
        .catch((error) => {
            if(error.response.status === 401)
            setnoUser(`${error.response.data.msg}`);
        })
    }

    return (
        <div className={signin ? `flex flex-col mt-12 bg-light-gray2 border-4 border-dark-gray rounded-tl-3xl rounded-br-3xl p-5 rotate-360 transition-all duration-500` : `rotate-180 opacity-0 transition-all duration-500 sr-only`}>
                <div>
                    <div className="flex justify-center">
                        <div className="p-3 text-2xl font-bold select-none">
                            {text}
                        </div>
                        {
                            <div className={signin ? `flex bg-light-gray3 w-20 py-1 border-4 border-black rounded-full my-2 cursor-pointer transition-all duration-150` : `flex bg-slate-800 w-20 py-1 border-4 border-black rounded-full my-2 cursor-pointer transition-all duration-150`} onClick={() => {
                                const check = signin;
                                setSignin(!signin);
                                if(check){
                                    setText('SignUp');
                                }   
                                else{
                                    setText('SignIn');
                                }
                                }}>
                                <div className={signin ? `bg-slate-800 ml-11 p-3 mx-1 rounded-full transition-all duration-150` : `bg-slate-200 p-3 mx-1 rounded-full transition-all duration-150`}>

                                </div>
                            </div>
                        }
                    </div>
                    <div className="flex flex-col items-center mt-6 p-5 select-none">
                        <div className="p-2">
                            <div className="flex items-center">
                                <FaUserCircle className="p-1 size-6 cursor-pointer" />
                                <label className="ml-1 cursor-pointer" htmlFor="Username">Username</label><br />
                            </div>
                            <input type="text" value={username} id="Username" className="ml-6 bg-slate-200 rounded-md px-1 py-0.5 outline-none border-2 border-slate-600 cursor-pointer" onChange={(e)=>{setUsername(e.target.value)}}/>
                        </div>
                        <div className="p-2">
                            <div className="flex items-center">
                                <RiLockPasswordFill className="p-1 size-6 cursor-pointer" />
                                <label className="ml-1 cursor-pointer" htmlFor="Password">Password</label><br />
                            </div>
                            <input type="text" value={password} id="Password" className="ml-6 bg-slate-200 rounded-md px-1 py-0.5 outline-none border-2 border-slate-600 cursor-pointer" onChange={(e)=>{setPassword(e.target.value)}}/>
                        </div>
                        <div className="text-red-700 font-semibold">
                            {noUser}
                        </div>
                        <div>
                            <button className="bg-light-gray px-5 py-1.5 rounded-lg border-2 border-black text-xl text-light-gray3 mt-8" onClick={getToken}>
                                SignIn 
                            </button>
                        </div>
                    </div>
                </div>
        </div>
    )
}