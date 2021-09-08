import React from "react";

const LogButton = (props) => {
    return (
        <div className="LogButton">
            <button onClick={props.handleSubmit}>{props.buttonText}</button>
        </div>
    );
};

export default LogButton;