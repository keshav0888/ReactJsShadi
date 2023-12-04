import React from 'react'
import { useNavigate } from 'react-router-dom';
export const LoginForm = () => {
  const navigate = useNavigate();
  const handleRegisterClick = () => {
    navigate('/register');
  };
  const handleLoginClick = () => {
    navigate('/home');
  };
  return (
    <div className='loginForm'>
        <button onClick={handleLoginClick}>Login</button>
        <button onClick={handleRegisterClick}>Register</button>
    </div>
  )
}
