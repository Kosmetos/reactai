import './App.css';
import React, { useState } from 'react';
import Modal from './Components/Modal';
import Logo from "./images/Logo.svg";
import SectionObject from './Components/Objects';

function App() {

    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

  return (
    <div className="App">
        <Modal isOpen={isModalOpen} onClose={closeModal}/>
      <header className="site-header">
        <div className="logo">
            <img src={Logo} alt="Логотип Whitespace"></img>
            <span className="logo-title">Whitespace</span>
        </div>
        <nav className="nav-links">
            <ul>
                <li><a href="#products">Products</a></li>
                <li><a href="#solutions">Solutions</a></li>
                <li><a href="#resources">Resources</a></li>
                <li><a href="#pricing">Pricing</a></li>
            </ul>
        </nav>
        <div className="auth-buttons">
            <button 
                className="login-btn"
                onClick={openModal}
            >
                Log In
            </button>
            <button 
                className="try-btn"
                onClick={openModal}
            >
                Try for Free →
            </button>
        </div>
        </header>
        <SectionObject openModal={openModal}/>  
    </div>
  );
}

export default App;
