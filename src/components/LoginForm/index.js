import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import * as UserActions from "../../api/UserActions";
// import { setToken } from "../../Tools/TokenAction";

const LoginForm = () => {
    const history = useHistory();
    //allows form to set username and password
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        /* We could also add the regex here to determine if the user typed a valid email address or not */

        /* We'll use email since usernames might be duplicate */
        const user = {
            Email,
            Password,
        };

        //fill with relevant code when hooked to back-end user api.
        const res = await UserActions.login(user);

        if (res.data.correct) {
            console.log(res);
            const token = res.data.data.token;
            // setToken(token);
            setEmail("");
            setPassword("");
            history.push("/");
        } else {
            alert('Login Error, try again');
        }
    };

    return (
        <form className="login-inputs" onSubmit={(e) => handleSubmit(e)}>
            <input 
                onChange={(e) => setEmail(e.target.value)}
                value={Email}
                type="text"
                name="Email"
                placeholder="EMAIL"
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