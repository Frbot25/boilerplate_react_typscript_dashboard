import React from 'react'
import notfoundImage from './../../assets/images/error.jpg'

export const PageNotFound = () => {
  return (
    <div className='notfound'>
      <h2>Ooops !!!</h2>
      <h3>Il n'y à rien à voir ici</h3>
      <img src={notfoundImage} alt="" />
    </div>
  )
}
