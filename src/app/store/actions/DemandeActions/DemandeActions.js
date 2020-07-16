import axios from 'axios'

let allDemandes = []

export const getAllDemandes = () => {
    return (dispatch) => {
      fetch("http://localhost:8080/Demande")
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
    axios.put(`http://localhost:8080//Demande/${demande.id}`, { ...demande })
    .then(() => {
      dispatch({
        type: "UPDATE_DEMANDE"
      })
    })
    .catch((err) => console.log(err))
  }
}