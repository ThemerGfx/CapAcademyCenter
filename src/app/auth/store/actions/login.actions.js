import axios from 'axios'
import history from 'history.js';
import store from 'app/store';
import * as Actions from 'app/store/actions';

export const loginUser = (email, password) => { 
    return (dispatch) => { 
        axios.get('http://backcapformation.com/Login/' + email + '/' + password)
          .then((res) => {
            if (res.data.id !== null) {
                history.push('/table-agents')
          } 

          if (res.data.id === null) {       
            store.dispatch(Actions.showMessage({
              message     : 'erreur login',//text or html
              autoHideDuration: 6000,//ms
              anchorOrigin: {
                  vertical  : 'top',//top bottom
                  horizontal: 'center'//left center right
              },
              variant: 'error'//success error info warning null
          }))
        }
            console.log(res.data)
          })
          .then(() => {
            dispatch({
              type: "login_user"
            })
          })
      }
  }