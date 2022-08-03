import React from 'react'
import { Link } from 'react-router-dom'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import axios from 'axios' 
import swal from 'sweetalert'

const registerSchema = Yup.object().shape({
        username : Yup.string()
            .min(4)
            .max(64)
            .required(<div className='text-danger'>{('*User name cannot be empty')}</div>),
        email: Yup.string()
            .email()
            .required(<div className='text-danger'>{('*Eamil cannot be empty')}</div>)
        ,
        password: Yup.string()
        .min(8)
        .max(64)
        .required(<div className='text-danger'>{('*password cannot be empty')}</div>),
        businessName: Yup.string()
        .min(4)
        .max(64)
        .required(<div className='text-danger'>{('*Buisness Name cannot be empty')}</div>),
        address : Yup.string()
        .min(4)
        .max(128)
        .required(<div className='text-danger'>{('*Address  cannot be empty')}</div>),

})

const Register = (props) => {

    const formik = useFormik ({
        initialValues : {
        username :'',
        email:'',
        password:'',
        businessName:'',
        address :''
        },
        onSubmit : (formData, {resetForm}) => {
            console.log(formData)

            axios.post(`https://dct-pos-app.herokuapp.com/api/users/register`, formData )
                .then((response) => {
                    const result = response.data
                    if(result.hasOwnProperty('errors')){
                        alert(result.message)
                    }else{
                        swal('Successfully created user')
                        props.history.push('/login')
                    }
                })
                .catch((err) => {
                    console.log(err)
                })


            resetForm()
        },
        validationSchema : registerSchema,
        validateOnChange: false
    })
    return (
        <div className='container'>
            <h2>Signup</h2>
            <form onSubmit={formik.handleSubmit}>
                <label className="form-label">UserName</label> <br/>
                <input type='text'className="form-control-sm" placeholder='username' name='username'
                        value={formik.values.username} 
                        onChange={formik.handleChange}/>{formik.errors.username}<br/>
                        
                        <label className="form-label">Email</label><br/>
                <input type='text' className="form-control-sm" placeholder='email' name='email' 
                    value={formik.values.email}
                    onChange={formik.handleChange}
                />{formik.errors.email}<br/>
                
                <label className="form-label">Password</label><br/>
                 <input type='password'className="form-control-sm" placeholder='password' name='password' 
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    />{formik.errors.password}<br/>
                    
                    <label className="form-label">BuisnessName</label><br/>
                 <input type='text' className="form-control-sm" placeholder='businessName' name='businessName' 
                    value={formik.values.businessName}
                    onChange={formik.handleChange}
                />{formik.errors.businessName}<br/>
                
                <label className="form-label">Address</label><br/>
                 <input type='text' className="form-control-sm" placeholder='address' name='address' 
                    value={formik.values.address}
                    onChange={formik.handleChange}
                    
                /> {formik.errors.address}<br/><br/>
                
                <input type='submit'  className="btn btn-outline-dark" value='Register'/> <span className="text-dark">* If an exesting user please <Link to='/login'>Login</Link></span>
            </form>
        </div>
    )
}
export default Register 