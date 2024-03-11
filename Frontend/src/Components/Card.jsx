import { IoMdHome } from "react-icons/io";
import { FaPhoneAlt, FaPencilAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Card(){
    
    const [name, setName] = useState("Dhairya Singla");
    const [mobile, setMobile] = useState("8076311782");
    const [email, setEmail] = useState("dhairyasingla250504@gmail.com");
    const [address, setAddress] = useState("Shalimar Garden, Extn-2, Sahibabad, Ghaziabad");
    const [education, setEducation] = useState("Btech CSE");
    const [title1, setTitle1] = useState("Cards App");
    const [title2, setTitle2] = useState("Cards App");
    const [desc1, setdesc1] = useState("This is a kind of CV making website in which user will signIn and store their details and the website will make a well defined CV for them which will have dynamic links for their projects or social media handles and can also share this as it is.");
    const [desc2, setdesc2] = useState("This is a kind of CV making website in which user will signIn and store their details and the website will make a well defined CV for them which will have dynamic links for their projects or social media handles and can also share this as it is.");
    const [link1, setlink1] = useState("http://localhost:5173/");
    const [link2, setlink2] = useState("http://localhost:5173/");
    const [github, setGithub] = useState("ff");
    const [linkedin, setLinkedin] = useState("ff");
    const [twitter, setTwitter] = useState("ff");

    const navigate = useNavigate();

    useEffect(() => {
        const getdata = async () => {
            let token = null;
            try {
                token = localStorage.getItem('CATIT');
                if (!token) {
                    navigate("/");
                }
            } catch (error) {
                navigate("/");
            }
            const response = await axios.get('http://localhost:8001/api/getDetails',{
                headers : {
                    Authorization : token
                }
            });
            setName(response.data.name);
            setMobile(response.data.mobile);
            setAddress(response.data.address);
            setEmail(response.data.email);
            setEducation(response.data.education);
            setTitle1(response.data.title1);
            setTitle2(response.data.title2);
            setdesc1(response.data.desc1);
            setdesc2(response.data.desc2);
            setlink1(response.data.link1);
            setlink2(response.data.link2);
            setGithub(response.data.github);
            setLinkedin(response.data.linkedin);
            setTwitter(response.data.twitter);
        }
        getdata();
        
    },[])

    return (
        <div>
            <div className="lg:hidden">
                <div className="border-2 border-black p-10 m-5 rounded-2xl bg-light-gray3">

                    <div className="text-3xl pb-3 font-black">
                        {name.toUpperCase()}
                    </div>

                    <div className="flex items-center py-1">
                        <FaPhoneAlt className="size-6 p-1" />
                        {mobile}
                    </div>

                    <div className="flex items-center py-1">
                        <MdEmail className="size-6 p-1" />
                        {email}
                    </div>
                    
                    <div className="flex w-72 py-1">
                        <IoMdHome className="size-8 p-1" />
                        {address}
                    </div>

                    <div className="flex w-72 py-4 font-bold">
                        <FaPencilAlt className="size-6 p-1" />
                        {education}
                    </div>
                    
                    <div className="grid grid-cols-3 justify-items-center md:flex">
                        {
                            github !== "" && 
                            <div className="text-white">
                                <button className="bg-blue-500 border-blue-950 border-2 md:mr-5 rounded-md text-xl p-2">Github</button>
                            </div>
                        }
                        {
                            linkedin !== "" &&
                            <div className="text-white">
                                <button className="bg-blue-500 border-blue-950 border-2 md:mr-5 rounded-md text-xl p-2">Linkedin</button>
                            </div>
                        }
                        {
                            twitter !== "" &&
                            <div className="text-white">
                                <button className="bg-blue-500 border-blue-950 border-2 rounded-md text-xl p-2">Twitter</button>
                            </div>
                        }
                    </div>

                    <div>
                        <div className="flex justify-center py-3 pt-12 font-extrabold text-4xl">
                            Projects
                        </div>
                        <div>
                            { title1 !== '' && 
                                <div>
                                    <div className="font-bold py-1">
                                        <a href={`${link1}`} className="flex"><div>
                                            1.
                                            </div>
                                            <div className="underline">
                                                {title1}
                                            </div>
                                        </a>
                                    </div>
                                    <div className=" pl-4">
                                        {desc1}
                                    </div>
                                </div>
                            }

                            { title2 !== '' && 
                                <div>
                                    <div className="font-bold py-1">
                                        <a href={`${link2}`} className="flex"><div>
                                            2.
                                            </div>
                                            <div className="underline">
                                                {title2}
                                            </div>
                                        </a>
                                    </div>
                                    <div className=" pl-4">
                                        {desc2}
                                    </div>
                                </div>
                            }
                        </div>

                    </div>

                </div>
            </div>
            <div className="hidden lg:block pt-12">
                <div className="grid grid-cols-2 justify-items-center content-center border-2 border-black p-8 rounded-2xl bg-light-gray3">
                    <div className="p-5">
                        <div className="text-3xl pb-3 font-black">
                            {name.toUpperCase()}
                        </div>

                        <div className="flex items-center py-1">
                            <FaPhoneAlt className="size-6 p-1" />
                            {mobile}
                        </div>

                        <div className="flex items-center py-1">
                            <MdEmail className="size-6 p-1" />
                            {email}
                        </div>
                        
                        <div className="flex w-72 py-1">
                            <IoMdHome className="size-8 p-1" />
                            {address}
                        </div>

                        <div className="flex w-72 py-4 font-bold">
                            <FaPencilAlt className="size-6 p-1" />
                            {education}
                        </div>
                        
                        <div className="grid grid-cols-3 justify-items-center">
                            {
                                github !== "" && 
                                <div className="text-white">
                                    <button className="bg-blue-500 border-blue-950 border-2 rounded-md text-xl p-2">Github</button>
                                </div>
                            }
                            {
                                linkedin !== "" &&
                                <div className="text-white">
                                    <button className="bg-blue-500 border-blue-950 border-2 rounded-md text-xl p-2">Linkedin</button>
                                </div>
                            }
                            {
                                twitter !== "" &&
                                <div className="text-white">
                                    <button className="bg-blue-500 border-blue-950 border-2 rounded-md text-xl p-2">Twitter</button>
                                </div>
                            }
                        </div>
                    </div>
                    
                    <div className="border-l-2 border-black p-5">
                        <div className="flex justify-center pb-3 font-extrabold text-4xl">
                            Projects
                        </div>
                        <div >
                            { title1 !== '' && 
                                <div>
                                    <div className="font-bold py-1">
                                        <a href={`${link1}`} className="flex"><div>
                                            1.
                                            </div>
                                            <div className="underline">
                                                {title1}
                                            </div>
                                        </a>
                                    </div>
                                    <div className="w-96 pl-4">
                                        {desc1}
                                    </div>
                                </div>
                            }

                            { title2 !== '' && 
                                <div>
                                    <div className="font-bold py-1">
                                        <a href={`${link2}`} className="flex"><div>
                                            2.
                                            </div>
                                            <div className="underline">
                                                {title2}
                                            </div>
                                        </a>
                                    </div>
                                    <div className="w-96 pl-4">
                                        {desc2}
                                    </div>
                                </div>
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}