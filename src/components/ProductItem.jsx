import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductItem(props) {

    return (
        <>
            <div className="col-xxl-2 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
            <div className="card p-1 mb-2" >
                <img src={props.pic1} height="250px" width="80px" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title textfont" style={{height:"50px"}}>{props.name}/</h5>
                        <p className="card-text textfont"><strike>{props.baseprice}</strike> {props.finalprice}</p>
                        <Link to={"/product/"+props.id} className="btn btn-primary w-100 p-1 textfont">Add to Cart</Link>
                    </div>
            </div>
            </div>
        </>
    )
}
