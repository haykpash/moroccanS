import React, { useState, useEffect }from 'react';
import './Home.scss';
import '../Pages.scss';
import API from '../../common/API.js';

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
        <div  key={ idx } className='phototypes'>
            <img src={ colorType.img } alt={colorType.name } />
        </div>
        );
    });
}

const Colors = () => {
  return (
    <div >
      <ColorType />
    </div>
  )
}

export default Colors;