import axios from 'axios'

let allAgents = []

export const createAgent = (agent) => { 
  return (dispatch) => { 
      axios.post('http://backcapformation.com/Agent', agent)
        .then((res) => {
          if (res.status === 200) {
            return {
              ...agent,
              allAgents: [...allAgents, {...agent}]
            }
        }
        })
        .then(() => {
          dispatch({
            type: "add_agent"
          })
        })
        .catch((err) => console.log('error from add: ', err))
    }
}

export const removeAgent = (id) => {
  return (dispatch) => {
    axios.delete('http://backcapformation.com/Agent/' + id)
    .then(() => {
      console.log(id)
      dispatch({
        type: "REMOVE_AGENT",
        payload: { id }
      })
    })
    .catch((err) => console.log('error from delete: ',err))
  }
}

export const selectAgent = (agent) => {
  return {
    type: "EDIT_AGENT_ITEM",
    agent
  }
}

export const updateAgent = (agent) => {
  return (dispatch) => {
    axios.put(`http://backcapformation.com/Agent/${agent.id}`, { ...agent })
    .then(() => {
      dispatch({
        type: "UPDATE_AGENT"
      })
    })
    .catch((err) => console.log(err))
  }
}

export const getAllAgents = () => {
    return (dispatch) => {
      fetch("http://backcapformation.com/AffAgents")
      .then((res) => 
        res.json()
      )
      .then((res) => {
        dispatch(getAllAgentsSuccess(res))
        return allAgents
      })
      .catch((err) => console.log("error adding agent: ", err))
    }
}
export const getAllAgentsSuccess = (allAgents) => (
  {
    type: 'GET_ALL_AGENTS_SUCCESS',
    payload: allAgents
  }
)