import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Details() {
  let [name, setName] = useState("");
  let [mobile, setMobile] = useState("");
  let [address, setAddress] = useState("");
  let [education, setEducation] = useState("");
  let [title1, setTitle1] = useState("");
  let [title2, setTitle2] = useState("");
  let [desc1, setdesc1] = useState("");
  let [desc2, setdesc2] = useState("");
  let [link1, setlink1] = useState("");
  let [link2, setlink2] = useState("");
  let [error, setError] = useState("");
  let [github, setGithub] = useState("");
  let [linkedin, setLinkedin] = useState("");
  let [twitter, setTwitter] = useState("");


  const navigate = useNavigate();

  const MakeCard = async () => {
    setError("");
    const token = localStorage.getItem("CATIT");
    if (!token) {
      navigate("/");
    }
    if (name === "") {
      setError("*Fill name");
    } else if (mobile === "") {
      setError("*Fill mobile number");
    } else if (address === "") {
      setError("*Fill address");
    } else if (education === "") {
      setError("*Fill education");
    } else if (!(title1 && link1 && desc1)) {
      setError("*Fill first project title,description and link");
    } else {
      const data = {
        name: name,
        mobile: mobile,
        address: address,
        education: education,
        title1: title1,
        desc1: desc1,
        link1: link1,
        title2: title2,
        desc2: desc2,
        link2: link2,
        github : github,
        linkedin : linkedin,
        twitter : twitter
      };
      const response = await axios.post(
        "http://localhost:8001/api/details",
        data,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      navigate("/card");
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("CATIT");
    if(!token){
      navigate('/');
    }
    else{
      async function getDetails(){
        const response = await axios.get(
          "http://localhost:8001/api/getDetails",
          {
            headers: {
              Authorization: token,
            },
          }
        );
        setName(response.data.name);
        setMobile(response.data.mobile);
        setAddress(response.data.address);
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
      getDetails();
    }
  },[]);

  return (
    <div>
      <div className="bg-slate-300 border-2 border-black rounded-3xl p-6 mb-8 lg:hidden">
        <div className="flex flex-col items-center">
          <div className="text-4xl mb-10">Personal Details</div>
          <div className="p-1 mb-2">
            <div>
              <label htmlFor="name" className="text-xl cursor-pointer">
                Name :{" "}
              </label>
            </div>
            <div>
              <input
                type="text"
                value={name}
                id="name"
                className="border-black border-2 rounded-lg bg-light-gray2 ml-5 p-0.5 w-60 cursor-pointer"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div className="p-1 mb-2">
            <div>
              <label htmlFor="mobile" className="text-xl cursor-pointer">
                Mobile :{" "}
              </label>
            </div>
            <div>
              <input
                type="text"
                value={mobile}
                id="mobile"
                className="border-black border-2 rounded-lg bg-light-gray2 ml-5 p-0.5 w-60 cursor-pointer"
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>
          </div>
          <div className="p-1 mb-2">
            <div>
              <label htmlFor="address" className="text-xl cursor-pointer">
                Address :{" "}
              </label>
            </div>
            <div>
              <input
                type="text"
                value={address}
                id="address"
                className="border-black border-2 rounded-lg bg-light-gray2 ml-5 p-0.5 w-60 cursor-pointer"
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
          </div>
          <div className="p-1 mb-2">
            <div>
              <label htmlFor="education" className="text-xl cursor-pointer">
                Education :{" "}
              </label>
            </div>
            <div>
              <input
                type="text"
                value={education}
                id="education"
                className="border-black border-2 rounded-lg bg-light-gray2 ml-5 p-0.5 w-60 cursor-pointer"
                onChange={(e) => setEducation(e.target.value)}
              />
            </div>
          </div>
          <div className="p-1 mb-2">
            <div>
              <label htmlFor="Github" className="text-xl cursor-pointer">
                Github Link :{" "}
              </label>
            </div>
            <div>
              <input
                type="text"
                value={github}
                id="Github"
                className="border-black border-2 rounded-lg bg-light-gray2 ml-5 p-0.5 w-60 cursor-pointer"
                onChange={(e) => setGithub(e.target.value)}
              />
            </div>
          </div>
          <div className="p-1 mb-2">
            <div>
              <label htmlFor="Twitter" className="text-xl cursor-pointer">
                Twitter Link :{" "}
              </label>
            </div>
            <div>
              <input
                type="text"
                value={twitter}
                id="Twitter"
                className="border-black border-2 rounded-lg bg-light-gray2 ml-5 p-0.5 w-60 cursor-pointer"
                onChange={(e) => setTwitter(e.target.value)}
              />
            </div>
          </div>
          <div className="p-1 mb-2">
            <div>
              <label htmlFor="Linkedin" className="text-xl cursor-pointer">
                Linkedin Link :{" "}
              </label>
            </div>
            <div>
              <input
                type="text"
                value={linkedin}
                id="Linkedin"
                className="border-black border-2 rounded-lg bg-light-gray2 ml-5 p-0.5 w-60 cursor-pointer"
                onChange={(e) => setLinkedin(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="text-4xl my-10">Projects</div>
          <div>
            <div className="p-1 mb-2">
              <div>
                <label htmlFor="project1" className="text-xl cursor-pointer">
                  Title :{" "}
                </label>
              </div>
              <div>
                <input
                  type="text"
                  value={title1}
                  id="project1"
                  className="border-black border-2 rounded-lg bg-light-gray2 ml-5 p-0.5 w-60 cursor-pointer"
                  onChange={(e) => setTitle1(e.target.value)}
                />
              </div>
            </div>
            <div className="p-1 mb-2">
              <div>
                <label htmlFor="p1desc" className="text-xl cursor-pointer">
                  Description :{" "}
                </label>
              </div>
              <div>
                <input
                  type="text"
                  value={desc1}
                  id="p1desc"
                  className="border-black border-2 rounded-lg bg-light-gray2 ml-5 p-0.5 w-60 cursor-pointer"
                  onChange={(e) => setdesc1(e.target.value)}
                />
              </div>
            </div>
            <div className="p-1 mb-2">
              <div>
                <label htmlFor="p1link" className="text-xl cursor-pointer">
                  Link :{" "}
                </label>
              </div>
              <div>
                <input
                  type="text"
                  value={link1}
                  id="p1link"
                  className="border-black border-2 rounded-lg bg-light-gray2 ml-5 p-0.5 w-60 cursor-pointer"
                  onChange={(e) => setlink1(e.target.value)}
                />
              </div>
            </div>
            <div className="p-1 mb-2">
              <div>
                <label htmlFor="project2" className="text-xl cursor-pointer">
                  Title :{" "}
                </label>
              </div>
              <div>
                <input
                  type="text"
                  value={title2}
                  id="project2"
                  className="border-black border-2 rounded-lg bg-light-gray2 ml-5 p-0.5 w-60 cursor-pointer"
                  onChange={(e) => setTitle2(e.target.value)}
                />
              </div>
            </div>
            <div className="p-1 mb-2">
              <div>
                <label htmlFor="p2desc" className="text-xl cursor-pointer">
                  Description :{" "}
                </label>
              </div>
              <div>
                <input
                  type="text"
                  value={desc2}
                  id="p2desc"
                  className="border-black border-2 rounded-lg bg-light-gray2 ml-5 p-0.5 w-60 cursor-pointer"
                  onChange={(e) => setdesc2(e.target.value)}
                />
              </div>
            </div>
            <div className="p-1 mb-2">
              <div>
                <label htmlFor="p2link" className="text-xl cursor-pointer">
                  Link :{" "}
                </label>
              </div>
              <div>
                <input
                  type="text"
                  value={link2}
                  id="p2link"
                  className="border-black border-2 rounded-lg bg-light-gray2 ml-5 p-0.5 w-60 cursor-pointer"
                  onChange={(e) => setlink2(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center text-red-600 font-semibold text-lg">
          {error}
        </div>

        <div className="flex justify-center mt-8">
          <button
            className="bg-blue-400 p-2 rounded-lg border-2 border-blue-800 text-xl"
            onClick={MakeCard}
          >
            Submit
          </button>
        </div>
      </div>

      <div className="hidden lg:block bg-slate-300 rounded-xl border-4 border-dark-gray">
        <div className="grid grid-cols-2">
          
          <div className="col-span-1 p-12">
            <div className="text-4xl mb-10">Personal Details</div>
            <div className="p-1 mb-2">
              <div>
                <label htmlFor="Name" className="text-xl cursor-pointer">
                  Name :{" "}
                </label>
              </div>
              <div>
                <input
                  type="text"
                  value={name}
                  id="Name"
                  className="border-black border-2 rounded-lg bg-light-gray2 ml-5 p-0.5 w-60 cursor-pointer"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div className="p-1 mb-2">
              <div>
                <label htmlFor="Mobile" className="text-xl cursor-pointer">
                  Mobile :{" "}
                </label>
              </div>
              <div>
                <input
                  type="text"
                  value={mobile}
                  id="Mobile"
                  className="border-black border-2 rounded-lg bg-light-gray2 ml-5 p-0.5 w-60 cursor-pointer"
                  onChange={(e) => setMobile(e.target.value)}
                />
              </div>
            </div>
            <div className="p-1 mb-2">
              <div>
                <label htmlFor="Address" className="text-xl cursor-pointer">
                  Address :{" "}
                </label>
              </div>
              <div>
                <input
                  type="text"
                  value={address}
                  id="Address"
                  className="border-black border-2 rounded-lg bg-light-gray2 ml-5 p-0.5 w-60 cursor-pointer"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </div>
            <div className="p-1 mb-2">
              <div>
                <label htmlFor="Education" className="text-xl cursor-pointer">
                  Education :{" "}
                </label>  
              </div>
              <div>
                <input
                  type="text"
                  value={education}
                  id="Education"
                  className="border-black border-2 rounded-lg bg-light-gray2 ml-5 p-0.5 w-60 cursor-pointer"
                  onChange={(e) => setEducation(e.target.value)}
                />
              </div>
            </div>
            <div className="p-1 mb-2">
              <div>
                <label htmlFor="github" className="text-xl cursor-pointer">
                  Github Link :{" "}
                </label>  
              </div>
              <div>
                <input
                  type="text"
                  value={github}
                  id="github"
                  className="border-black border-2 rounded-lg bg-light-gray2 ml-5 p-0.5 w-60 cursor-pointer"
                  onChange={(e) => setGithub(e.target.value)}
                />
              </div>
            </div>
            <div className="p-1 mb-2">
              <div>
                <label htmlFor="linkedin" className="text-xl cursor-pointer">
                  Linkedin Link :{" "}
                </label>  
              </div>
              <div>
                <input
                  type="text"
                  value={linkedin}
                  id="linkedin"
                  className="border-black border-2 rounded-lg bg-light-gray2 ml-5 p-0.5 w-60 cursor-pointer"
                  onChange={(e) => setLinkedin(e.target.value)}
                />
              </div>
            </div>
            <div className="p-1 mb-2">
              <div>
                <label htmlFor="twitter" className="text-xl cursor-pointer">
                  Twitter Link :{" "}
                </label>  
              </div>
              <div>
                <input
                  type="text"
                  value={twitter}
                  id="twitter"
                  className="border-black border-2 rounded-lg bg-light-gray2 ml-5 p-0.5 w-60 cursor-pointer"
                  onChange={(e) => setTwitter(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="col-span-1 p-12">
            <div className="text-4xl mb-10">Projects</div>
            <div>
              <div className="p-1 mb-2">
                <div>
                  <label htmlFor="Project1" className="text-xl cursor-pointer">
                    Title :{" "}
                  </label>
                </div>
                <div>
                  <input
                    type="text"
                    value={title1}
                    id="Project1"
                    className="border-black border-2 rounded-lg bg-light-gray2 ml-5 p-0.5 w-60 cursor-pointer"
                    onChange={(e) => setTitle1(e.target.value)}
                  />
                </div>
              </div>
              <div className="p-1 mb-2">
                <div>
                  <label htmlFor="P1desc" className="text-xl cursor-pointer">
                    Description :{" "}
                  </label>
                </div>
                <div>
                  <input
                    type="text"
                    value={desc1}
                    id="P1desc"
                    className="border-black border-2 rounded-lg bg-light-gray2 ml-5 p-0.5 w-60 cursor-pointer"
                    onChange={(e) => setdesc1(e.target.value)}
                  />
                </div>
              </div>
              <div className="p-1 mb-2">
                <div>
                  <label htmlFor="P1link" className="text-xl cursor-pointer">
                    Link :{" "}
                  </label>
                </div>
                <div>
                  <input
                    type="text"
                    value={link1}
                    id="P1link"
                    className="border-black border-2 rounded-lg bg-light-gray2 ml-5 p-0.5 w-60 cursor-pointer"
                    onChange={(e) => setlink1(e.target.value)}
                  />
                </div>
              </div>
              <div className="p-1 mb-2">
                <div>
                  <label htmlFor="Project2" className="text-xl cursor-pointer">
                    Title :{" "}
                  </label>
                </div>
                <div>
                  <input
                    type="text"
                    value={title2}
                    id="Project2"
                    className="border-black border-2 rounded-lg bg-light-gray2 ml-5 p-0.5 w-60 cursor-pointer"
                    onChange={(e) => setTitle2(e.target.value)}
                  />
                </div>
              </div>
              <div className="p-1 mb-2">
                <div>
                  <label htmlFor="P2desc" className="text-xl cursor-pointer">
                    Description :{" "}
                  </label>
                </div>
                <div>
                  <input
                    type="text"
                    value={desc2}
                    id="P2desc"
                    className="border-black border-2 rounded-lg bg-light-gray2 ml-5 p-0.5 w-60 cursor-pointer"
                    onChange={(e) => setdesc2(e.target.value)}
                  />
                </div>
              </div>
              <div className="p-1 mb-2">
                <div>
                  <label htmlFor="P2link" className="text-xl cursor-pointer">
                    Link :{" "}
                  </label>
                </div>
                <div>
                  <input
                    type="text"
                    value={link2}
                    id="P2link"
                    className="border-black border-2 rounded-lg bg-light-gray2 ml-5 p-0.5 w-60 cursor-pointer"
                    onChange={(e) => setlink2(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex justify-center text-red-600 font-semibold text-lg mt-8">
                {error}
              </div>

              <div className="flex justify-center mt-4">
                <button
                  className="bg-blue-400 p-2 rounded-lg border-2 border-blue-800 text-xl"
                  onClick={MakeCard}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
