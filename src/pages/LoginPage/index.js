import React, { useState } from "react";
// import { Username_Password, Email, Submit  } from "../../components";
//forms for login page
const LoginPage = () => {
    //allows form to set username and password
    const [Name, setName] = useState("");
    const [Password, setPassword] = useState("");

    const handleSubmit = async () => {
        const user = {
            Name,
            Password,
        };
        console.log(user);
        //fill with relevant code when hooked to back-end user api.
    };
    
    //what actually gets rendered on the page
    return (
        <div className="login-form">
            <div>Testing LoginPage</div>
        </div>
    )
}

export default LoginPage;