const initState = {
    allFormateurs: [],
    formateurItem: {}
  }
  
  const formateurReducer = (state = initState, action) => {
    if (action.type === "GET_ALL_FORMATEURS_SUCCESS"){
      return {
        ...state,
        allFormateurs: action.payload
      }
    }
    if (action.type === "REMOVE_FORMATEUR") {
      const {id} = action.payload
      return {
        allFormateurs : [...state.allFormateurs].filter((formateur) => formateur.id !== id)
      }
    }
    if (action.type === "EDIT_FORMATEUR_ITEM") {
      return {
        ...state,
        formateurItem: action.agent
      }
    }
    return state
  }
  
  export default formateurReducer;