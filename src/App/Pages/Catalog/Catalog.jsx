import React, { useState, useEffect }from 'react';
import './Catalog.scss';
import '../Pages.scss';
import API from '../../common/API.js';
import Praduct from './Praduct.jsx';

const CatalogP = () => {

    const [catalogPhotos, setCatalogPhotos] = useState([]);
    
    useEffect(() => {
    // 2. retrieve the data from the server 
    API.get('catalog').then((result) => {
        // 3. upsate colotrType with data from server
        console.log('Catalog Response', result);
        setCatalogPhotos(result.data);
    });
    }, [])
    
    return catalogPhotos.map((catalogPhoto, ikx) => {
        return (
            // <div key={ ikx } className='catalogPhoto'>
            //     <img  src={ catalogPhoto.img } alt={ catalogPhoto.name } />
            //     <p className="new">
            //         In Stock
            //     </p>
            //     <p className="price"> 
            //         ${ catalogPhoto.name }
            //     </p>
            //     <LightBox show='true' />
            // </div>
            <Praduct key={ ikx } catalogPhoto={catalogPhoto}/>
        );
    });
}
const Catalog = () => {
    return (
            <div className='catalogimg Pages'>
            <CatalogP />
        </div>
    )
}
export default Catalog;

