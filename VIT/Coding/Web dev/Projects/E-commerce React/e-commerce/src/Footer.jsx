import React from 'react'
import Footerl1 from './Footerlist1.jsx'
import Footercontact from './Footercontact.jsx'

function Footer() {
    let styles={height:"400px",backgroundColor:"black",color:"white",display:"flex",justifyContent:"space-around"}
  return (
    <div style={styles}>
        <Footerl1/>
        <Footercontact/>
    </div>
  )
}

export default Footer
