import React, { useState } from "react";
import { Username_Password, Email, Submit } from "../../components/index";

const SignupPage = () => {
    const [email, setEmail] = useState("");
    const [buttonText, setButtonText] = useState ("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = () => {
        console.log("this way works too!")
    }

    return (
        <div>
            <Username_Password setName={setName} setPassword={setPassword} />
            <Email email={email}/>
            <Submit buttonText={"button"} handleSubmit={handleSubmit}/>
        </div>
    )
}

export default SignupPage;