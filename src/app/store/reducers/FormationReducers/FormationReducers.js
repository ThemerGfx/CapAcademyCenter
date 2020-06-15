const initState = {
    allFormations: [],
    formationItem: {}
  }
  
  const formationReducer = (state = initState, action) => {
    if (action.type === "GET_ALL_FORMATIONS_SUCCESS"){
      return {
        ...state,
        allFormations: action.payload
      }
    }
    if (action.type === "REMOVE_FORMATION") {
      const {id} = action.payload
      return {
        allFormations : [...state.allFormations].filter((formation) => formation.id !== id)
      }
    }
    if (action.type === "EDIT_FORMATION_ITEM") {
      return {
        ...state,
        formationItem: action.formation
      }
    }
    return state
  }
  
  export default formationReducer;