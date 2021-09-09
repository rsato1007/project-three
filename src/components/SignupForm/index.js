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
        let newUser = { Name, Email, Password };
        console.log(history);
        // Redirects to the specified URL
        history.push("/api/corgi");
        
        // Make Backend Call to Create User
        const res = await UserActions.make(newUser);
        console.log(res);

        // Extract Token
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
}

export default SignupForm