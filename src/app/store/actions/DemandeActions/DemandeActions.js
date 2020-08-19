import axios from 'axios'

let allDemandes = []

export const getAllDemandes = () => {
    return (dispatch) => {
      fetch("http://backcapformation.com/Demande")
      .then((res) => 
        res.json()
      )
      .then((res) => {
        dispatch(getAllDemandesSuccess(res))
        return allDemandes
      })
      .catch((err) => console.log("error fetching contenu: ", err))
    }
}

export const getAllDemandesSuccess = (allDemandes) => (
  {
    type:'GET_ALL_DEMANDES_SUCCESS',
    payload: allDemandes
  }
)

export const updateDemande = (demande) => {
  return (dispatch) => {
    axios.put(`http://backcapformation.com//Demande/${demande.id}`, { ...demande })
    .then(() => {
      dispatch({
        type: "UPDATE_DEMANDE"
      })
    })
    .catch((err) => console.log(err))
  }
}