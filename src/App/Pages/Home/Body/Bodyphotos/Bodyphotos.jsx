import React, { useState, useEffect } from 'react';
import './Bodyphotos.scss';
import API from '../../../../common/API.js';



const Bodyphoto = () => {
   
   const [photos, setPhotos] = useState([]);
   
   useEffect(() => {
      API.get('catalog').then((result) => {
         console.log('Catalog Response', result);
         setPhotos(result.data);
      });
      }, [])
      return (
         photos.map((photo, iks) =>  {
         if (photo.category === 'Body') {
            return (
               <div key={ iks } className='bodyphoto'>
                  <img src={photo.img} alt={photo.name}/> 
                  <p>{photo.category} {photo.name}</p>
               </div>
            );
         } return false;
      }
   ));
}
const Bodyphotos = () => {
   return (
      <div className='bodyphotos'>
      <Bodyphoto />
      </div>
   )
}
export default Bodyphotos;