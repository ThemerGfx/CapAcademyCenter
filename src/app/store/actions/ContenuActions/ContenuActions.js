import axios from 'axios'

let allContenus = []

export const getAllContenus = () => {
    return (dispatch) => {
      fetch("http://localhost:8080/Contenus")
      .then((res) => 
        res.json()
      )
      .then((res) => {
        dispatch(getAllContenusSuccess(res))
        return allContenus
      })
      .catch((err) => console.log("error fetching contenu: ", err))
    }
}

export const getAllContenusSuccess = (allContenus) => (
  {
    type:'GET_ALL_CONTENUS_SUCCESS',
    payload: allContenus
  }
)