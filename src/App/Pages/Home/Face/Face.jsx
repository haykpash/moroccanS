import React from 'react'
import './Face.scss'
//import '../Pages.scss';
import { NavLink } from 'react-router-dom'

const Face = () => {
  return (
    <div className='blok2'>
      <div className='photocontainer'>
        <img src='/img/photos/face_care.JPG' alt='face' />
        <h1>
          <NavLink className='navlink' to='/facephotos'>
            Face care
          </NavLink>
        </h1>
      </div>
      <div className='textcontainer'>
        <h1>
          <NavLink className='navlink' to='/facephotos'>
            Face care
          </NavLink>
        </h1>
        <p>
          product description goes her, you can see all ditails and
          descriptions, farther instruction you can see on prudoct lable.
        </p>
      </div>
    </div>
  )
}
export default Face
