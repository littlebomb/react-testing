import React from "react";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import Card from "./Components/Card";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <StrictMode>
        <Card/>
    </StrictMode>
)