import React,{useState} from "react";
import { useDispatch } from 'react-redux'
import { startDeleteProd } from "../Actions/ProductsAction";
import EditProduct from "./EditProduct";

const ProductItem = (props) => {
    const {_id,name, price} = props
    const [toggle, setToggle] = useState(false)

    const dispatch = useDispatch()

    const handleRemove = () => {
        const confirm = window.confirm('Are you sure')
        if(confirm){
            dispatch(startDeleteProd(_id))
        }
    }

    const handleToggle = () => {
        setToggle(!toggle)
    }
    
    return (
        <div className="col-sm-4">
            {
                toggle ? (
                    <div>
                        <EditProduct
                            _id={_id}
                            name={name}
                            price={price}
                            handleToggle={handleToggle}
                        />
                        {/* <button  className="btn btn-outline-dark" onClick={handleToggle}>Cancel</button> */}
                    </div>
                ) : (
                    <div className="card my-2" style={{background: "orange"}}>
                            
                                <h2 style={{color:'black'}}>Product - {name}</h2>
                                <h5 style={{color:'black'}}>Price - {price} </h5>
                                <p className="text-start"><button className='btn btn-4' onClick={handleToggle}><i class="bi bi-pen"></i></button></p>
                                <p className="text-end"><button className='btn btn-4' onClick={handleRemove}><i class="bi bi-trash"></i></button></p>
                            
                    </div>
                )
            }

        </div>
    )
}
export default ProductItem