import React from 'react'
import "./mystyle.css"
export default function Footer() {
  return (
    <>
     <div className="container-fluid background">
     <h2  style={{ color: "white", textAlign: "center", fontFamily: "Bernard MT Condensed" }}>copyright@falconfoods.com</h2>
      <div className="row background">
        <div className="col-2">

        </div>
        <div className="text-center text-light col-8">
        <label for="email" class="form-label">Email address</label>
        <input type="email" class="form-control" id="email" placeholder="name@example.com" />
        <button className='btn  btn-light w-100' >Submit</button>
      </div>

      <div className="col-2">

      </div>
      </div>
     </div>
    </>
  )
}
