import React, { useState, useEffect }from 'react';
import './Flag.scss';
import API from '../../common/API.js';

const FlagIcon = () => {

    const [flagIcon, setFlagIcon] = useState([]);
    
    useEffect(() => {
    // 2. retrieve the data from the server 
    API.get('flag').then((result) => {
        // 3. upsate colotrType with data from server
        console.log('Flag Response', result);
        setFlagIcon(result.data);
    });
  }, [])
    
  
  return flagIcon.map((flagIcon, ixx) => {
  return (
    <div key={ ixx}>
        <img src={ flagIcon.img } alt={ flagIcon.name } />
    </div>
  )
  });
}
const Flag = () => {
    return (
      
          <div className='flag'>
          <FlagIcon />
        </div>
      
    )
  }
export default Flag;
