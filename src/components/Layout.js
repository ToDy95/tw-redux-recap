import React from 'react'


const Layout = ({ children }) => {
  return (
    <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center justify-center p-5">
      {children}
    </div>
  )
}

export default Layout
