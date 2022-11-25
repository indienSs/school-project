import React from "react";

export default function Form() {
    
    function searchUsers(event) {
        event.preventDefault();
    }

    return(
        <form className="form">
            <p>Найти ученика</p>
            <input type="text" placeholder="Фамилия" />
            <input type="text" placeholder="Имя" />
            <input type="text" placeholder="Номер класса" />
            <input type="text" placeholder="Буква" />
            <button onClick={searchUsers} className="search">Найти</button>
        </form>
    )
};