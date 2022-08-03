import React,{useState} from "react";
import { useFormik } from 'formik'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { StartPostBill } from "../Actions/BillAction";
import {useHistory } from "react-router-dom";

const BillingForm = (props) => {
    
    const [formFields, setFormFields] = useState([
        {
            product:'',
            quantity:''
        }
    ])

    const handleFormChange = (e, i) => {
        let data = [...formFields]
        data[i][e.target.name] = e.target.value
        setFormFields(data)
    }
    const addFields = () => {
        let lineItems = {
            product: '',
            quantity:''
        }
        setFormFields([...formFields, lineItems])
    }



const dispatch = useDispatch()

const history = useHistory()

    const customers = useSelector((state) => {
        return state.customers
    })
    console.log('bill form', customers)

    const products = useSelector((state) => {
        return state.products
    })

   const Remove = (i) => {
     let data = [...formFields]
     data.splice(i, 1)
     setFormFields(data)
   }
   const redirect =(billId) =>{
    history.push(`/billing/${billId}`)   
}
 

    const formik = useFormik ({
        initialValues : {
            date: '',
            customer: ''
        },
        onSubmit : (formData) => {
            console.log("formDtat" ,{...formData,lineItems : formFields})
            dispatch(StartPostBill({...formData, lineItems: formFields},redirect))
            
        }
            
        })
    return (
        <div className="container" >
            <div>
            <form onSubmit={formik.handleSubmit}>
                <h2>Billing Form</h2>
                <label className="form-label">Date</label><br/>
                <input type='date' className="form-control-sm"  value={formik.values.date} onChange={formik.handleChange} name='date'/><br/>
                <label className="form-label">Customer</label><br/>
                <select onChange={formik.handleChange}  className="form-select-sm" name='customer'>
                    <option >Select Customer</option>
                    {
                        customers.map((ele, i) => {
                            return <option value={ele._id} key={i}>{ele.name}</option>
                        })
                    }
                </select><br/>
                <label className="form-label" >Product</label><br/>
               {
                formFields.map((ele, i) => {
                    return (
                        <div key={i}>
                            <select  name='product'className="form-select-sm" onChange={e => handleFormChange(e, i)}>
                                <option>Select Product</option>
                                    {
                                        products.map((ele, i) => {
                                            return <option key={i} value={ele._id}>{ele.name}</option>
                                        })
                                    }
                                
                            </select><button onClick={addFields} type='button'><i class="bi bi-bag-plus-fill"></i></button><br/>
                            <label className="form-label">Quantity</label><br/>
                            <input
                                type='number'
                                name="quantity"
                                className="form-control-sm"
                                placeholder="Add quantity"
                                onChange={e => handleFormChange(e,i)}
                                value={ele.quantity}
                            />
                            { formFields.length > 1 && <button onClick={() => {
                                Remove(i)
                            }}>Delete</button>}
                            
                        </div>
                        
                    )
                })
               }<br></br>
               {/* <input type='button' onClick={addFields} value='add more..'/><br/> */}
                {/* <label>Product</label><br/>
                <select onChange={formik.handleChange} name='LineItem.product'>
                    <option>Select Product</option>
                    {
                        products.map((ele, i) => {
                            return <option value={ele._id} key={i}>{ele.name}</option>
                        })
                    }
                </select><br/>
                <label>Quantity</label><br/>
                <input type='text' onChange={formik.handleChange} placeholder="Quantity" value={formik.values.LineItem.quantity} name='LineItem.quantity'/><br/> */}
                <input type='submit' className="btn btn-outline-dark" value='Generate Bill' />
            </form>
            </div>
        </div>
    )
}
export default BillingForm