import React from 'react'

function Footercontact() {
    let styles={textAlign:"left"}
    let divstyle={width:"400px",height:"400px"}
    let styleList={display:"flex",flexDirection:"column ",justifyContent:"space-around",height:"250px",padding:"50px 0px 0px 100px"}
  return (
    <div style={divstyle}>
      <ul style={styleList}>
        <li style={styles}>instagram</li>
        <li style={styles}>twitter</li>
        <li style={styles}>Facebook</li>
        <li style={styles}>Linkedin</li>
        {/* <li style={styles}></li> */}
      </ul>
    </div>
  ) 
}

export default Footercontact
