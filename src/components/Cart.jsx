import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../global/CartContext'

export default function Cart() {
    const {shoppingCart,totalPrice,qty,dispatch} = useContext(CartContext)
    console.log(qty,totalPrice,shoppingCart);
    var finalprice=0
    var shippingcharges=150
    if(totalPrice<1000)
    {shippingcharges=150
      finalprice=totalPrice+shippingcharges}
      else
      finalprice=totalPrice

    var condition=shoppingCart.length!==0

  return (
    <>
    {condition?
    
  <>
  <h1 className='background text-white text-center textfont'>Cart</h1>
    <div className="table-responsive">
      <table className='table table-light table-striped table-hover'>
        <tbody>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Color</th>
            <th>Size</th>
            <th>Price</th>
            <th></th>
            <th>Qty</th>
            <th></th>
            <th>Final</th>
            <th></th>   
          </tr>
          {
            shoppingCart.map((item,index)=>{
              return(
                <>
                <tr>
                  <td><Link to={'/product/'+ item.id}><img src={item.pic1} style={{height:"100px",borderRadius:"10px"}} /></Link></td>
                  <td>{item.name}</td>
                  <td>{item.color}</td>
                  <td>{item.size}</td>
                  <td>{item.finalprice}</td>
                  <td><button className='btn' onClick={()=>dispatch({type:"Inc",id:item.id,product:item})}><i class="material-icons">add</i></button></td>
                  <td>{item.qty}</td>
                  <td><button className='btn' onClick={()=>dispatch({type:"Dec",id:item.id,product:item})}><i class="material-icons">remove</i></button></td>
                  <td>{item.finalprice*item.qty}</td>
                  <td><Link to={'/cart'} onClick={()=>dispatch({type:"Delete",id:item.id,product:item})}><i class="material-icons">delete_forever</i></Link></td>

                </tr>
                </>
              )
            })
          }
          
        </tbody>
      </table>
    </div>
    <div className="row">
            <div className="col-md-6 col-sm-4 col-12">

            </div>
            <div className="col-md-6 col-sm-8 col-12">
              <table className='table table-striped table-hover table-light'>
                <tbody>
                <tr>
                <th>Total Price</th>
                <td>{totalPrice}</td>
                </tr>
                <tr>
                <th>Shipping Charges</th>
                <td>{totalPrice<1000?shippingcharges:"Free"}</td>
                </tr>
                <tr>
                <th>Final Amount</th>
                <td>{finalprice}</td>
                </tr>
                <tr>
                <th colSpan={2}><Link className='btn background w-100 text-primary' to={""}>Check out</Link></th>
                </tr>
                </tbody>

              </table>
            </div>
          </div>

  </>:<h1 className='background text-center text-light textfont'>Cart Empty</h1>  
  }
    
    </>
  )
}
