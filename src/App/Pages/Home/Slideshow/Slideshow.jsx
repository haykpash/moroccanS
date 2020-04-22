import React, {useState, useEffect} from 'react';
import './Slideshow.scss';
import API from '../../../common/API.js'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


const defaultSlides = [
    {
        arrKey: 11,
        image: '/img/Slideshow/slide-1.jpg',
        title: 'image1',
    },
    // {
    //     arrKey: 12,
    //     image: '/img/Slideshow/slide-2.jpg',
    //     title: 'image2',
    // },
    {
        arrKey: 13,
        image: '/img/Slideshow/slide-3.jpg',
        title: 'image3',
    },
];

const Slideshow = () => {
    
    const [slides, setSlides] = useState(defaultSlides);

    useEffect(() => {
        // 2. retrieve the data from the server 
        API.get('slides').then((result) => {
            // 3. updatye staffMember with date from servise
            console.log('Slides Sercer Response', result);
            setSlides(result.data);
        });
    },[])
    
    const renderSlides = () => {
        return slides.map(slide => {
                return (
                    <div key={ slide.arrKey }>
                        <img src={slide.image} alt={slide.title} />
                    </div>
                )
            }
        )
    }
    
    return(
    <div className={'Slideshow'}>
        <Carousel
            showThumbs={false}
            showIndicators={false}
            autoPlay={true}
            infiniteLoop={true}
            showArrows={true}
        >
            {renderSlides()}
        </Carousel>
        
    </div>
    );
}

export default Slideshow;