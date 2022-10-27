import React from "react";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import UserCard from "./Components/UserCard";
import App from "./Components/App";



const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <StrictMode>
        <App/>
    </StrictMode>
)