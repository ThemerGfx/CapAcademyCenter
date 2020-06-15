const initialState = {
    success: false,
    currentUser: {
            name:''
    },
    authError: null
};

const loginReducer =(state = initialState, action)=> {

    if(action.type==='LOGIN_SUCCESS'){
        console.log('success')
        return {
            ...state,
            success: true
        };
    }

    if(action.type==='LOGIN_ERROR'){
        console.log('login fail')
        return {
            ...state,
            success: false
        };
    }
    return state;
};

export default loginReducer;