import React from 'react';
import './Bag.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';

const Bag = () => {
return (
      <div className='shoppingbag'>
         <FontAwesomeIcon icon={ faShoppingBag } /> 
      </div>
   )
}
export default Bag;