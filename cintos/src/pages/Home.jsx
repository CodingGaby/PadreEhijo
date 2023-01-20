import React from 'react'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import Slider from '../components/Slider'

const home = () => {
  return (
    <div className='container'>
        <Slider/>
        <Products/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default home