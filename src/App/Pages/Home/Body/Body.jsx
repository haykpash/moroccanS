import React from 'react';
import './Body.scss';
//import '../Pages.scss';


const  Body = () => {
   return (
      <div className='blok3'>
         <div className='photocontainer'>
            <img src="/img/photos/body_care.jpeg" alt='body'/>
            <h1>Body care</h1>
         </div>
         <div className='texcontainer'>
            <div className='insidetexcontainer'>
               <div>
                  <h1>Body care</h1>
               </div>
               <div>
                  <p>
                     product description goes her, 
                     you can see all ditails and 
                     descriptions, farther instruction
                     you can see on prudoct lable.
                  </p>
               </div>
            </div>
         </div>
      </div>
   )
}
export default Body;