import React from 'react'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div>
        <p>Layout</p>

        <Outlet />
    </div>
  )
}

export default RootLayout