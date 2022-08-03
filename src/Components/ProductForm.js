import React from 'react'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import { StartPostProd, StartUpdateProd } from '../Actions/ProductsAction'

const ProductFrom = (props) => {
    const {_id,name: title, price:mrp, handleToggle} = props

const dispatch = useDispatch()

    const formik = useFormik ({
        initialValues : {
            name: title ? title: '',
            price: mrp ? mrp : ''
            
        },
        onSubmit : (formData, {resetForm}) => {
            console.log(formData)

            if(title){
                console.log('updated', formData)
                dispatch(StartUpdateProd(formData, _id))
                handleToggle()
            }else{
                dispatch(StartPostProd(formData))
                resetForm()
            }
            
        }
        
        })
    return (
        <div className='container m-2 '>
        <h2>Product form </h2>
        <form onSubmit={formik.handleSubmit}>
            <label className="form-label">Name</label> <br/>
                <input type='text' className="form-control" placeholder='Name' name='name'
                        value={formik.values.name} 
                        onChange={formik.handleChange}/><br/>
                        
                        <label className="form-label">Price</label> <br/>
                <input type='text' className="form-control" placeholder='Price' name='price'
                        value={formik.values.price} 
                        onChange={formik.handleChange}/><br/><br></br>

                <input type='submit' className="btn btn-outline-dark" style={{width:'180px'}} value='Save'/>          
                        
            </form>
        </div>
    )
}
 export default ProductFrom