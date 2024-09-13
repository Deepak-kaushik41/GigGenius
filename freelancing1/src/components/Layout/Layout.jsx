import React, { Children } from 'react'
import {Outlet}from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const layout = () => {
  return (
    <>
        <div className='sticky top-0 z-50  mx-4'>
        <Header/>
          </div>     
        <div className=' bg-red-100 min-h-screen mx-4'> 
          <Outlet/>
        </div>
        <Footer/>
    </>
  )
}

export default layout
