import React from 'react'
import { Link, useParams } from 'react-router-dom'
import "./mystyle.css"

export default function LeftNav() {
    var {mc,sc,brand}=useParams()
  return (
    <>
    <div>
      <div className="list-group textfont ">
              <h3 className="list-group-item list-group-item text-light background" aria-current="true">Main Category</h3>
              <Link to={"/shops/all/"+sc+"/"+brand} className="list-group-item">All</Link>
              <Link to={"/shops/male/"+sc+"/"+brand} className="list-group-item">Male</Link>
              <Link to={"/shops/female/"+sc+"/"+brand} className="list-group-item">Female</Link>
              <Link to={"/shops/kids/"+sc+"/"+brand} className="list-group-item">Kids</Link>
              
            </div>
            <div className="list-group textfont">
              <h3 className="list-group-item list-group-item text-light background" aria-current="true">Sub-Category</h3>
              <Link to={"/shops/"+mc+"/all"+"/"+brand} className="list-group-item">All</Link>
              <Link to={"/shops/"+mc+"/Shirts"+"/"+brand} className="list-group-item">Shirts</Link>
              <Link to={"/shops/"+mc+"/Jeans"+"/"+brand} className="list-group-item">Jeans</Link>
              <Link to={"/shops/"+mc+"/Tops"+"/"+brand} className="list-group-item">Tops</Link>
              <Link to={"/shops/"+mc+"/Shorts"+"/"+brand} className="list-group-item">Shorts</Link>
              <Link to={"/shops/"+mc+"/MuslimDresses"+"/"+brand} className="list-group-item">MuslimDresses</Link>
              
            </div>
            <div className="list-group textfont">
              <h3 className="list-group-item list-group-item text-light background" aria-current="true">Brand</h3>
              <Link to={"/shops/"+mc+"/"+sc+"/all"} className="list-group-item">All</Link>
              <Link to={"/shops/"+mc+"/"+sc+"/Dennis-Lingo"} className="list-group-item">Dennis Lingo</Link>
              <Link to={"/shops/"+mc+"/"+sc+"/Amazon-Brand"} className="list-group-item">Amazon Brand</Link>
              <Link to={"/shops/"+mc+"/"+sc+"/Levi's"} className="list-group-item">Levi's</Link>
              <Link to={"/shops/"+mc+"/"+sc+"/Ben-Martin"} className="list-group-item">Ben Martin</Link>
              <Link to={"/shops/"+mc+"/"+sc+"/USPOLO"} className="list-group-item">US POLO</Link>
              <Link to={"/shops/"+mc+"/"+sc+"/SightBomb"} className="list-group-item">SightBomb</Link>
              <Link to={"/shops/"+mc+"/"+sc+"/Puma"} className="list-group-item">Puma</Link>
              
            </div>
    </div>
    </>
  )
}
