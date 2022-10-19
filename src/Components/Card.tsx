import React, { useState } from "react";
import Input from "./Input";

export default function Card(){
    let [Name, setName] = useState("Name");
    let [Desc, setDesc] = useState("Description");
    let [Editable, setEditable] = useState(false);
    let [PrevName, setPrevName] = useState(Name);
    let [PrevDesc, setPrevDesc] = useState(Desc);

    
    function changeName(name:string){
        setName(name);
    }
    function changeDesc(desc:string){
        setDesc(desc);
    }

    function changeEditable(){
        setEditable(!Editable);
        setPrevName(Name);
        setPrevDesc(Desc);
    }

    function cancelInput(){
        setName(PrevName);
        setDesc(PrevDesc);
    }

    return(
        <>
            <div style={{display: "flex", flexDirection: "column", width: "250px"}}>
                <Input text={Name} editable={Editable} change={changeName}/>
                <Input text={Desc} editable={Editable} change={changeDesc}/>
                <button onClick={changeEditable}>{Editable ? "Сохранить" : "Редактировать"}</button>
                {Editable?<button onClick={()=>{cancelInput(); changeEditable()}}>Отмена</button>:null}
            </div>
        </>
    );
}