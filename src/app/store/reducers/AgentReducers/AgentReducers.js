const initState = {
    allAgents: [],
    agentItem: {}
  }
  
  const agentReducer = (state = initState, action) => {
    if (action.type === "GET_ALL_AGENTS_SUCCESS"){
      return {
        ...state,
        allAgents: action.payload
      }
    }
    if (action.type === "REMOVE_AGENT") {
      const {id} = action.payload
      return {
        allAgents : [...state.allAgents].filter((agent) => agent.id !== id)
      }
    }
    if (action.type === "EDIT_AGENT_ITEM") {
      return {
        ...state,
        agentItem: action.agent
      }
    }
    return state
  }
  
  export default agentReducer;