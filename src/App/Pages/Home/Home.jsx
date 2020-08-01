import React from 'react';
import Slideshow from './Slideshow/Slideshow.jsx';
import './Home.scss';
import '../Pages.scss';

import Face from './Face/Face.jsx';
import Hair from './Hair/Hair.jsx';
import Body from './Body/Body.jsx';
const  Home = () => {
  return (
    <div className='Home Pages'>
      <Slideshow />
      <Hair />
      <Face />
      <Body />
    </div>
  );
}
export default Home;
