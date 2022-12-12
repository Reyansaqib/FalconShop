import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ProductContext } from '../global/ProductContext'
import { CartContext } from '../global/CartContext'
import { WishlistContext } from '../global/WishlistContext'

export default function SingleProduct() {

    var { products } = useContext(ProductContext)
    var { id } = useParams()
    var item = products.find((item) => item.id == id)

    const {shoppingCart,dispatch}=useContext(CartContext)
    const {wishlistdispatch}=useContext(WishlistContext)
    console.log(shoppingCart);
    return (
        <>
            <h1 className='background text-white text-center textfont '>{item.name}</h1>
            <div className="container-fluid mb-3">
                <div className="row">
                    <div className="col-sm-6 col-12 ">
                        <div id="carouselExampleControls" className="carousel slide mb-2"   data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={item.pic1} className="d-block w-100" style={{height:"500px"}} alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={item.pic2} className="d-block w-100" style={{height:"500px"}} alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={item.pic3} className="d-block w-100" style={{height:"500px"}} alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={item.pic4} className="d-block w-100" style={{height:"500px"}} alt="..." />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                        <div className='d-flex'>
                            <img src={item.pic1} className="d-block w-100" style={{height:"150px"}} />
                            <img src={item.pic2} className="d-block w-100" style={{height:"150px"}} />
                            <img src={item.pic3} className="d-block w-100" style={{height:"150px"}} />
                            <img src={item.pic4} className="d-block w-100" style={{height:"150px"}} />
                            
                        </div>
                    </div>
                    <div className="col-sm-6 col-12">
                        <table className='table table-hover table-striped'>
                            <tbody>
                                <tr>
                                    <th>Name</th>
                                    <td>{item.name}</td>
                                </tr>
                                <tr>
                                    <th>Main Category</th>
                                    <td>{item.maincategory}</td>
                                </tr>
                                <tr>
                                    <th>Sub Category</th>
                                    <td>{item.subcategory}</td>
                                </tr>
                                <tr>
                                    <th>Brand</th>
                                    <td>{item.brand}</td>
                                </tr>
                                <tr>
                                    <th>Base Price</th>
                                    <td>{item.baseprice}</td>
                                </tr>
                                
                                <tr>
                                    <th>Discount</th>
                                    <td>{item.discount}</td>
                                </tr>
                                <tr>
                                    <th>Final Price</th>
                                    <td>{item.finalprice}</td>
                                </tr>
                                <tr>
                                    <th>Size</th>
                                    <td>{item.size}</td>
                                </tr>
                                <tr>
                                    <th>Color</th>
                                    <td>{item.color}</td>
                                </tr>
                                <tr>
                                    <th> <Link to={"/cart"} className='btn text-light  w-100 background' onClick={()=>dispatch({type:"add_To_cart",id:item.id,product:item})}>Add to Cart </Link></th>
                                    <td> <Link to={'/profile'} className='btn text-light w-100 background' onClick={()=>wishlistdispatch({type:"add_To_Wishlist",id:item.id,product:item})}>Add to Wishlist </Link></td>                                    
                                </tr>

                            </tbody>

                        </table>
                    </div>
                </div>
            </div>

        </>
    )
}
