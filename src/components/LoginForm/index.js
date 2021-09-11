import React, { useState } from 'react';
import * as UserActions from "../../api/UserActions";

const LoginForm = () => {
    //allows form to set username and password
    const [Name, setName] = useState("");
    const [Password, setPassword] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        const user = {
            Name,
            Password,
        };

        //fill with relevant code when hooked to back-end user api.
        const res = await UserActions.login(user);

        console.log("This is the response I got:", res.data.correct);

        if (res.data.correct === false) {
            alert("Login Failed, Try Again");
        }
    };

    return (
        <form className="login-inputs" onSubmit={(e) => handleSubmit(e)}>
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
            <button type="submit">Login</button>
        </form>
    )
};

export default LoginForm