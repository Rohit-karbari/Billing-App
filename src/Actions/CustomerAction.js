import axios from 'axios'

const token = localStorage.getItem('token')

export const startPostCust = (data) => {
    return(dispatch) => {
        axios.post('http://dct-pos-app.herokuapp.com/api/customers', data, {
            headers: {
                "Authorization" : `Bearer `+ token
            }
        })
        .then((res) => {
            const result = res.data
            if(result.hasOwnProperty('errors')){
                alert(result.message)
            }else{
                dispatch(addCustomer(result))
            }
        })
        .catch((err) => {
            alert(err.message)
        })
    }
}
export const addCustomer = (data) => {
    return {
        type: 'ADD_CUSTOMER',
        payload: data
    }
}

export const StartGetCust = () => {
    return(dispatch) => {
        axios.get('http://dct-pos-app.herokuapp.com/api/customers',{
            headers: {
                "Authorization" : `Bearer `+ token
            }
        })
        .then((res) => {
            const result = res.data 
            if(result.hasOwnProperty('errors')){
                alert(result.message)
            }else{
                console.log(result)
                dispatch(getCustomer(result))
            }
        })
        .catch((err) => {
            alert(err.message)
        })
    }
} 

export const getCustomer = (data) => {
    return {
        type: 'GET_CUSTOMER',
        payload: data
    }
}

export const startDeleteCust =(_id) => {
    return(dispatch) => {
        axios.delete(`http://dct-pos-app.herokuapp.com/api/customers/${_id}`, {
            headers : {
                "Authorization" : `Bearer `+ token
            }
        })
        .then((res) => {
            const result = res.data
            if(result.hasOwnProperty('errors')){
                alert(result.message)
            }else{
                dispatch(deleteCust(_id))
            }
        })
        .catch((err) => {
            alert(err.message)
        })
    }
} 

const deleteCust = (_id)=> {
    return {
        type: 'DELETE',
        payload: _id
    }
}

export const StartUpdateCust = (formData,_id) =>{
    return(dispatch) => {
        axios.put(`http://dct-pos-app.herokuapp.com/api/customers/${_id}`, formData ,{
            headers : {
                "Authorization" : `Bearer `+ token
            }
        })
        .then((res) => {
            const result = res.data
            if(result.hasOwnProperty('errors')){
                alert(result.message)
            }else{
                dispatch(updateCust(result))
            }
        })
        .catch((err) => {
            alert(err.message)
        })
    }
}

export const updateCust = (_id) => {
    return {
        type: 'UPDATE_CUSTOMER',
        payload: _id
    }
}

export const StartGetCustId = (_id) => {
    return (dispatch) => {
        axios.get(`http://dct-pos-app.herokuapp.com/api/customers/${_id}`,{
            headers : {
                "Authorization" : `Bearer `+ token
            }
        })
        .then((res) => {
            const result = res.data
            if(result.hasOwnProperty){
                alert(result.message)
            }else{
                dispatch()
            }
        })
    }
}

export const IndCustomer = (_id) => {
    return {
        type: 'CUSTID',
        payload: _id
    }
}
