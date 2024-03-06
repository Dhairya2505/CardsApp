import { useState } from "react"

export default function Dashboardpage(){


    const [name,setName] = useState('');
    const [mobile,setMobile] = useState('');
    const [gender,setGender] = useState('');
    const [address,setAddress] = useState('');
    const [email,setEmail] = useState('');
    const [education,setEducation] = useState('');
    const [title1,setTitle1] = useState('');
    const [title2,setTitle2] = useState('');
    const [desc1,setdesc1] = useState('');
    const [desc2,setdesc2] = useState('');
    const [link1,setlink1] = useState('');
    const [link2,setlink2] = useState('');

    const MakeCard = () => {
        console.log(name,mobile,gender,address,email,education,title1,title2,desc1,desc2,link1,link2);
    }

    return(
        <div className="border-2 border-black p-3">
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
                <div>
                    <label htmlFor="" className="text-xl cursor-pointer">Gender : </label> 
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
                    <label htmlFor="email" className="text-xl cursor-pointer">Email : </label>
                </div>
                <div>
                    <input type="text" value={email} id="email" className="border-black border-2 rounded-lg bg-light-gray2 ml-10 p-0.5 w-60 cursor-pointer" onChange={
                        (e) => setEmail(e.target.value) 
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
            
            <div>
                <div>
                    Projects
                </div>
                <div>
                    <div>
                        <label htmlFor="project1">Title : </label>
                        <input type="text" value={title1} id="project1" onChange={
                            (e) => setTitle1(e.target.value) 
                            }/>
                    </div>
                    <div>
                        <label htmlFor="p1desc">Description : </label>
                        <input type="text" value={desc1} id="p1desc" onChange={
                            (e) => setdesc1(e.target.value) 
                            }/>
                    </div>
                    <div>
                        <label htmlFor="p1link">Link : </label>
                        <input type="text" value={link1} id="p1link" onChange={
                            (e) => setlink1(e.target.value) 
                            }/>
                    </div>
                    <div>
                        <label htmlFor="project2">Title : </label>
                        <input type="text" value={title2} id="project2" onChange={
                            (e) => setTitle2(e.target.value) 
                            }/>
                    </div>
                    <div>
                        <label htmlFor="p2desc">Description : </label>
                        <input type="text" value={desc2} id="p2desc" onChange={
                            (e) => setdesc2(e.target.value) 
                            }/>
                    </div>
                    <div>
                        <label htmlFor="p2link">Link : </label>
                        <input type="text" value={link2} id="p2link" onChange={
                            (e) => setlink2(e.target.value) 
                            }/>
                    </div>
                </div>
            </div>
            <div>
                <button onClick={MakeCard}>Submit</button>
            </div>
        </div>
    )
}