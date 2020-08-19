import axios from 'axios'

let allSeances = []

export const createSeance = (seance, id, formateur) => { 
  return (dispatch) => { 
      axios.post('http://backcapformation.com/Seance/' + id + '/' + formateur , seance)
        .then((res) => {
          if (res.status === 200) {
            return {
              ...seance,
              allSeances: [...allSeances, {...seance}]
            }
          }
        })
        .then(() => {
          dispatch({
            type: "add_seance"
          })
        })
        .catch((err) => console.log('error from add: ', err))
    }
}

export const removeSeance = (id) => {
  return (dispatch) => {
    axios.delete('http://backcapformation.com/Agent/' + id)
    .then(() => {
      console.log(id)
      dispatch({
        type: "REMOVE_SEANCE",
        payload: { id }
      })
    })
    .catch((err) => console.log('error from delete: ',err))
  }
}

export const getAllSeances = () => {
    return (dispatch) => {
      fetch("http://backcapformation.com/Seances")
      .then((res) => 
        res.json()
      )
      .then((res) => {
        dispatch(getAllSeancesSuccess(res))
        return allSeances
      })
      .catch((err) => console.log("error adding seance: ", err))
    }
}
export const getAllSeancesSuccess = (allSeances) => (
  {
    type:'GET_ALL_SEANCES_SUCCESS',
    payload: allSeances
  }
)