import React from "react";
//button to be used for login and sign up pages, takes functionality and text from parent object
const LogButton = (props) => {
    return (
        <div className="LogButton">
            <button onClick={props.handleSubmit}>{props.buttonText}</button>
        </div>
    );
};

export default LogButton;