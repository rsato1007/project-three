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
    const handleSubmit = async (event) => {
        /* Bug Notes: It appears the data isn't being sent to the backend properly */
        event.preventDefault();

        // Let's ensure the email is valid format before sending the data to the backend.
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (Email.match(regexEmail)) {
            const newUser = { Name, Email, Password };
        
            // Make Backend Call to Create User
            const res = await UserActions.make(newUser);
    
            /* our data isn't being processed correctly because of something down the pipeline. */
            console.log("This is the response:", res);
    
            // Extract Token
            if (res.data.data) {
                console.log("Good news everybody!");
                if (res.data.data.token) {
                }
            } else {
                return console.log("Server Error");
            }; 
        } else {
          return alert("Invalid Email"); 
        }
    }

    // Page Render
    return (
        <form className="signup-inputs" onSubmit={(e) => handleSubmit(e)}>
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
            <button type="submit">Create Account</button>
        </form>
    )
}

export default SignupForm