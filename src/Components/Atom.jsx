import React from 'react';
import './Atom.css'; // Импортируем стили
import Logo from "../images/Logo.svg"

const Atom = () => {
    return (
        <div className="atom-container">
            <img className="nucleus" src={Logo} alt="Logo"/>
            <div className="ring ring-1">
                <div className="electron bottom"></div>
            </div>
            <div className="ring ring-2">
                <div className="electron middle"></div>
            </div>
            <div className="ring ring-3">
                <div className="electron top"></div>
            </div>
        </div>
    );
};

export default Atom;