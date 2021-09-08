import React, { useState } from "react";
import { Username_Password, Email, Submit } from "../../components/index";

const SignupPage = () => {
    const [email, setEmail] = useState("");
    const [buttonText, setButtonText] = useState ("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div>
            <Username_Password setName={setName} setPassword={setPassword} />
            <Email email={email}/>
            <Submit buttonText={buttonText}/>
        </div>
    )
}

export default SignupPage;