import axios from 'axios'

let allUsers = []

export const registerUser = (user) => { 
    return (dispatch) => { 
        axios.post('http://localhost:8080/AddUser', user)
          .then((res) => {
            if (res.status === 200) {
              return {
                ...user,
                allUsers: [...allUsers, {...user}]
              }
          }
            console.log(user)
          })
          .then(() => {
            dispatch({
              type: "add_user"
            })
          })
          .catch((err) => console.log('error from add: ', err))
      }
  }