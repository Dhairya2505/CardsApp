import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function Details(){


    const [name,setName] = useState('');
    const [mobile,setMobile] = useState('');
    const [gender,setGender] = useState('');
    const [address,setAddress] = useState('');
    const [education,setEducation] = useState('');
    const [title1,setTitle1] = useState('');
    const [title2,setTitle2] = useState('');
    const [desc1,setdesc1] = useState('');
    const [desc2,setdesc2] = useState('');
    const [link1,setlink1] = useState('');
    const [link2,setlink2] = useState('');

    const navigate = useNavigate();

    const MakeCard = async () => {
        // console.log(name,mobile,gender,address,email,education,title1,title2,desc1,desc2,link1,link2);
        const token = localStorage.getItem('CATIT');
        if(!token){
            navigate('/');
        }
        const data = {
            name : name,
            mobile : mobile,
            gender : gender,
            address : address,
            education : education,
            title1 : title1,
            desc1 : desc1,
            link1 : link1,
            title2 : title2,
            desc2 : desc2,
            link2 : link2
        }
        const response = await axios.post('http://localhost:8001/api/details',data,{ 
            headers : {
                Authorization : token
            }
         });
        navigate('/card');
    }

    return(
        <div className="border-2 border-black rounded-3xl p-6 mb-8">
            <div className="flex flex-col items-center">
                <div className="text-4xl mb-10">
                        Personal Details
                    </div>
                <div className="p-1 mb-2">
                    <div>
                        <label htmlFor="name" className="text-xl cursor-pointer">Name : </label>
                    </div>
                    <div>
                        <input type="text" value={name} id="name" className="border-black border-2 rounded-lg bg-light-gray2 ml-10 p-0.5 w-60 cursor-pointer" onChange={
                            (e) => setName(e.target.value) 
                            }/>
                    </div>
                </div>
                <div className="p-1 mb-2">
                    <div>
                        <label htmlFor="mobile" className="text-xl cursor-pointer">Mobile : </label>
                    </div>
                    <div>
                        <input type="text" value={mobile} id="mobile" className="border-black border-2 rounded-lg bg-light-gray2 ml-10 p-0.5 w-60 cursor-pointer" onChange={
                            (e) => setMobile(e.target.value) 
                            }/>
                    </div>
                </div>
                <div className="p-1 mb-2">
                    <div className="">
                        <label htmlFor="" className="text-xl cursor-pointer ">Gender : </label> 
                    </div>
                    <div className="ml-10 mb-2">
                        <input type="radio" name="gender" id="Male" value="Male" onChange={(e) => setGender(e.target.value)} className="cursor-pointer"/>
                        <label htmlFor="Male" className="cursor-pointer text-lg p-1">Male</label>
                        <input type="radio" name="gender" id="Female" value="Female" onChange={(e) => setGender(e.target.value)} className="cursor-pointer"/>
                        <label htmlFor="Female" className="cursor-pointer text-lg p-1">Female</label>
                    </div>
                </div>
                <div className="p-1 mb-2">
                    <div>
                        <label htmlFor="address" className="text-xl cursor-pointer">Address : </label>
                    </div>
                    <div>
                        <input type="text" value={address} id="address" className="border-black border-2 rounded-lg bg-light-gray2 ml-10 p-0.5 w-60 cursor-pointer" onChange={
                            (e) => setAddress(e.target.value) 
                            }/>
                    </div>
                </div>
                <div className="p-1 mb-2">
                    <div>
                        <label htmlFor="education" className="text-xl cursor-pointer">Education : </label>
                    </div>
                    <div>
                        <input type="text" value={education} id="education" className="border-black border-2 rounded-lg bg-light-gray2 ml-10 p-0.5 w-60 cursor-pointer" onChange={
                            (e) => setEducation(e.target.value) 
                            }/>
                    </div>
                </div>
            </div>
            
            <div className="flex flex-col items-center">
                <div className="text-4xl my-10">
                    Projects
                </div>
                <div>
                    <div className="p-1 mb-2">
                        <div>
                            <label htmlFor="project1" className="text-xl cursor-pointer">Title : </label>
                        </div>
                        <div>
                            <input type="text" value={title1} id="project1" className="border-black border-2 rounded-lg bg-light-gray2 ml-10 p-0.5 w-60 cursor-pointer" onChange={
                                (e) => setTitle1(e.target.value) 
                                }/>
                        </div>
                    </div>
                    <div className="p-1 mb-2">
                        <div>
                            <label htmlFor="p1desc" className="text-xl cursor-pointer">Description : </label>
                        </div>
                        <div>
                            <input type="text" value={desc1} id="p1desc" className="border-black border-2 rounded-lg bg-light-gray2 ml-10 p-0.5 w-60 cursor-pointer" onChange={
                                (e) => setdesc1(e.target.value) 
                                }/>
                        </div>
                    </div>
                    <div className="p-1 mb-2">
                        <div>
                            <label htmlFor="p1link" className="text-xl cursor-pointer">Link : </label>
                        </div>
                        <div>
                            <input type="text" value={link1} id="p1link" className="border-black border-2 rounded-lg bg-light-gray2 ml-10 p-0.5 w-60 cursor-pointer" onChange={
                                (e) => setlink1(e.target.value) 
                                }/>
                        </div>
                    </div>
                    <div className="p-1 mb-2">
                        <div>
                            <label htmlFor="project2" className="text-xl cursor-pointer">Title : </label>
                        </div>
                        <div>
                            <input type="text" value={title2} id="project2" className="border-black border-2 rounded-lg bg-light-gray2 ml-10 p-0.5 w-60 cursor-pointer" onChange={
                                (e) => setTitle2(e.target.value) 
                                }/>
                        </div>
                    </div>
                    <div className="p-1 mb-2">
                        <div>
                            <label htmlFor="p2desc" className="text-xl cursor-pointer">Description : </label>
                        </div>
                        <div>
                            <input type="text" value={desc2} id="p2desc" className="border-black border-2 rounded-lg bg-light-gray2 ml-10 p-0.5 w-60 cursor-pointer" onChange={
                                (e) => setdesc2(e.target.value) 
                                }/>
                        </div>
                    </div>
                    <div className="p-1 mb-2">
                        <div>
                            <label htmlFor="p2link" className="text-xl cursor-pointer">Link : </label>
                        </div>
                        <div>
                            <input type="text" value={link2} id="p2link" className="border-black border-2 rounded-lg bg-light-gray2 ml-10 p-0.5 w-60 cursor-pointer" onChange={
                                (e) => setlink2(e.target.value) 
                                }/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-8">
                <button className="bg-blue-400 p-2 rounded-lg border-2 border-blue-800 text-xl" onClick={MakeCard}>Submit</button>
            </div>
        </div>
    )
}