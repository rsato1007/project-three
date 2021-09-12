import React, {useEffect, useState} from "react";
import { getUserFromToken } from "../../Tools/TokenAction";

/* Testing how to get information from token to find user's information */


const CommonsPage = () => {
    const [Name, setName] = useState("");

    useEffect(() => {
        const tokenInfo = getUserFromToken();
        setName(tokenInfo[0].Name);
    },[]);
    return (
        <div>
            Welcome Back {Name}!
        </div>
    )
}

export default CommonsPage