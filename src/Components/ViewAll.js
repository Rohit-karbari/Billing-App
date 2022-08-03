import React from "react";
import { useSelector } from "react-redux";
import { StartDeleteBill } from "../Actions/BillAction";
import { useDispatch } from "react-redux";
const ViewAll = (props) => {

const dispatch = useDispatch()
    const customer = useSelector((state) => {
        return state.customers
    })

    const product = useSelector((state) => {
        return state.products
    })

    const bill = useSelector((state) => {
        return state.bills
    })

    const allCustomerBills = () => {
        const allBills = bill.map(bill => {
            const customerDetails = customer.filter(cus => {
                return cus._id === bill.customer
            })[0]
            if(customerDetails){
                const newBill = bill.lineItems.map(item => {
                    const details = product.filter(prod => prod._id === item.product)[0]
                    
                    return {
                        quantity: item.quantity,
                        subTotal: item.subTotal,
                        ...details
                    } 
                })
                return {
                    customerName: customerDetails.name,
                    billId: bill._id,
                    products: newBill,
                    total: bill.total
                } 
            } else {
                return {error:'Not Found'}
            }
            
        })
        return allBills.filter(bill => !bill.error).flat()
    }

    const handleRemove=(id)=>{
        const confirm = window.confirm('Are you sure')
        if(confirm){
            dispatch(StartDeleteBill(id))
        }
    }
    const currentProductDetails = allCustomerBills()
   

    return (
        <div>
            {
                 currentProductDetails.map((ele, index) => {
                    return (
                        <div key={index}>
                            <div>
                                <h4>Customer - {ele.customerName}</h4>
                            </div>
                            <div>
                                <ol>
                                    {ele.products.map((item, ind) => {
                                        return (
                                            <li key={ind}>{`${item.name} - ${item.quantity} - ${item.subTotal}`}</li>
                                        )
                                    })}
                                </ol>
                                    
                            </div>
                            <h4>Total-{ele.total}</h4>
                             <div>
                     <button   className="btn btn-outline-dark" onClick={() => {handleRemove(ele.billId)}}>X</button>
                            </div> 
                            
                        </div>
                    )
                })
            }
        </div>
    )
}
export default ViewAll