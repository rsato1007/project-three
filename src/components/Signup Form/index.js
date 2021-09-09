import { response } from 'express';
import React, { useState } from 'react';
/* Saving the below for reference for later */
// import * as UserService from "../../api/UserService";
// import { useHistory } from "react-router-dom";
// import { setToken } from "../../utils/tokenService";

/* maybe set should state variables on signup page */

const SignupForm = () => {
    // State Variables
    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    // Functions
    const handleSubmit = async () => {
        let newUser = { Name, Email, Password};
        // Make call to backend to create user

        // Extract Token
        if (res.data.data) {
            console.log(res.data.data);
            // if (res.data.data.token) {
            //     const token = res.data.data.token;
            //     setToken(token);
            //     setFirstName("");
            //     setLastName("");
            //     setEmail("");
            //     setPassword("");
            //     //redirect to home
            //     history.push("/");
            // }
        } else {
            alert("Server Error");
        }
    }

    // Page Render
    return (
        <div className="signup-inputs">
            <input 
                onChange={(e) => setEmail(e.target.value)}
                value={Email}
                type="email"
                name="Email"
                placeholder="EMAIL"
            />
            <input 
                onChange={(e) => setName(e.target.value)}
                value={Name}
                type="text"
                name="Name"
                placeholder="USERNAME"
            />
            <input 
                onChange={(e) => setPassword(e.target.value)}
                value={Password}
                type="password"
                name="Password"
                placeholder="PASSWORD"
            />
            <button onClick={handleSubmit}>Create Account</button>
        </div>
    )
};

export default SignupForm;