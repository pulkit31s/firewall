import React from 'react'
import Categories from './Categories.jsx'
import HeadLine from './HeadLine.jsx';
// import macbook from 'https://inventstore.in/wp-content/uploads/2023/05/macbook-air-m1-gold-600x600-1.webp'
// import iphone from 'https://inventstore.in/wp-content/uploads/2023/05/macbook-air-m1-gold-600x600-1.webp'

function CategoriesTab({header}) {
  let styles = { display: "flex", padding: "20px 0px", gap: "20px" };
  // let macbook={}
  return (
    <>
      <div>
        <HeadLine header={header}/>
      </div>
      <div style={styles}>
        <Categories name="Iphone" source="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQuRiLTl-o9z9p6roskJhGsEbxRdEH3kb8oA&s"/>
        <Categories name="Macbook" source="https://inventstore.in/wp-content/uploads/2023/05/macbook-air-m1-gold-600x600-1.webp"/>
        <Categories name="Scooty" source="https://m.media-amazon.com/images/I/41ygM3INIFL._SY300_SX300_QL70_FMwebp_.jpg"/>
        <Categories name="Book" source="https://m.media-amazon.com/images/I/51x60-GHxuL._SY445_SX342_.jpg"/>
        <Categories name="Utensil" source="https://m.media-amazon.com/images/I/51whi427BoL._SL1200_.jpg"/>
        <Categories name="Samsung" source="https://images.fonearena.com/blog/wp-content/uploads/2024/09/Samsung-Galaxy-S25-render-leak-1024x836.jpg"/>
      </div>
    </>
  )
}

export default CategoriesTab
