import axios from 'axios'

let allFormateurs = []

export const UploadFile = (file) => { 
  
}

export const createFormateur = (formateur) => { 
  return (dispatch) => { 

      axios.post('http://localhost:8080/Formateur', formateur)
        .then((res) => {
          if (res.status === 200) {
            return {
              ...formateur,
              allFormateurs: [...allFormateurs, {...formateur}]
            }
        }
        })
        .then(() => {
          dispatch({
            type: "add_formateur"
          })
        })
        .catch((err) => console.log('error from add: ', err))
    }
}

export const removeFormateur = (id) => {
  return (dispatch) => {
    axios.delete('http://localhost:8080/Formateur/' + id)
    .then(() => {
      console.log(id)
      dispatch({
        type: "REMOVE_FORMATEUR",
        payload: { id }
      })
    })
    .catch((err) => console.log('error from delete: ',err))
  }
}

export const selectFormateur = (formateur) => {
  return {
    type: "EDIT_FORMATEUR_ITEM",
    formateur
  }
}

export const updateFormateur = (formateur) => {
  return (dispatch) => {
    axios.put(`http://localhost:8080/Formateur/${formateur.id}`, { ...formateur })
    .then(() => {
      dispatch({
        type: "UPDATE_FORMATEUR"
      })
    })
    .catch((err) => console.log(err))
  }
}

export const getAllFormateurs = () => {
    return (dispatch) => {
      fetch("http://localhost:8080/Formateurs")
      .then((res) => 
        res.json()
      )
      .then((res) => {
        dispatch(getAllFormateursSuccess(res))
        return allFormateurs
      })
      .catch((err) => console.log("error adding formateur: ", err))
    }
}
export const getAllFormateursSuccess = (allFormateurs) => (
  {
    type:'GET_ALL_FORMATEURS_SUCCESS',
    payload: allFormateurs
  }
)