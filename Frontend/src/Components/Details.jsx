import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Details() {
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
  const [error, setError] = useState("");
  const [github, setGithub] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [twitter, setTwitter] = useState("");


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
    } else if (gender === "") {
      setError("*Select gender");
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
        gender: gender,
        address: address,
        education: education,
        title1: title1,
        desc1: desc1,
        link1: link1,
        title2: title2,
        desc2: desc2,
        link2: link2,
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
            <div className="">
              <label className="text-xl cursor-pointer ">
                Gender :{" "}
              </label>
            </div>
            <div className="ml-12">
              <input
                type="radio"
                name="gender"
                id="Male"
                value="Male"
                onChange={(e) => setGender(e.target.value)}
                className="cursor-pointer"
              />
              <label htmlFor="Male" className="cursor-pointer text-lg p-1">
                Male
              </label>
              <input
                type="radio"
                name="gender"
                id="Female"
                value="Female"
                onChange={(e) => setGender(e.target.value)}
                className="cursor-pointer"
              />
              <label htmlFor="Female" className="cursor-pointer text-lg p-1">
                Female
              </label>
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
              <label htmlFor="education" className="text-xl cursor-pointer">
                Github Link :{" "}
              </label>
            </div>
            <div>
              <input
                type="text"
                value={github}
                id="education"
                className="border-black border-2 rounded-lg bg-light-gray2 ml-5 p-0.5 w-60 cursor-pointer"
                onChange={(e) => setGithub(e.target.value)}
              />
            </div>
          </div>
          <div className="p-1 mb-2">
            <div>
              <label htmlFor="education" className="text-xl cursor-pointer">
                Twitter Link :{" "}
              </label>
            </div>
            <div>
              <input
                type="text"
                value={twitter}
                id="education"
                className="border-black border-2 rounded-lg bg-light-gray2 ml-5 p-0.5 w-60 cursor-pointer"
                onChange={(e) => setTwitter(e.target.value)}
              />
            </div>
          </div>
          <div className="p-1 mb-2">
            <div>
              <label htmlFor="education" className="text-xl cursor-pointer">
                Linkedin Link :{" "}
              </label>
            </div>
            <div>
              <input
                type="text"
                value={linkedin}
                id="education"
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
        <div className="grid grid-cols-2 place-items-center">
          
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
              <div className="">
                <label className="text-xl cursor-pointer ">
                  Gender :{" "}
                </label>
              </div>
              <div className="ml-12">
                <input
                  type="radio"
                  name="gender"
                  id="male"
                  value="Male"
                  onChange={(e) => setGender(e.target.value)}
                  className="cursor-pointer"
                />
                <label htmlFor="male" className="cursor-pointer text-lg p-1">
                  Male
                </label>
                <input
                  type="radio"
                  name="gender"
                  id="female"
                  value="Female"
                  onChange={(e) => setGender(e.target.value)}
                  className="cursor-pointer"
                />
                <label htmlFor="female" className="cursor-pointer text-lg p-1">
                  Female
                </label>
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
