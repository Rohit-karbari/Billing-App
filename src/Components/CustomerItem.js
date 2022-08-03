import React from 'react'
import { useState } from 'react'
import { useDispatch , useSelector} from 'react-redux'
import { Link, Route, withRouter} from 'react-router-dom'
import { startDeleteCust } from '../Actions/CustomerAction'
import EditCustomer from './EditCustomer'

const CustomerItem = (props) => {
    const {_id, name, mobile, email} = props
    const [toggle, setToggle] = useState(false)
    const [modalStat, setModalStat] = useState(false)

    const dispatch = useDispatch()

    const handleRemove = () => {
        const confirm = window.confirm('Are you sure')
        if(confirm){
            dispatch(startDeleteCust(_id))
        }
    }

    const handleToggle = () => {
        setToggle(!toggle)
        setModalStat(!modalStat)
    }
    console.log(modalStat)

    const customers = useSelector((state) => {
        return state.customers
       })


    return (
        <div className='col-sm-4'>
            {
                toggle ? (
                    <div>
                        <EditCustomer
                            _id={_id}
                            name={name}
                            mobile={mobile}
                            email={email}
                            handleToggle={handleToggle}
                            modalStat={modalStat}
                        />
                        <button   className="btn btn-outline-dark" onClick={handleToggle} >Cancle</button>
                    </div>
                ) : (
                        <div className='card my-2' style={{background: "orange"}}>
                            
                            <div style={{boxShadow:"rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px"}}>
                                {/* <thead>
                                    
                                        <th>Name</th>
                                        <th>Mobile</th>
                                        <th>Email</th>
                                    
                                </thead> */}
                                         <div className='text-center'>
                                            <h2 className='p-2' style={{color:'black'}}>{name}</h2>
                                            <h5 style={{color:'black'}}>{mobile}</h5>
                                            <h6 style={{color:'black'}}>{email}</h6>
                                            
                            <p className='text-start'><button  className='btn btn-4' onClick={handleToggle}><i class="bi bi-pen"></i></button></p>
                            <p className='text-end' style={{color:'#FFE5B4'}}><button className='btn btn-4' onClick={handleRemove}><i class="bi bi-trash"></i></button></p>
                                        </div>
                                        </div>
                             {/* <h3>Name - {name}</h3>
                            <h4>Mobile - {mobile}</h4>
                            <h4>Email - {email}</h4>
                            
                            <button onClick={handleToggle}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">
                                        <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>
                                        </svg></button>
                                                                    <button onClick={handleRemove}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                            </svg></button><hr/>

                            <Route path='/customer/id' render={(props) => {
                                return <IndCustomer {...props}/>
                            }}/> */}

                        </div>
                )
            }
          
        </div>
    )
}

export default withRouter( CustomerItem )