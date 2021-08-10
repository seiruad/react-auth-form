// imports
import React from 'react';
import { useAuth } from './hooks/useAuth';
import { LoginForm } from './components/templates/LoginForm.component';
import { RegisterForm } from './components/templates/RegisterForm.component';



export function Auth() {
  const { currentForm } = useAuth()

  if (currentForm === 'login') {
    return (<LoginForm />)} 
  
  if (currentForm === 'register') {
    return (<RegisterForm />)
  }

  return (<div>Error</div>)
}
