import React from 'react'
import { Button } from '../Button';
import { Input } from '../Input'

export const Login = () => {
  function handlClick(event: any) {
    event.preventDefault();
    alert('ok');
}
  return (
    <div className='admin-container'>
        <h2>Login</h2>
        <form >
          <Input type="email" placeholder='email'/>
          <Input type='text' placeholder='name'/>
          <Button name="Envoyer" onClick={handlClick}/>

        </form>
    </div>
  )
}
