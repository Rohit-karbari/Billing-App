import axios from 'axios'
import {getBills} from "./BillAction"
import {getCustomer} from "./CustomerAction"
import {getProduct} from "./ProductsAction"

const token =  localStorage.getItem('token')

export const startGetUser = () => {
    return(dispatch) => {
        axios.get('http://dct-pos-app.herokuapp.com/api/users/account', {
            headers: {
                "Authorization" : `Bearer `+ token
            }
        })
        .then((res) => {
            const result = res.data 
            if(result.hasOwnProperty('errors')){
                alert(result.message)
            }else{
                dispatch(getUser(result))
            }
        })
        .catch((err) => {
            alert(err.message)
        })
    }
}

export const getUser = (data) => {
    return {
        type: 'GET_USER',
        payload: data
    }
}

export const asyncInitialUserDetailsFetch = (setIsLoading) => {
    return (dispatch) => {
        const apiList = ["http://dct-pos-app.herokuapp.com/api/customers", 
        "http://dct-pos-app.herokuapp.com/api/products",
         "http://dct-pos-app.herokuapp.com/api/bills", 
         "http://dct-pos-app.herokuapp.com/api/users/account"]

        axios.all(apiList.map(api => axios.get(api, {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        })))
            .then(responses => {
                setIsLoading && setIsLoading(false)
                const resultArray = responses.map(res => res.data)
                const actions = [getCustomer, getProduct, getBills, getUser]

                actions.forEach((action, index) => {
                    dispatch(action(resultArray[index]))
                })

            })
            .catch((err) => {
                console.log(err)
            })
    }
}