import axios from 'axios'

let allFormations = []

export const createFormation = (formation) => { 
  return (dispatch) => { 

      axios.post('http://backcapformation.com/Formation', formation)
        .then((res) => {
          if (res.status === 200) {
            return {
              ...formation,
              allFormations: [...allFormations, {...formation}]
            }
        }
        })
        .then(() => {
          dispatch({
            type: "add_formation"
          })
        })
        .catch((err) => console.log('error from add: ', err))
    }
}

export const removeFormation = (id) => {
  return (dispatch) => {
    axios.delete('http://backcapformation.com/Formation/' + id)
    .then(() => {
      console.log(id)
      dispatch({
        type: "REMOVE_FORMATION",
        payload: { id }
      })
    })
    .catch((err) => console.log('error from delete: ',err))
  }
}

export const selectFormation = (formation) => {
  return {
    type: "EDIT_FORMATION_ITEM",
    formation
  }
}

export const updateFormaion = (formation) => {
  return (dispatch) => {
    console.log(formation)
   axios.put(`http://backcapformation.com/Formation/${formation.id}`, { ...formation })
    .then(() => {
      dispatch({
        type: "UPDATE_FORMATION"
      })
    })
    .catch((err) => console.log(err))
  }
}

export const getAllFormations = () => {
    return (dispatch) => {
      fetch("http://backcapformation.com/Formations")
      .then((res) => 
        res.json()
      )
      .then((res) => {
        dispatch(getAllFormationsSuccess(res))
        return allFormations
      })
      .catch((err) => console.log("error adding formation: ", err))
    }
}

export const getAllFormationsSuccess = (allFormations) => (
  {
    type:'GET_ALL_FORMATIONS_SUCCESS',
    payload: allFormations
  }
)