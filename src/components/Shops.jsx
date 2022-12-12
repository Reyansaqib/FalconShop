import React from 'react'
import ProductList from './ProductList'
import "./mystyle.css"
import LeftNav from './LeftNav'
import { useParams } from 'react-router-dom'


export default function Shops() {
  var {mc,sc,brand}=useParams()
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xxl-2 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
            <LeftNav/>

          </div>
          <div className="col-xxl-10 col-xl-9 col-lg-9 col-md-8 col-sm-6 col-12">
            <ProductList mc={mc} sc={sc} brand={brand} />
          </div>
        </div>
      </div>
    </>
  )
}
