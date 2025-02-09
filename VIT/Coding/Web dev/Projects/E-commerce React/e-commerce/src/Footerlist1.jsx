import React from 'react'

function Footerlist1() {
    let styles={textAlign:"left"}
    let divstyle={width:"400px",height:"400px"}
    let styleList={display:"flex",flexDirection:"column ",justifyContent:"space-around",height:"250px",padding:"50px 0px 0px 100px"}
  return (
    <div style={divstyle}>
      <ul style={styleList}>
        <li style={styles}>see more</li>
        <li style={styles}>Home</li>
        <li style={styles}>Feedback Form</li>
        <li style={styles}>Carrers</li>
        <li style={styles}>Contact Us</li>
        <li style={styles}>About Us</li>
      </ul>
    </div>
  )
}

export default Footerlist1
