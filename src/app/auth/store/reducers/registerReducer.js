const initialState = {
    userItem : {
        email: null,
        password: null
    }
}

const registerReducer = function (state = initialState, action) {
    switch ( action.type )
    {
        case 'REGISTER_SUCCESS':
        {
            console.log('register success')
            console.log('user email from reducer: ', initialState.userItem.email)
            console.log('user password from reducer: ', initialState.userItem.password)
        }
        case 'REGISTER_ERROR':
        {
            console.log('register error')
        }
        default:
        {
            return state
        }
    }
};

export default registerReducer;