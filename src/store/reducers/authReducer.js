import * as action_types from "../actions/actionTypes";

const initialState = {
  token: null,
  userId: null,
  username: null,
  error: null,
  loading: false,
  redirectPath: "/"
}

const authFail = (state, action) => {
  return {
    ...state,
    error: action.error,
    loading: false
  }
}

const authStart = (state) => {
  return {
    ...state,
    error: null,
    loading: true
  }
}

const logout = (state) => {
  return {
    ...state,
    token: null,
    userId: null,
    username: null
  }
}

const setRedirect = (state, action) => {
  return {
    ...state,
    redirectPath: action.path
  }
}


const authSuccess = (state, action) => {
  return {
    ...state,
    token: action.token,
    userId: action.userId,
    damm: action.damm,
    username: action.username,
    error: null,
    loading: false
  }
}

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case action_types.AUTH_START: return authStart(state)
    case action_types.AUTH_FAIL: return authFail(state, action)
    case action_types.AUTH_SUCCESS: return authSuccess(state, action)
    case action_types.LOGOUT: return logout(state)
    case action_types.AUTH_REDIRECT: return setRedirect(state, action)
    default: return state;
  }
}

export default reducer;