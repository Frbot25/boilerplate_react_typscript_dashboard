import React from 'react'
import { Button } from '../Button'

export const Categories = () => {
  function handlClick(event: any) {
    event.preventDefault();
    alert('ok');
}
  return (
    <div className='admin-container'>
    <h2>All Categories</h2>
    <div className='cards'>
      <div className='card'>
        <h3>Card 1</h3>
        <Button onClick={handlClick} name="modifier"/>
      </div>
      <div className='card'>
        <h3>Card 2</h3>
      </div>
      <div className='card'>
        <h3>Card 3</h3>
      </div>
    </div>
</div>
  )
}
