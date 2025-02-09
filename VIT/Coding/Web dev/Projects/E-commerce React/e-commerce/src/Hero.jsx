import React from 'react'
import DisplayImg from './displayImg.jsx'
import CategoriesTab from './CategoriesTab.jsx'

function Hero() {
  return (
    <div>
      <DisplayImg />
      <CategoriesTab header="Top deals today:-"/>
      <CategoriesTab header="Trending:-"/>
      <CategoriesTab header="10% off:-"/>
    </div>
  )
}

export default Hero
