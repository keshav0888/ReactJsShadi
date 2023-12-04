import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { Register } from '../Pages/Register';
import { LoginForm } from '../Pages/LoginForm';
import { Home } from '../Pages/Home';
const Navigation = () => {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" Component={LoginForm} />
        <Route path="/register" Component={Register} />
        <Route path="/home" Component={Home} />
      </Routes>  
      </BrowserRouter>
  );
};
export default Navigation;