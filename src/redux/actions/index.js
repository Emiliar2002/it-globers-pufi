import axios from "axios"


export const SUBSCRIBE_TO_NEWSLETTER = 'SUBSCRIBE_TO_NEWSLETTER'

export const subscribeToNewsletter = (email) => async dispatch => {
    try{
    const response = await axios.get(`https://api.apilayer.com/email_verification/check?email=${email}`, {headers: {
        apikey: 'WC6oMqkcBpvZK9uFXvUj2NLV9mHz967L'
    }})
    return dispatch({ type: SUBSCRIBE_TO_NEWSLETTER, payload: response.data })
    }catch(e){
        console.error(e)
        return dispatch({ type: SUBSCRIBE_TO_NEWSLETTER, payload: e.message })
    }
}