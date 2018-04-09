//here lies the authentication related actions and reducers
//here is an example

//mock_data
const mock_token = "flerhfwiuhy49776837fy7ho24vb2f29p430fuhip3crox";
//actions
const AUTH_SUCCESS = "auth/SUCCESS";
const AUTH_LOADING = "auth/LOADING";
const AUTH_FAILED = "auth/FAILED";
const AUTH_LOGOUT = "auth/LOGOUT";

//action creators

export const signInUser = reqData => dispatch => {
  dispatch({ type: AUTH_LOADING });

  setTimeout(() => dispatch({ type: AUTH_SUCCESS, data: mock_token }), 1000);
  // dispatch({ type: AUTH_FAILED, data: err });
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
        authenticated: true,
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
