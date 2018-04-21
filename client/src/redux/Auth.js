import axios from "axios";
//actions
const AUTH_SUCCESS = "auth/SUCCESS";
const AUTH_LOADING = "auth/LOADING";
const AUTH_FAILED = "auth/FAILED";
const AUTH_LOGOUT = "auth/LOGOUT";

//action creators

export const signInUser = reqData => dispatch => {
  dispatch({ type: AUTH_LOADING });

  return axios
    .post(`/auth/signin`, reqData)
    .then(res => dispatch({ type: AUTH_SUCCESS, data: res.data }))
    .catch(err => dispatch({ type: AUTH_FAILED, data: err.response }));
};
export const signUpUser = reqData => dispatch => {
  dispatch({ type: AUTH_LOADING });

  return axios
    .post(`/auth/signup`, reqData)
    .then(res => dispatch({ type: AUTH_SUCCESS, data: res.data }))
    .catch(err => dispatch({ type: AUTH_FAILED, data: err.response }));
};
export const signOutUser = () => dispatch => {
  dispatch({ type: AUTH_LOGOUT });
};

//reducer
const initialState = {
  authenticated: false,
  loading: false,
  error: null
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_LOADING:
      return {
        ...state,
        loading: true
      };

    case AUTH_SUCCESS:
      // set token received in cookie and set default authorization headers for all request using axios
      //cookies.set("token", action.data.token, { path: "/", expires: date });
      //axios.defaults.headers.common.Authorization = `Bearer ${cookies.get(
      //  "token"
      //)}`;

      return {
        ...state,
        authenticated: action.data,
        loading: false
      };
    case AUTH_FAILED:
      return { ...state, error: action.data, loading: false };
    case AUTH_LOGOUT:
      // we remove token from cookie and axios
      // cookies.remove("token", { path: "/" });
      // axios.defaults.headers.common.Authorization = null;
      return {
        ...state,
        authenticated: false,
        loading: false
      };
    default:
      return state;
  }
}
