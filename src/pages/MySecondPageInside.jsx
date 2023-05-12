import React from 'react'
import { Link } from 'react-router-dom'

const MySecondPageInside = () => {
  return (
    <div>
        MySecondPageInside
        
        <br />
        <Link to={'/secondPage'}>MySecondPage</Link>
    </div>
  )
}

export default MySecondPageInside