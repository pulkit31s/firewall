import React from 'react'
import iphone from './assets/item_iphone.jpg';

function Categories({name,source}) {
  let styles={height:"300px",width:"230px",border:"2px solid black",borderRadius:"10px"}
  let styleimg={padding:"30px"}
  let styleheading={fontSize:"20px",fontWeight:"500"}
  return (
    <div style={styles}>
      <h1 style={styleheading}>{name}</h1>
      {/* <div> */}
      <img src={source} alt="iphone" style={styleimg}/>
      {/* </div> */}
    </div>
  )
}

export default Categories
