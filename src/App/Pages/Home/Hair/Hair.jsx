import React from 'react';
import './Hair.scss';
//import '../Pages.scss';


const  Hair = () => {
   return (
      <div className='blok1'>
         <div className='photocontainer'>
            <img src="/img/photos/hair_care.JPG" alt='hair' />
            <h1>Hair care</h1>
         </div>
         <div className='textcontainer'>
            <h1>Hair care</h1>
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