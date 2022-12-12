import React, { useContext } from 'react'
import {ProductContext} from '../global/ProductContext'
import ProductItem from "./ProductItem"

export default function ProductList(props) {
    var {products}=useContext(ProductContext)
    var productList=[]
    if(props.mc==="all" && props.sc==="all" && props.brand==="all")
    productList=products
    else  if(props.mc!=="all" && props.sc==="all" && props.brand==="all")
    productList=products.filter((item)=>item.maincategory==props.mc)
    else  if(props.mc==="all" && props.sc!=="all" && props.brand==="all")
    productList=products.filter((item)=>item.subcategory==props.sc)
    else  if(props.mc==="all" && props.sc==="all" && props.brand!=="all")
    productList=products.filter((item)=>item.brand==props.brand)
    else  if(props.mc!=="all" && props.sc!=="all" && props.brand==="all")
    productList=products.filter((item)=>item.maincategory==props.mc&item.subcategory==props.sc)
    else  if(props.mc!=="all" && props.sc==="all" && props.brand!=="all")
    productList=products.filter((item)=>item.maincategory==props.mc&item.brand==props.brand)
    else  if(props.mc==="all" && props.sc!=="all" && props.brand!=="all")
    productList=products.filter((item)=>item.brand==props.brand&item.subcategory==props.sc)
    else
    productList=products.filter((item)=>item.maincategory==props.mc&item.brand==props.brand&item.subcategory==props.sc)
  return (
    <>
    <div className="container-fluid">
        <div className="row">
        {
        productList.map((item,index)=>{
            return( 
            <ProductItem
            key={index}
            name={item.name}
            maincategory={item.maincategory}
            subcategory={item.subcategory}
            baseprice={item.baseprice}
            discount={item.discount}
            finalprice={item.finalprice}
            pic1={item.pic1}
            pic2={item.pic1}
            pic3={item.pic1}
            pic4={item.pic1}
            id={item.id}
            
            
            />
            )
        })
        }
        </div>
    </div>
    
    </>
  )
}
