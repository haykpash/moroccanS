import React, { useState, useEffect } from 'react';
import './Icons.scss';
import API from '../../common/API.js';
// import { icons } from './icons.js';


const IconsPhotos = () => {
    
    const  [iconPhotos, setIconsPhotos] = useState([]);
    
    useEffect(() => {
        // 2. retrieve the data from the server 
        API.get('icons').then((result) => {
            // 3. updatye staffMember with date from servise
            console.log('Icons Sercer Response', result);
            setIconsPhotos(result.data);
        });
    },[]) 
    
    // return iconPhotos.map((iconPhoto, ixd) => {
    //     return (
    //         <div key={ ixd } className={ "icons" }>
    //             <img src={ iconPhoto.img } alt={ iconPhoto.name} />
    //             {/* <img src = '/img/instagram.png' alt = 'instagram' />
    //             <img src = '/img/twitter.png' alt = 'twitter' /> */}
                
    //         </div>
    //     );
    // });
}
export default IconsPhotos;
const Icons = () => {
    return (
        <div>
            <IconsPhotos />
        </div>
    )
}
export default Icons;