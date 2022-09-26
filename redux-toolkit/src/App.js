import React from 'react'
import NavbarUser from './layouts/NavbarUser'
import Router from './Routers/Router'
const App = () => {
  return (
    <div>
      <NavbarUser />

      <div className='row w-100 mt-2'>
        <div className='col-lg-12'>
          <div className=''>
            <div className='container'>
              <Router />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App