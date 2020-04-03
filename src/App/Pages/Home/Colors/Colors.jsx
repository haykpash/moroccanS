import React, { useState, useEffect }from 'react';
//import './Colors.scss';
//import { colorType } from './colors.js';
import API from '../../../common/API.js';

const ColorType = () => {
    
    // 1. set up state to keep trak of data from server
    const [colorType, setcolorType] = useState([ ]);
    
    // only do thius on moment.
    useEffect(() => {
    // 2. retrieve the data from the server 
    API.get('praducts').then((result) => {
        // 3. upsate colotrType with data from server
        console.log('Color Response', result);
        setcolorType(result.data);
    }); 
    }, [])

    return colorType.map((colorType, idx) => {
        return (
        <div  key={ idx } className={ 'ColorType' }>
            <img src={ colorType.img } alt={colorType.name } />
            <h3>{ colorType.name }</h3>
        </div>
        );
    });
}


const Colors = () => {
  return (
    <div className='Colors'>
      <h2>Colors</h2>
        <div className='separate'>
        <ColorType />
      </div>
    </div>
  )
}

export default Colors;