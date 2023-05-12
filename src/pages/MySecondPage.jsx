import React from 'react'
import { Link } from 'react-router-dom'

const MySecondPage = () => {
  return (
    <div>
      MySecondPage

      <br />
      <Link to={'secondPageInside'}>MySecondPageInside</Link>

      <br/>
      <Link to={'/'}>MyFirstPage</Link>
    </div>
  )
}

export default MySecondPage