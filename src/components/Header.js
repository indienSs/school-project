import React from "react";

export default function Header(props) {
    return (<div className="header">
        <p className="title">Ангарский лицей №1</p>
        <img src="/images/loop.png" alt="loop" className="loop" onClick={props.showForm} />
        <p className="search" onClick={props.showForm}>Поиск</p>
    </div>)
};