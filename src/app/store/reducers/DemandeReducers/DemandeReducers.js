const initState = {
    allDemandes: [],
    demandeItem: {}
  }
  
  const demandeReducer = (state = initState, action) => {
    if (action.type === "GET_ALL_DEMANDES_SUCCESS"){
      return {
        ...state,
        allDemandes: action.payload
      }
    }
    return state
  }
  
  export default demandeReducer;