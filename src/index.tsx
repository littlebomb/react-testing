import React from "react";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import UserCard from "./Components/UserCard";
import App from "./Components/App";

// async function getData() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
//     return data;
// }
// const data = getData();

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <StrictMode>
        <App/>
    </StrictMode>
)