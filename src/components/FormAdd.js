import React from "react";

export default function FormAdd() {
    
    function searchUsers(event) {
        event.preventDefault();
    }

    return (
        <form className="form-add">
            <p>Добавить ученика</p>
            <input type="text" placeholder="Фамилия" />
            <input type="text" placeholder="Имя" />
            <input type="text" placeholder="Номер класса" />
            <input type="text" placeholder="Буква" />
            <button onClick={searchUsers} className="search">Добавить</button>
        </form>
    )
};