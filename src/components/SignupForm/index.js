import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as UserActions from "../../api/UserActions";
import { createToken } from "../../Tools/TokenAction";

/* setToken is there yet */
// import { setToken } from "../../Tools/TokenAction";

const SignupForm = () => {
    // State Variables
    const history = useHistory();
    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    // Functions
    const handleSubmit = async (event) => {
        event.preventDefault();

        // Let's ensure the email is valid format before sending the data to the backend.
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (Email.match(regexEmail)) {
            const newUser = { Name, Email, Password };
        
            // Make Backend Call to Create User
            const res = await UserActions.make(newUser);
    
            // Extract Token
            if (res.data.data) {
                if (res.data.data.token) {
                    const token = res.data.data.token;
                    createToken(token);
                    setName("");
                    setEmail("");
                    setPassword("");
                    history.push('/login');
                }
            } else {
                return alert("Server Error");
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