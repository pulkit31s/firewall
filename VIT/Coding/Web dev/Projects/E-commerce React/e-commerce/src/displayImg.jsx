import React from 'react'
import Myimage from './assets/main-img.jpg';

function displayImg() {
    let styles={height:"600px",width:"100%"};
    return (
    <div style={styles}>
      <img src={Myimage} alt="Description"  style={styles}/>
    </div>
  );
}

export default displayImg;