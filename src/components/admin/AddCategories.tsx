import React from 'react'
import { Button } from '../Button';
import { Input } from '../Input'
import { TextArea } from '../TextArea.tsx';

export const AddCategories = () => {
    function handlClick(event: any) {
        event.preventDefault();
        alert('ok');
    }
  return (
    <div className='admin-container'>
        <h2>AddCategories</h2>
        <form>
            <Input type='text' placeholder='name'/>
            <TextArea name="cscs" placeholder='description' cols="30" rows="10"/>
            <Button name="Envoyer" onClick={handlClick}/>
        </form>
    </div>
  )
}
