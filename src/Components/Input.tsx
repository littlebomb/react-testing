import React, { useState } from "react";

export default function Input ({text, editable}:{text: string, editable: boolean}){
    let [Text, setText] = useState(text);
/*     let [PrevValue, setPrevValue] = useState("");
 */
    function editChar(event:any){
        /* setPrevValue(Text); */
        setText(event.target.value);
    }

    /* function Cancel(){
        setText(PrevValue);
    } */

    return (
        <>
            <input type="string" value={Text} onChange={editChar} readOnly={!editable}/>
            {/* <button onClick={Cancel}>Отмена</button> */}
        </>
    )
}