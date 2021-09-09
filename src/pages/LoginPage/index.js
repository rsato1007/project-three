import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Username_Password } from "../../components";
import "./styles.css";
//still needs token and user imports

const login = () => {
    const history = useHistory();
    const [Name, setName] = useState("");
    const [Password, setPassword] = useState("");

    //submit function
    const handleSubmit = async () => {
        const user = {
            Name,
            Password,
        };

        //interacts with user api to generate token
        const res = await User.login(user);
        if (res.data.data) {
            const token = res.data.data.token;
            console.log("Login made this! ", token);
            setToken(token);
            setName("");
            setPassword("");
            history.push("/");
        }
        else {
            alert("Oops! All Errors!");
        }
    };

    //what actually gets rendered to the user
    return (
        <div className="Login-inputs">
            <input 
                className="Name"
                type="username"
                onChange={(e) => setName(e.target.value)}
                value={Name}
                title="username"
                placeholder="Username"
            />
            <input 
                className="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={Password}
                title="password"
                placeholder={"Password"}
            />
            <button className="submit" onClick={handleSubmit}>Login</button>

        </div>
    );
};

export default login;