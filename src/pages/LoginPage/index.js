import React, { useState } from "react";
import LoginForm from "../../components/LoginForm";

const LoginPage = () => {    
    //what actually gets rendered on the page
    return (
        <div className="login-page">
            <LoginForm />
        </div>
        
    )
}

export default LoginPage;