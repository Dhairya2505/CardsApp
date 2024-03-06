import axios from "axios";
import zod from 'zod'

import { SiGmail } from "react-icons/si";
import { FaUserCircle } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

import { useState } from "react";

export default function Signup({ signin,setSignin,text,setText }) {
    
    // States
    const [gmail,setGmail] = useState('');
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [cpassword,setCpassword] = useState('');
    const [error,setError] = useState('');

    // Checking

    const checkforPasswords = () => {
        if(password !== cpassword){
            setError('*Passwords do not match');
            return false;
        }
        else{
            const passwordSchema = zod.string().min(8);
            const response = passwordSchema.safeParse(password);
            if(response.success){
                return true;
            }
            else{
                setError('*Password should be min 8 characters');
            }
        }
    }

    const sendDataToBackend = async () => {
        setError('');
        if(gmail === '' || username === ''){
            setError('*Fill all the details');
        }
        else if(checkforPasswords()){
            setError('');
            await axios.post('http://localhost:8001/signup',{
                gmail : gmail,
                username : username,
                password : password
            })
            .then((response) => {
                setSignin(true);
                setGmail('');
                setUsername('');
                setPassword('');
                setCpassword('');
            })
            .catch((error) => {
                if(error?.response?.data?.msg){
                    setError(`*${error.response.data.msg}`);
                }
            })
        }
    }


    return (
        <div className={signin ? `-rotate-180 opacity-0 transition-all duration-500 sr-only` : `flex flex-col bg-light-gray2 border-4 border-dark-gray rounded-tl-3xl rounded-br-3xl  mt-12 p-5 rotate-0 transition-all duration-500`}>
        <div className="flex justify-center">
            <div className="p-3 text-2xl font-bold select-none">
                {text}
            </div>
            {
                <div className={signin ? `flex bg-light-gray2 w-20 py-1 border-4 border-light-gray2 rounded-full my-2 cursor-pointer transition-all duration-150` : `flex bg-light-gray3 w-20 py-1 border-4 border-black rounded-full my-2 cursor-pointer transition-all duration-150`} onClick={() => {
                    const check = signin;
                    setSignin(!signin);
                    if(check){
                        setText('SignUp');
                    }   
                    else{
                        setText('SignIn');
                    }
                    }}>
                    <div className={signin ? `bg-dark-gray ml-11 p-3 mx-1 rounded-full transition-all duration-150` : `bg-black p-3 mx-1 rounded-full transition-all duration-150`}>

                    </div>
                </div>
            }
        </div>
        <div className="flex flex-col items-center mt-6 p-5 select-none">
            <div className="p-2">
                <div className="flex items-center">
                    <SiGmail className="p-1 size-6 cursor-pointer" />
                    <label className="ml-1 cursor-pointer" htmlFor="gmail">Gmail</label><br />
                </div>
                <input type="text" value={gmail} id="gmail" className="ml-6 bg-slate-200 rounded-md px-1 py-0.5 outline-none border-2 border-slate-600 cursor-pointer" onChange={(e)=>{setGmail(e.target.value)}}/>
            </div>
            <div className="p-2">
                <div className="flex items-center">
                    <FaUserCircle className="p-1 size-6 cursor-pointer" />
                    <label className="ml-1 cursor-pointer" htmlFor="username">Username</label><br />
                </div>
                <input type="text" value={username} id="username" className="ml-6 bg-slate-200 rounded-md px-1 py-0.5 outline-none border-2 border-slate-600 cursor-pointer" onChange={async (e)=>{ 
                    setUsername(e.target.value);
                    }}/>
            </div>
            <div className="p-2">
                <div className="flex items-center">
                    <RiLockPasswordFill className="p-1 size-6 cursor-pointer" />
                    <label className="ml-1 cursor-pointer" htmlFor="password">Password</label><br />
                </div>
                <input type="text" value={password} id="password" className="ml-6 bg-slate-200 rounded-md px-1 py-0.5 outline-none border-2 border-slate-600 cursor-pointer" onChange={(e)=>{setPassword(e.target.value)}}/>
            </div>
            <div className="p-2">
                <div className="flex items-center">
                    <RiLockPasswordFill className="p-1 size-6 cursor-pointer" />
                    <label className="ml-1 cursor-pointer" htmlFor="Cpassword">Confirm Password</label><br />
                </div>
                <input type="text" value={cpassword} id="Cpassword" className="ml-6 bg-slate-200 rounded-md px-1 py-0.5 outline-none border-2 border-slate-600 cursor-pointer" onChange={(e)=>{setCpassword(e.target.value)}}/>
            </div>
            <div className="text-red-700 font-semibold">
                {error}
            </div>
            <div>
                <button className="bg-light-gray px-5 py-1.5 rounded-lg border-2 border-black text-xl text-light-gray3 mt-8" onClick={sendDataToBackend}>
                    SignUp 
                </button>
            </div>
        </div>
        </div>
    )
}