import axios from 'axios'

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