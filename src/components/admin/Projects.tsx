import React from 'react'
import Image from '../../assets/images/image1.jpg'
import { Button } from '../Button';
export const ProjectsAdmin = () => {
  function handlClick(event: any) {
    event.preventDefault();
    alert('ok');
}
  return (
    <div className='admin-container'>
        <h2>All Projects</h2>
        <div className='cards'>
          <div className='card'>
            <h3>Card 1</h3>
            <img src={Image} alt="image1" />
            <Button name="Modifier" onClick={handlClick}/>
          </div>
          <div className='card'>
            <h3>Card 2</h3>
            <img src={Image} alt="image2" />
            <Button name="Modifier" onClick={handlClick}/>
          </div>
          <div className='card'>
            <h3>Card 3</h3>
            <img src={Image} alt="image3" />
            <Button name="Modifier" onClick={handlClick}/>
          </div>
        </div>
    </div>
  )
}
