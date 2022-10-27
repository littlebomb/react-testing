import React from "react";
import useFetch from "../Hooks/useFetch";
import UserCard from "./UserCard";
import {InfoData} from "../types/index.d";

export default function App(){
    const info = useFetch<Array<InfoData>>("https://jsonplaceholder.typicode.com/users");
    return(
        <div className={"user-card-grid"}>

            {info && info.map((user)=>{return <UserCard key={user.id}
                firstName={user.name.split(" ")[0]}
                lastName={user.name.split(" ")[1]}
                email={user.email}
                extraInfo={user.phone+" "+user.website}/>})}
        </div>
    );
}

