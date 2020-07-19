import React from 'react';
import './Hair.scss';
import { NavLink } from 'react-router-dom';
//import '../Pages.scss';

const  Hair = () => {
   return (
      <div className='blok1'>
         <div className='photocontainer'>
            <img src="/img/photos/hair_care.JPG" alt='hair' />
            <h1>
               <NavLink 
               className="navlink" 
               to='/hairphotos'
               >Hair care</NavLink>
            </h1>
         </div>
         <div className='textcontainer'>
            <h1>
               <NavLink 
               className="navlink" 
               to='/hairphotos'
               >Hair care</NavLink>
            </h1>
            <p>
               Product description goes her, 
               you can see all ditails and 
               descriptions, farther instruction
               you can see on prudoct lable.
            </p>
         </div>
      </div>
   )
}
export default Hair;