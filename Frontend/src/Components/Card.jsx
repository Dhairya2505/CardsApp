import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Card(){
    
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [gender, setGender] = useState("");
    const [address, setAddress] = useState("");
    const [education, setEducation] = useState("");
    const [title1, setTitle1] = useState("");
    const [title2, setTitle2] = useState("");
    const [desc1, setdesc1] = useState("");
    const [desc2, setdesc2] = useState("");
    const [link1, setlink1] = useState("");
    const [link2, setlink2] = useState("");
    const [email, setemail] = useState("");
    const [github, setGithub] = useState("ff");
    const [linkedin, setLinkedin] = useState("ff");
    const [twitter, setTwitter] = useState("ff");

    const navigate = useNavigate();

    useEffect(() => {
        const getdata = async () => {
            let bearerToken = null;
            try {
                bearerToken = localStorage.getItem('CATIT');
                if (!bearerToken) {
                    navigate("/");
                }
            } catch (error) {
                navigate("/");
            }
            const response = await axios.get('http://localhost:8001/api/getDetails',{
                headers : {
                    Authorization : bearerToken
                }
            })
            setName(response.data.name);
            setMobile(response.data.mobile);
            setGender(response.data.gender);
            setAddress(response.data.address);
            setEducation(response.data.education);
            setTitle1(response.data.title1);
            setTitle2(response.data.title2);
            setdesc1(response.data.desc1);
            setdesc2(response.data.desc2);
            setlink1(response.data.link1);
            setlink2(response.data.link2);
            setemail(response.data.email);
            setGithub(response.data.github);
            setLinkedin(response.data.linkedin);
            setTwitter(response.data.twitter);
        }
        getdata();
        
    },[])

    return (
        <div>
            <div className="lg:hidden">
                <div className="">

                    <div>
                        {name}
                    </div>

                    <div>
                        {mobile}
                    </div>

                    <div>
                        {email}
                    </div>
                    
                    <div>
                        {address}
                    </div>

                    <div>
                        {education}
                    </div>
                    
                    <div className="grid grid-cols-3">
                        {
                            github !== "" && 
                            <div className="">
                                <button>Github</button>
                            </div>
                        }
                        {
                            linkedin !== "" &&
                            <div>
                                <button>Linkedin</button>
                            </div>
                        }
                        {
                            twitter !== "" &&
                            <div>
                                <button>Twitter</button>
                            </div>
                        }
                    </div>

                    <div>
                        <div>
                            Projects
                        </div>
                        <div>
                            <div>
                                <a href={`${link1}`}>{title1}</a>
                            </div>
                            <div className="w-60">
                                {desc1}
                            </div>
                            <div>
                            <a href={`${link2}`}>{title2}</a>
                            </div>
                            <div>
                                {desc2}
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <div className="hidden lg:block">
                Ok
            </div>
        </div>
    )
}