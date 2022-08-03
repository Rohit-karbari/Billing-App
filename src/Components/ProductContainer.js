import React from "react";
import ProductFrom from "./ProductForm";
import ProductList from "./ProductList";

const ProductContainer = (props) =>{
    return (
        <div className="row my-5">
            <div className="col-md-4">
            <ProductFrom/>
            </div>
            <div className="col-md-8">
                <div className="row">
                        <ProductList/>
            </div>
            </div>
        </div>
    )
}
export default ProductContainer