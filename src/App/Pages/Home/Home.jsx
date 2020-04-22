import React from 'react';
import Slideshow from './Slideshow/Slideshow.jsx';
//import './Home.scss';
//import '../Pages.scss';

import Face from './Face/Face.jsx';
import Hair from './Hair/Hair.jsx';
import Body from './Body/Body.jsx';

const  Home = () => {
  return (
    <div>
      <Slideshow/>
      <Hair />
      <Face />
      <Body />
      </div>
    // <div   className='phototypes'>
    //   <div className='bloks'>
    //     <div className='body-care'>
    //       <img src="/img/photos/body_care.jpeg" alt='body'/>
    //     </div>
    //     <div className='body-care-text'>
    //       <h1>body care</h1>
    //     </div>
    //   </div>
    //   <div>
    //     <div>
    //       <div className='face-care'>
    //         <img src="/img/photos/face_care.JPG" alt='face' />
    //       </div>
    //     </div>
    //   </div>
    //   <div>
    //     <div>
    //       <div className='hair-care'>
    //         <img src="/img/photos/hair_care.JPG" alt='hair' />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
export default Home;
