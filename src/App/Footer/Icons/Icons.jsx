import React, { useState, useEffect }from 'react';
import './Icons.scss';
import API from '../../common/API.js';

const MediaIcon = () => {

    const [mediaIcon, setMediaIcon] = useState([]);
    
    useEffect(() => {
    // 2. retrieve the data from the server 
    API.get('icons').then((result) => {
        // 3. upsate colotrType with data from server
        console.log('Icons Response', result);
        setMediaIcon(result.data);
    });
  }, [])
    
  
  return mediaIcon.map((mediaIcon, ikx) => {
  return (
    <div key={ ikx } className='icons'>
        <img  src={ mediaIcon.img } alt={ mediaIcon.name } />
    </div>
  )
  });
}
const Icons = () => {
    return (
      
          <div className='mediaicons'>
          <MediaIcon />
        </div>
      
    )
  }
export default Icons;