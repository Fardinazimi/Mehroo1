import React from 'react'
import Header from './Header'

export default function ProductDetail() {
  return (
    <>
        <Header/>

        <div className="container my-5">
            <div className="row details-snippet1">
                <div className="col-md-7">
                    <div className="row">
                        <div className="col-md-2 mini-preview">
                            <img className="img-fluid" src="https://i.imgur.com/FDwQgLy.jpeg" alt="Preview"/>
                            <img className="img-fluid" src="https://i.imgur.com/FDwQgLy.jpeg" alt="Preview"/>
                            <img className="img-fluid" src="https://i.imgur.com/FDwQgLy.jpeg" alt="Preview"/>
                            <img className="img-fluid" src="https://i.imgur.com/FDwQgLy.jpeg" alt="Preview"/>
                        </div>
                        <div className="col-md-10">
                            <div className="product-image">
                                <img className="img-fluid" src="https://i.imgur.com/FDwQgLy.jpeg" alt="Main Image"/>
                            </div>

                        </div>
                    </div>

                </div>
                <div className="col-md-5">
                    <div className="category"><span className="theme-text">Category:</span> Women</div>
                    <div className="title">Black Dress For Women</div>
                    <div className="ratings my-2">
                        <div className="stars d-flex">
                            <div className="theme-text mr-2">Product Ratings: </div>
                            <div>&#9733;</div>
                            <div>&#9733;</div>
                            <div>&#9733;</div>
                            <div>&#9733;</div>
                            <div>&#9733;</div>
                            <div className="ml-2">(4.5) 50 Reviews</div>
                        </div>
                    </div>
                    <div className="price my-2">$100.00 <strike className="original-price">$120.00</strike></div>
                    <div className="theme-text subtitle">Brief Description:</div>
                    <div className="brief-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dicta reiciendis odio consequuntur sunt magnam eum facilis quaerat dolor aperiam labore facere amet officiis, unde quae distinctio earum culpa omnis soluta voluptate tempora placeat?.
                    </div>

                    <div>
                        <div className="subtitle my-3 theme-text">Colors:</div>
                        <div className="select-colors d-flex">
                            <div className="color red"></div>
                            <div className="color silver"></div>
                            <div className="color black"></div>
                        </div>
                    </div>

                    <hr/>
                    <div className="row">
                        <div className="col-md-3">
                            <input type="number" className="form-control" value="1"/>
                        </div>
                        <div className="col-md-9"><button className="btn addBtn btn-block">Add to basket</button></div>
                    </div>

                </div>
            </div>
        </div>
    </>
  )
}