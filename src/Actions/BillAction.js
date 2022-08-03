import axios from "axios"

const token =  localStorage.getItem('token')

export const StartPostBill = (data,redirect) => {
    console.log('action', data) 
    return(dispatch) => {
        axios.post('http://dct-pos-app.herokuapp.com/api/bills', data, {
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
                dispatch(addBill(result))
                redirect(result._id)
            }
        })
        .catch((err) => {
            alert("asd",err.message)
        })
    }
}

export const addBill = (data) => {
    return {
        type: 'ADD_BILL',
        payload: data
    }
}

export const StartGetBill = () => {
    return(dispatch) => {
        axios.get('http://dct-pos-app.herokuapp.com/api/bills', {
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
                dispatch(getBills(result))
            }
        })
        .catch((err) => {
            alert(err.message)
        })
    }
}

const getBills = (data) => {
    return {
        type: 'GET_BILL',
        payload: data
    }
}

export const StartDeleteBill = (id) => {
    return(dispatch) => {
        axios.delete(`http://dct-pos-app.herokuapp.com/api/bills/${id}`, {
            headers : {
                "Authorization" : `Bearer `+ token
            }
        })
        .then((res) => {
            const result = res.data
            if(result.hasOwnProperty('errors')){
                alert(result.message)
            }else{
                dispatch(deleteBill(id))
            }
        })
        .catch((err) => {
            alert(err.message)
        })

    }
}

const deleteBill = (data) => {
    return {
        type: 'DELETEBILL',
        payload: data
    }
}