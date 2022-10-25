import React from "react";
import "../Styles/userCard.scss";

export default function UserCard ({firstName,
                                   lastName,
                                   email,
                                   extraInfo}:
                                  {firstName: string,
                                   lastName: string,
                                   email: string,
                                   extraInfo: string}){
    return (
      <div className={"user-card"}>

          <p>Имя: {firstName}</p>
          <p>Фамилия: {lastName}</p>
          <p>Email: {email}</p>
          <p>Остальная информация: {extraInfo}</p>
      </div>
    );
}