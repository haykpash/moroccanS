import React, { useState, useEffect } from 'react';
import './Facephotos.scss';
import API from '../../../../common/API.js';



const Facephoto = () => {

   const [photos, setPhotos] = useState([]);
   
   useEffect(() => {
      API.get('catalog').then((result) => {
         console.log('Catalog Response', result);
         setPhotos(result.data);
      });
      }, [])
      return (
         photos.map((photo, iks) => {
         if (photo.category === 'Face') {
            return (
               <div key={ iks } className='facephoto'>
                  <img src={photo.img} alt={photo.name}/> 
                  <p>{photo.category} {photo.name}</p>
               </div>
            );
         } return false;
      }
   ));
}
const Facephotos = () => {
   return (
      <div className="facephotos">
         <Facephoto/>
      </div>
   )
}
export default Facephotos;