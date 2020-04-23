import React from 'react';
import Slideshow from './Slideshow/Slideshow.jsx';

import Face from './Face/Face.jsx';
import Hair from './Hair/Hair.jsx';
import Body from './Body/Body.jsx';

const  Home = () => {
  return (
    <div>
      <Slideshow />
      <Hair />
      <Face />
      <Body />
    </div>
  );
}
export default Home;
