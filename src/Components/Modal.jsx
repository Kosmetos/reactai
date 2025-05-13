import React, { useState, useEffect } from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose }) => {

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  useEffect(() => {
    if (isOpen) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'unset';
    }
    return () => {
        document.body.style.overflow = 'unset';
    };
  }, [isOpen]);


  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (termsAccepted) {
      console.log({ name, phone, email });
      alert("Registration successful!");
    } else {
      alert("You must accept the terms of service.");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className='modal-close' onClick={onClose}>X</button>  
        <form className='form' onSubmit={handleSubmit}>
          <h2>Registration</h2>
          <div className='inputGroup'>
            <input 
              className="input-field"
              placeholder='Name'
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
            />
          </div>
          <div className='inputGroup'>
            <input 
              className="input-field"
              placeholder='+*(***)*******'
              type="tel" 
              value={phone} 
              onChange={(e) => setPhone(e.target.value)} 
              required 
            />
          </div>
          <div className='inputGroup'> 
            <input 
              className="input-field"
              placeholder='YourEmail@Email.mail'
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <div className='inputGroup'>
            <label>
              <input 
                type="checkbox" 
                checked={termsAccepted} 
                onChange={() => setTermsAccepted(!termsAccepted)} 
              />
              I agree to the terms of service
            </label>
          </div>
          <button className='button' type="submit">Register</button>
        </form>
        </div>
      </div>
  );
};

export default Modal;