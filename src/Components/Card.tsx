import React, { useState } from "react";
import Input from "./Input";

export default function Card(){
    let [Editable, setEditable] = useState(true);
    let [PrevValue, setPrevValue] = useState(["",""]);
    
    function changeEditable(){
        setEditable(!Editable)
    }

    function cancelInput(){
        
    }

    return(
        <>
            <Input text="name" editable={Editable}/>
            <Input text="description" editable={Editable}/>
            <button onClick={changeEditable}>Редактировать</button>
            {Editable?<button>Отмена</button>:null}
        </>
    );
}