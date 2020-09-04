const initialState = {
    userItem : {
        email: null,
        password: null
    }
}

const registerReducer = function (state = initialState, action) {

    if (action.type === 'REGISTER_SUCCESS') {

        console.log('register success')
        console.log('user email from reducer: ', initialState.userItem.email)
        console.log('user password from reducer: ', initialState.userItem.password)

        return {
            ...initialState
        }        
    }

    if (action.type === 'REGISTER_ERROR') {
        
        console.log('register error')

        return {
            ...initialState
        }        
    }
    
    return state
};

export default registerReducer;