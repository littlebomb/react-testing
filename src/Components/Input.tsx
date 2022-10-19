import React from "react";

export default function Input ({text, editable, change}:
    {text: string, editable: boolean, 
        change: any}) {

    function editChar(event:any){
        change(event.target.value)
    }

    return (
        <>
            <input type="string" value={text} onChange={editChar} readOnly={!editable}/>
        </>
    )
}