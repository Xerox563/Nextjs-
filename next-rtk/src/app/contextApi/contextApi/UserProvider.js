"use client"

import { useState,useEffect } from "react";
import { UserContext } from "./userContext";

/*
// Calling an API
 -> Fetches a list of all users from the API
 -> Stores the data in react state using use state;
 -> Makes data available to all child components .

*/

const UserProvider = ({children}) => {
    const [user,setUsers] = useState();
    useEffect(() => {
        fetch("https://dummyjson.com/users")
        .then((res) => res.json())
        .then((data) => setUsers(data.users))
        .catch((err) => console.log("Failed to Fetch Error :: ",err))
    },[])

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;