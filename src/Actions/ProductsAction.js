import axios from 'axios' 

const token = localStorage.getItem('token')

export const StartPostProd = (formData) => {
    return(dispatch) => {
        axios.post('http://dct-pos-app.herokuapp.com/api/products', formData, {
            headers: {
                "Authorization" : `Bearer `+ token
            }
        })
        .then((res) => {
            const result = res.data
            if(result.hasOwnProperty('errors')){
                alert(result.message)
            }else{
                dispatch(addProduct(result))
            }
        })
        .catch((err) => {
            alert(err.message)
        })
    }

}

export const addProduct = (data) => {
    return {
        type: 'ADD_PRODUCT',
        payload: data
    }
}

export const StartGetProd = () => {
    return (dispatch) => {
        axios.get('http://dct-pos-app.herokuapp.com/api/products', {
            headers : {
                "Authorization" : `Bearer `+ token   
            }
        })
        .then((res) => {
            const result = res.data
            if(result.hasOwnProperty('errors')){
                alert(result.message)
            }else{
                dispatch(getProduct(result))
            }
        })
        .catch((err) => err.message)
            
        
    }
}

export const getProduct = (data) => {
    return{
        type: 'GET_PRODUCT',
        payload: data
    }
}

export const startDeleteProd =(_id) => {
    return(dispatch) => {
        axios.delete(`http://dct-pos-app.herokuapp.com/api/products/${_id}`, {
            headers : {
                "Authorization" : `Bearer `+ token
            }
        })
        .then((res) => {
            const result = res.data
            if(result.hasOwnProperty('errors')){
                alert(result.message)
            }else{
                dispatch(deleteProd(_id))
            }
        })
        .catch((err) => {
            alert(err.message)
        })
    }
} 

const deleteProd = (_id)=> {
    return {
        type: 'DELETE',
        payload: _id
    }
}

export const StartUpdateProd = (formData,_id) =>{
    return(dispatch) => {
        axios.put(`http://dct-pos-app.herokuapp.com/api/products/${_id}`, formData ,{
            headers : {
                "Authorization" : `Bearer `+ token
            }
        })
        .then((res) => {
            const result = res.data
            if(result.hasOwnProperty('errors')){
                alert(result.message)
            }else{
                dispatch(updateProd(result))
            }
        })
        .catch((err) => {
            alert(err.message)
        })
    }
}

export const updateProd = (_id) => {
    return {
        type: 'UPDATE_PRODUCT',
        payload: _id
    }
}