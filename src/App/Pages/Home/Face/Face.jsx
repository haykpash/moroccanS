import React from 'react';
import './Face.scss';
//import '../Pages.scss';


const  Face = () => {
   return (
      <div className='blok2'>
         <div className='texcontainer'>
            <div className='insidetexcontainer'>
                  <div>
                     <h1>Face care</h1>
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
         <div className='photocontainer'>
            <img src="/img/photos/face_care.JPG" alt='face' />
         </div>
      </div>
   )
}
export default Face;