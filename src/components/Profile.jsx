import React, { useContext } from 'react'
import { Link} from 'react-router-dom'
import pic1 from "../assets/images/profile.jpeg"
import { CartContext } from '../global/CartContext'
import { WishlistContext } from '../global/WishlistContext'


export default function Profile() {
    const {shoppingWishlist,wishlistdispatch}=useContext(WishlistContext)
    const{dispatch}=useContext(CartContext)
    console.log(shoppingWishlist);

    return (
        <>
            <h1 className='background text-white text-center textfont '>Profile Page</h1>
            <div className="container-fluid mb-3">
                <div className="row">
                    <div className="col-sm-6 col-12 ">
                        <img src={pic1} className="w-100" />
                        </div>
                    <div className="col-sm-6 col-12">
                        <table className='table table-hover table-striped'>
                            <tbody>
                                <tr>
                                    <th>Name</th>
                                    <td>Saqib Mushtaq</td>
                                </tr>
                                <tr>
                                    <th>Username</th>
                                    <td>reyansaqib</td>
                                </tr>
                                <tr>
                                    <th>Email</th>
                                    <td>reyansaqib@gmail.com</td>
                                </tr>
                                <tr>
                                    <th>Phone Number</th>
                                    <td>7006788959</td>
                                </tr>
                                <tr>
                                    <th>Adrress Line 1</th>
                                    <td>Dreygam</td>
                                </tr>
                                
                                <tr>
                                    <th>Address Line 2</th>
                                    <td>Khansahib</td>
                                </tr>
                                <tr>
                                    <th>City</th>
                                    <td>Budgam</td>
                                </tr>
                                <tr>
                                    <th>State</th>
                                    <td>J&K</td>
                                </tr>
                                <tr>
                                    <th>Pincode</th>
                                    <td>191111</td>
                                </tr>
                                <tr>
                                    <th colSpan={2}> <Link to={""} className='btn text-light  w-100 background' >Update Profile </Link></th>
                                </tr>
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
            <h1 className='background text-white text-center textfont'>Wish List</h1>
            {
                shoppingWishlist.length>0?<div className="table-responsive">
                <table className='table table-light table-striped table-hover'>
                  <tbody>
                    <tr>
                      <th></th>
                      <th>Name</th>
                      <th>Color</th>
                      <th>Size</th>
                      <th>Price</th>
                      <th></th>
                      <td></td>
                        
                    </tr>
                  {
                      shoppingWishlist.map((item,index)=>{
                          return(
                              <>
                          <tr>
                              <td><Link to={'/product/'+item.id}><img src={item.pic1} style={{height:"150px",borderRadius:"10px"}} /></Link></td>
                              <td>{item.name}</td>
                              <td>{item.color}</td>
                              <td>{item.size}</td>
                              <td>{item.finalprice}</td>
                              <td><Link to={'/profile'} onClick={()=>wishlistdispatch({type:"remove_From_Wishlist",id:item.id,product:item})}><i class="material-icons">delete_forever</i></Link></td>
                              <td><Link to={"/cart"} className='btn text-light  w-100 background' onClick={()=>dispatch({type:"add_To_cart",id:item.id,product:item})}>Add to Cart </Link></td>
                          </tr>
                          </>
                          )
                      })
                  }
                    
                  </tbody>
                </table>
              </div>:<h1 className='background text-center text-light textfont'>Wishlist is Empty</h1>
                
            }

        </>
    )
}
