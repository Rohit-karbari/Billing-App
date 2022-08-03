import React,{useState, useEffect} from 'react'
import { useFormik } from 'formik'
import {useDispatch} from 'react-redux'
import { startPostCust } from '../Actions/CustomerAction'
import { StartUpdateCust } from '../Actions/CustomerAction'
import {ModalHeader, Modal, ModalBody} from 'reactstrap'




const CustomerForm = (props) => {
    const {_id, name: title, mobile:cellno, email:mail, handleToggle, modalStat} = props 
    const [modal, setModal] = useState(false)

        const dispatch = useDispatch()
        console.log('modalStat', modalStat)

    const formik = useFormik ({
        initialValues : {
            name: title ? title : '',
            mobile: cellno ? cellno : '',
            email: mail ? mail : ''
        },
        onSubmit : (formData, {resetForm}) => { 

            if(title){
                console.log('updated',formData)
                dispatch(StartUpdateCust(formData, _id))
                handleToggle()
            }else{
                dispatch(startPostCust(formData))
            console.log(formData)
            resetForm()
            }
        }
        
    })
    useEffect(() => {
        setModal(modalStat)
    },[handleToggle])
    return (
        <div className='container m-2 text-center'>
            <div className='mb-3'>
            <h3>Customer form</h3>
            {
                modal ? (
                    <Modal size='md' isOpen={modal}>
                        <ModalHeader>
                            Edit Form
                        </ModalHeader>
                        <ModalBody>
                            <form onSubmit={formik.handleSubmit}>
                            <label className="form-label" >Name</label> <br/>
                            <input type='text' className="form-control" placeholder='Name' name='name'
                                    value={formik.values.name} 
                                    onChange={formik.handleChange}/><br/>
                                    
                            <label className="form-label">Mobile</label> <br/>
                            <input type='text'className="form-control" placeholder='Mobile' name='mobile'
                                    value={formik.values.mobile} 
                                    onChange={formik.handleChange}/><br/>
                             <label className="form-label">Email</label> <br/>
                            <input type='text'className="form-control" placeholder='Email' name='email'
                                    value={formik.values.email} 
                                    onChange={formik.handleChange}/><br/><br></br>
                            <input type='submit' className="btn btn-outline-dark" style={{width:'180px'}} value='Save'/>          
                                    
                        </form>
                        </ModalBody>
                    </Modal>
                ) : (
                    <form onSubmit={formik.handleSubmit}>
                    <label className="form-label" >Name</label> <br/>
                        <input type='text' className="form-control" placeholder='Name' name='name'
                                value={formik.values.name} 
                                onChange={formik.handleChange}/><br/>
                                
                     <label className="form-label">Mobile</label> <br/>
                        <input type='text'className="form-control" placeholder='Mobile' name='mobile'
                                value={formik.values.mobile} 
                                onChange={formik.handleChange}/><br/>
                     <label className="form-label">Email</label> <br/>
                        <input type='text'className="form-control" placeholder='Email' name='email'
                                value={formik.values.email} 
                                onChange={formik.handleChange}/><br/><br></br>
                        <input type='submit' className="btn btn-outline-dark" style={{width:'180px'}} value='Save'/>          
                                
                    </form>
                )
            }
        
            </div>
        </div>
    )
}
export default CustomerForm





