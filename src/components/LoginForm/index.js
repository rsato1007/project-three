import React, { useState } from 'react';

const LoginForm = () => {
    //allows form to set username and password
    const [Name, setName] = useState("");
    const [Password, setPassword] = useState("");

    const handleSubmit = async () => {
        const user = {
            Name,
            Password,
        };
        console.log(user);
        //fill with relevant code when hooked to back-end user api.
    };

    return (
        <div>Testing LoginPage Works!</div>
    )
};

export default LoginForm