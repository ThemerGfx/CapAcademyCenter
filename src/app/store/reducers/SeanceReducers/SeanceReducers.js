const initState = {
    allSeances: [],
    seanceItem: {}
  }
  
  const seanceReducer = (state = initState, action) => {
    if (action.type === "GET_ALL_SEANCES_SUCCESS"){
      return {
        ...state,
        allSeances: action.payload
      }
    }
    if (action.type === "REMOVE_SEANCE") {
      const {id} = action.payload
      return {
        allSeances : [...state.allSeances].filter((seance) => seance.id !== id)
      }
    }
    return state
  }
  
  export default seanceReducer;