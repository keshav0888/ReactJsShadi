import React from 'react'
import { Header } from './Components/Header'
import { Register } from './Pages/Register'
//import { LoginForm } from './Pages/LoginForm'
import Navigation from './Components/Navigation'
export const App = () => {
  return (
    // <Header/>
    //if Auth then directly to home page
    //else loginform
    <Navigation/>
  )
}
