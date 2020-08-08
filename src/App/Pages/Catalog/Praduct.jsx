import React, { useState } from 'react';

import LightBox from '../../LightBox/LightBox.jsx';

const Praduct = (props) => {

   const [showBox, updateShowBox] = useState('false');
   const turningOn = () => {
      updateShowBox('true');
      console.log('on');
   }
   const turningOff = () => {
      updateShowBox('false');
      console.log('off');
   }

   return (
      <div className='catalogPhoto'>
         <img 
            onClick={ turningOn }
         src={ props.catalogPhoto.img } 
         alt={ props.catalogPhoto.name } />
         <p className="new">
            In Stock
         </p>
         <p className="price"> 
            ${ props.catalogPhoto.name }
         </p>
         <LightBox 
            show={ showBox } 
            turningOff={ turningOff }
            imageURL={ props.catalogPhoto.img }
            imageAlt={ props.catalogPhoto.name }
         />
      </div>
   ) 
}
export default Praduct;