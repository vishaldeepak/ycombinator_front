import * as actionTypes from './actionTypes';
import axios from '../../axiosMain';

const authStart = () => {
  return {
      type: actionTypes.AUTH_START
  };
};

const authSuccess = (authData) => {
  return {
      type: actionTypes.AUTH_SUCCESS,
      token: authData.token,
      userId: authData.userId,
      damm: authData.token,
      username: authData.username
  };
};

const authFail = (error) => {
  return {
      type: actionTypes.AUTH_FAIL,
      error: error
  };
};

const setLocalStorage = (token,  userId, username) => {
  localStorage.setItem("token", token)
  localStorage.setItem("userId", userId)
  localStorage.setItem("username", username)
}

export const auth = (username, password, isSignUp) => {
  return dispatch => {
    dispatch(authStart)
    const authData = {
      username: username,
      password: password
    }

    let url = "/auth/login"
    if(isSignUp){
      url = "/signup"
    }

    axios.post(url, authData)
    .then( res => {
      setLocalStorage(res.data.token, res.data.userId, username)
      res.data.username = username
      dispatch(authSuccess(res.data))
    })
    .catch( err => {
      dispatch(authFail(err.response.data.error))
    })
  }
}

export const logout = () => {
  localStorage.removeItem("token")
  localStorage.removeItem("userId")
  localStorage.removeItem("username")
  return {
      type: actionTypes.LOGOUT
  }
}

export const setAuthInitial = () => {
    return dispatch => {
        const token = localStorage.getItem("token")
        if(!token){
            dispatch(logout())
        }else {
          const userId = localStorage.getItem("userId")
          const username = localStorage.getItem("username")
          dispatch(authSuccess({idToken: token, userId: userId, username: username}))
        }
    }
}

export const setAuthRedirectPath = (path) => {
  return {
      type: actionTypes.AUTH_REDIRECT,
      path: path
  }
}