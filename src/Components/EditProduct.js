import React from "react";
import ProductFrom from "./ProductForm";

const EditProduct = (props) => {
    const {_id,name, price, handleToggle} = props
    return(
        <div>
            <ProductFrom
                _id={_id}
                name={name}
                price={price}
                handleToggle={handleToggle}
            />
        </div>
    )
}
export default EditProduct