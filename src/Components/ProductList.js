import React,{useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux'
import { StartGetProd } from "../Actions/ProductsAction";
import ProductItem from "./ProductItem";

const ProductList = (props) =>{

    const dispatch = useDispatch()

        // useEffect(() => {
        //     dispatch(StartGetProd())
        // },[])

        const products = useSelector((state) => {
            return state.products
        })

    return (
        <div className="container">
            <div className="text-center">
            {
                products.length === 0 ? (
                    <>
                    <h3>No Products found </h3>
                    <p>Add you first product</p>
                    </>
                ) : (
                    <div>
                        
                    <h2>Products List - {products.length}</h2><hr></hr>
                    <div className="row" style={{maxHeight: '500px', overflow:'auto'}}>
                    {products.map((ele) => {
                        return <ProductItem key={ele._id} {...ele}/>
                    })}
                    </div>
                    </div>
                )
            }
        </div>
        </div>
    )
}
export default ProductList