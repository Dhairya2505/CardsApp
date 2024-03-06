import Signin from "./SignIn";
import Signup from "./SignUp";

import { useState } from "react";

export default function SigninSignup() {

    const [signin,setSignin] =useState(false);
    const [text,setText] = useState('SignUp');

    return (
        <div className="flex justify-center">
            <Signin signin={signin} setSignin={setSignin} text={text} setText={setText} />
            <Signup signin={signin} setSignin={setSignin} text={text} setText={setText}  />
        </div>
    )
}