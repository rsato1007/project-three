import React, { useState } from 'react';
import { useHistory, Link } from "react-router-dom";
import * as UserActions from "../../api/UserActions";
import { createToken } from "../../Tools/TokenAction";
import { GoogleLogin } from 'react-google-login';
import axios from 'axios';


const LoginForm = () => {
    const history = useHistory();
    //allows form to set username and password
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    const responseGoogle = (response) => {
        console.log(response);
        axios({
          method: "POST",
          url: "http://localhost:5000/api/googlelogin",
          data: {tokenId: response.tokenId}
        })
      };

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
            const token = res.data.data.token;
            createToken(token);
            setEmail("");
            setPassword("");
            history.push("/commons");
        } else {
            alert('Login Error, try again');
        }
    };

    return (
        <div className="login-form">
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
                <div>
                <GoogleLogin
                    clientId="171760147395-f8qjda0lvn765bo9rsbifb6gp5q0hvu9.apps.googleusercontent.com"
                    buttonText="Login with Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
                </div>
            </form>
            <Link to="/">
                Sign Up
            </Link>
        </div>
    )
};

export default LoginForm