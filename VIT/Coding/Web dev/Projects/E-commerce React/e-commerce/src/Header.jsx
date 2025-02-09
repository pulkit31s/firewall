import React from 'react'
import Logo from './Logo.jsx'
import Nav from './Nav.jsx'
import {Button} from './components/ui/Button'

function Header() {
    let styles={display:"flex",justifyContent:"space-between"};
  return (
    <div style={styles}>
      <Logo></Logo>
      <Nav></Nav>
      <Button>Sign Up</Button>
    </div>
  )
}

export default Header
