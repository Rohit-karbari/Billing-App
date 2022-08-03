import React from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { Link } from 'react-router-dom'
import swal from 'sweetalert'

const registerSchema = Yup.object().shape({
    email: Yup.string()
        .email()
        .required('Eamil cannot be empty'),
    password: Yup.string()
    .min(8)
    .max(64)
    .required('password cannot be empty'),   

})

const Login = (props) => {

    const formik = useFormik ({
        initialValues : {
        email: '',
        password: '',
        },
        onSubmit : (formData, {resetForm}) => {
            console.log(formData)

            axios.post('http://dct-pos-app.herokuapp.com/api/users/login', formData)
            .then((response)=>{
                const result = response.data
                if(result.hasOwnProperty('errors')){
                    alert(result.errors)
                }else{
                        {swal('succesfully logedin')}
                    localStorage.setItem('token', result.token)
                    props.history.push('/')
                    props.handleAuth()
                }
            })
            .catch((err) => {
                console.log(err.message)
            })

            resetForm()
        },
        validationSchema : registerSchema,
        validateOnChange: false
    })
    return (
        <div className='container my-3 text-center'>
        <div> 
            <h2>User Login</h2>
            <form onSubmit={formik.handleSubmit}>
            <label className="form-label">Email</label><br/>
                <input type='text' className="form-control-sm" placeholder='email' name='email' 
                    value={formik.values.email}
                    onChange={formik.handleChange}
                />{formik.errors.email}<br/>
                
                <label className="form-label" >Password</label><br/>
                 <input type='password' placeholder='password' className="form-control-sm" name='password' 
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    />{formik.errors.password}<br/><br/>
                      <input type='submit' className="btn btn-outline-dark" value='Login'/> <br></br><span className="text-dark">* If not an exesting user please <Link style={{textDecoration:'none', color:'blue'} } to='/register'>Register</Link></span>
            </form>
        </div>
        </div>
    )
}

export default Login