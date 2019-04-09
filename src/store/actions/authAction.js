import * as actionTypes from './actionTypes';

const authStart = () => {
  return {
      type: actionTypes.AUTH_START
  };
};

const authSuccess = (authData) => {
  return {
      type: actionTypes.AUTH_SUCCESS,
      idToken: authData.idToken,
      userId: authData.localId
  };
};

const authFail = (error) => {
  return {
      type: actionTypes.AUTH_FAIL,
      error: error
  };
};

export const auth = (email, password, isSignUp) => {

}

export const logout = () => {
  localStorage.removeItem("token")
  localStorage.removeItem("expirationDate")
  localStorage.removeItem("userId")
  return {
      type: actionTypes.LOGOUT
  }
}

export const setAuthInitial = () => {

}

export const setAuthRedirectPath = (path) => {
  return {
      type: actionTypes.AUTH_REDIRECT,
      path: path
  }
}