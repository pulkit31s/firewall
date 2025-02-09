import React from 'react'

function nav() {
    let styles={display:"flex"}
    let stylesli={margin:"20px"}
  return (
    <div>
      <ul style={styles}>
        <li style={stylesli}>Home</li>
        <li style={stylesli}>About</li>
        <li style={stylesli}>Contact</li>
        <li style={stylesli}>More</li>
      </ul>
    </div>
  )
}

export default nav
