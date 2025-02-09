import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css' 
import {Button} from './components/ui/button'
import Header from './Header.jsx'
import Hero from './Hero'
import Footer from './Footer.jsx'

function App() {
  return (
    <>
     <Header></Header>
     <Hero/>
     <Footer/>
    </>
  )
}

export default App
