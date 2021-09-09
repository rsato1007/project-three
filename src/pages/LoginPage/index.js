import React, { useState } from "react";
<<<<<<< Updated upstream
import { useHistory } from "react-router-dom";
import "./styles.css";
import * as UserActions from "../../api/UserActions";
import { createToken } from "../../Tools/TokenAction";

const login = () => {
    const history = useHistory();
    const [Name, setName] = useState("");
    const [Password, setPassword] = useState("");

    //submit function
=======
import { Username_Password, Email, Submit  } from "../../components";
//forms for login page
const LoginPage = () => {
    //allows form to set username and password
    const [Name, setName] = useState("");
    const [Password, setPassword] = useState("");

>>>>>>> Stashed changes
    const handleSubmit = async () => {
        const user = {
            Name,
            Password,
        };
<<<<<<< Updated upstream

        //interacts with user api to generate token
        const res = await UserActions.login(user);
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
=======
        console.log(user);
        //fill with relevant code when hooked to back-end user api.
    };
    
    //what actually gets rendered on the page
    return (
        <div className="login-form">
            <Username_Password setName={setName} setPassword={setPassword} />
            <Submit onClick={handleSubmit} buttonText="test" />
        </div>
    )
}
>>>>>>> Stashed changes
