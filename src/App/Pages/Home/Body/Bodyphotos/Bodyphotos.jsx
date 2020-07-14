import React, { useState, useEffect } from 'react';
import '../../../Catalog/Catalog.scss';
//import './Bodyphotos.scss';
import API from '../../../../common/API.js';



const Bodyphotos1 = () => {

   const [ bodyPhotos, setBodyPhotos ] = useState([]);

   useEffect(() => {
      // 2. retrieve the data from the server 
      API.get('catalog').then((result) => {
          // 3. upsate colotrType with data from server
         console.log('Catalog Response', result);
         setBodyPhotos(result.data);
      });
      }, [])
   //return bodyPhotos.filter(category => bodyPhotos.Body) {
   return bodyPhotos.map((bodyPhoto, ikx) => {
      return ( 
         // <div key={ikx} className='bodyphotos'>
         //    <div>{bodyPhoto.img}</div>
         // </div>
      <div key={ ikx } className='catalogPhoto'>
         <img   src={ bodyPhoto.img } alt={ bodyPhoto.name } />
         <p>$: { bodyPhoto.name }</p>
         
      </div>
      )
   }) ;
} 

const Bodyphotos = () => {
   return (
      <div className= 'bodyphotos'>
      <Bodyphotos1 />
      </div>
   )
}
export default Bodyphotos;