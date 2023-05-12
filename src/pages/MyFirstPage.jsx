import React from 'react'
import { Link } from 'react-router-dom'

const MyFirstPage = () => {
  return (
    <div>
      MyFirstPage
      <br />
      <Link to={'firstPageInside'}>MyFirstPageInside</Link>

      <br />
      <Link to={'/secondPage'}>MySecondPage</Link>
    </div>
  )
}

export default MyFirstPage