const initState = {
    text: ''
}
  
  const searchReducer = (state = initState, action) => {

    if (action.type === "SEARCH_MOVIE"){
      return {
        ...state,
        text: action.payload
      }
    }

    return state
  }
  
  export default searchReducer;