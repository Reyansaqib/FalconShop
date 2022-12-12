import React from 'react'
import Banner from './Banner'
import "./mystyle.css"
import ProductList from './ProductList'

export default function Home() {
  return (
    <>
    <Banner/>
    <h2 className='background text-light text-center textfont'>Products Section</h2>
    <ProductList mc="all" sc="all" brand="all"/>
    <div className="container-fluid  col-12 map">
    <div className="mapouter"><div className="gmap_canvas"><iframe width="1300" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=Alamdar%20Road%20Dreygam&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://putlocker-is.org"></a><br/></div></div>
    </div>

    </>
  )
}
