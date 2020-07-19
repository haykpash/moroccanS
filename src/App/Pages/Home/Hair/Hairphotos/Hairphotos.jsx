import React, { useState, useEffect } from 'react';
import './Hairphotos.scss';
import API from '../../../../common/API.js';



const Hairphoto = () => {
   
   const [photos, setPhotos] = useState([]);
   
   useEffect(() => {
      API.get('catalog').then((result) => {
         console.log('Catalog Response', result);
         setPhotos(result.data);
      });
      }, [])
            
   return photos.filter(photo => photo.category === 'Hair')
               .map((filteredPhoto, iks) => {
      return (
               <div key={ iks } className='hairphoto'>
                  <img src={filteredPhoto.img} alt={filteredPhoto.name} />
                  <p> {filteredPhoto.category}, {filteredPhoto.name} </p> 
               </div>
      );
   })

   
                                       
         
            
            // photos.map(photo => {
            //    if (photo.category === 'Hair') {
               
            //       return (
            //          <div>
            //             <img src={photo.img} /> 
            //             <div src={photo.name} />
            //          </div>
            //             );
                  
            //          }
            //       }
            // )
      
                                       
}
const Hairphotos = () => {
   return (
      <div className="hairphotos">
         <Hairphoto/>
      </div>
   )
}
export default Hairphotos;