import React, { useState } from 'react';

const SignupForm = () => {
    // State Variables
    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    // Functions
    const handleSubmit = async () => {
        let newUser = { Name, Email, Password };
        
        // Make Backend Call to Create User

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