const initState = {
    allContenus: [],
    contenuItem: {}
  }
  
  const contenuReducer = (state = initState, action) => {
    if (action.type === "GET_ALL_CONTENUS_SUCCESS"){
      return {
        ...state,
        allContenus: action.payload
      }
    }
    return state
  }
  
  export default contenuReducer;