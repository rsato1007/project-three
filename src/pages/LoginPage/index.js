import React, { useState } from "react";
import LoginForm from "../../components/LoginForm";
// import { Username_Password, Email, Submit  } from "../../components";
//forms for login page
const LoginPage = () => {    
    //what actually gets rendered on the page
    return (
        <div className="login-page">
            <LoginForm />
        </div>
    )
}

export default LoginPage;