import React, { useState } from "react";
import Input from "./Input";

export default function Card(){
    let [name, setName] = useState("Name");
    let [desc, setDesc] = useState("Description");
    let [editable, setEditable] = useState(false);
    let [prevName, setPrevName] = useState(name);
    let [prevDesc, setPrevDesc] = useState(desc);

    
    function changeName(name:string){
        setName(name);
    }
    function changeDesc(desc:string){
        setDesc(desc);
    }

    function changeEditable(){
        setEditable(!editable);
        setPrevName(name);
        setPrevDesc(desc);
    }

    function cancelInput(){
        setName(prevName);
        setDesc(prevDesc);
    }

    return(
        <>
            <div style={{display: "flex", flexDirection: "column", width: "250px"}}>
                <Input text={name} editable={editable} change={changeName}/>
                <Input text={desc} editable={editable} change={changeDesc}/>
                <button onClick={changeEditable}>{editable ? "Сохранить" : "Редактировать"}</button>
                {editable&&<button onClick={()=>{cancelInput(); changeEditable()}}>Отмена</button>}
            </div>
        </>
    );
}