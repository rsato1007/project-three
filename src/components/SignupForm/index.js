import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as UserActions from "../../api/UserActions";
import { setToken } from "../../Tools/TokenAction";

const SignupForm = () => {
    // State Variables
    const history = useHistory();
    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    // Functions
    const handleSubmit = async () => {
        const newUser = { Name, Email, Password };
        
        // Make Backend Call to Create User
        const res = await UserActions.make(newUser);

        /* our data isn't being processed correctly because of something down the pipeline. */
        console.log("This is the response data:", res.data);

        // Extract Token
        if (res.data.data) {
            console.log("Good news everybody!");
            if (res.data.data.token) {
            }
        } else {
            alert("Server Error");
        }
    }

    // Page Render
    return (
        <form className="signup-inputs" onClick={handleSubmit}>
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
            <button type={handleSubmit}>Create Account</button>
        </form>
    )
}

export default SignupForm