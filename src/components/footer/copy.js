import React, { useState } from 'react'

const Copy = () => {
    const [year]=useState(new Date().getFullYear())
  
  return (
    <div align="center" style={{fontSize:"14px"}}>
        <p>&copy;{year} Dandelion | All Rights Reserved</p>
    </div>
  )
}

export default Copy