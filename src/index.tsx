import React from "react";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import Input from "./Components/Input"
import Card from "./Components/Card";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <StrictMode>
        <Card/>
    </StrictMode>
)