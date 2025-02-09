import React from 'react'

function HeadLine({header}) {
    let styles={fontSize:"32px",textAlign:"left",paddingTop:"12px"}
  return (
    <>
       <h1 style={styles}><b>{header}</b></h1>
    </>
  )
}

export default HeadLine
 