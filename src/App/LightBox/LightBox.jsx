import React from 'react';
import './LightBox.scss';

const LightBox = (props) => {

   return (
      (props.show === 'true') &&
      <div 
         className={ 'lightbox' }
         
      >
         <div className={ "light" }>
            <span onClick={ props.turningOff }>
               &#x2715;
            </span>
            <img 
               src={ props.imageURL } 
               alt={ props.imageAlt }
            />
         </div>
      </div>
   )
}
export default LightBox;