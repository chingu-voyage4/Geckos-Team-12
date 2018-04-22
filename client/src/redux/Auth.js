import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();
//actions
export const AUTH_SUCCESS = "auth/SUCCESS";
const AUTH_LOADING = "auth/LOADING";
const AUTH_FAILED = "auth/FAILED";
const AUTH_LOGOUT = "auth/LOGOUT";
const AUTH_TOAST_SHOW = "auth/TOAST_SHOW";
const AUTH_TOAST_HIDE = "auth/TOAST_HIDE";

const toast = (message, type, dispatch) => {
  clearTimeout(this._hideToastTimer);
  clearTimeout(this._showToastTimer);

  this._showToastTimer = setTimeout(
    () => dispatch({ type: AUTH_TOAST_SHOW, data: { message, type } }),
    50
  );
  this._hideToastTimer = setTimeout(
    () => dispatch({ type: AUTH_TOAST_HIDE }),
    2500
  );
};

//action creators

export const signInUser = reqData => dispatch => {
  dispatch({ type: AUTH_LOADING });
  return axios
    .post(`/auth/signin`, reqData)
    .then(res => {
      dispatch({ type: AUTH_SUCCESS, data: res.data });
      toast(`Welcome back ${reqData.username} !`, false, dispatch);
    })
    .catch(err => {
      dispatch({ type: AUTH_FAILED, data: err.response });
      toast(err.response, true, dispatch);
    });
};
export const signUpUser = reqData => dispatch => {
  dispatch({ type: AUTH_LOADING });
  return axios
    .post(`/auth/signup`, reqData)
    .then(res => {
      dispatch({ type: AUTH_SUCCESS, data: res.data });
      toast(`Welcome ${reqData.username} !`, false, dispatch);
    })
    .catch(err => {
      dispatch({ type: AUTH_FAILED, data: err.response.data });
      toast(err.response.data, true, dispatch);
    });
};
export const signOutUser = () => dispatch => {
  return new Promise((resolve, reject) => {
    dispatch({ type: AUTH_LOGOUT });
    resolve();
  });
};

//reducer
const initialState = {
  authenticated: false,
  loading: false,
  error: null,
  showToast: false,
  toastMessage: "",
  toastError: false
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
      const date = new Date(action.data.exp);

      cookies.set("token", action.data.token, { path: "/", expires: date });
      axios.defaults.headers.common.Authorization = `Bearer ${cookies.get(
        "token"
      )}`;
      return {
        ...state,
        authenticated: action.data,
        loading: false
      };
    case AUTH_FAILED:
      return { ...state, error: action.data, loading: false };
    case AUTH_LOGOUT:
      console.log("AUTH_LOGOUT");
      cookies.remove("token", { path: "/" });
      axios.defaults.headers.common.Authorization = null;
      return {
        ...state,
        authenticated: false,
        loading: false
      };
    case AUTH_TOAST_SHOW:
      return {
        ...state,
        showToast: true,
        toastMessage: action.data.message,
        toastError: action.data.type
      };
    case AUTH_TOAST_HIDE:
      return {
        ...state,
        showToast: false,
        toastMessage: "",
        toastError: false
      };
    default:
      return state;
  }
}
