import axios from "axios";
//actions
const MYGARDEN_CROPS_ADDED = "mygarden/CROP_ADDED";
const MYGARDEN_LOADING = "mygarden/LOADING";
const MYGARDEN_FAILED = "mygarden/FAILED";

export const addCrop = (username, cropId) => dispatch => {
  dispatch({ type: MYGARDEN_LOADING });

  return axios
    .post(`http://localhost:5000/user/${username}/crops/${cropId}`)
    .then(res => dispatch({ type: MYGARDEN_CROPS_ADDED, data: res.data }))
    .catch(err => dispatch({ type: MYGARDEN_FAILED, data: err }));
};

//reducer
const initialState = {
  user: {},
  loading: false,
  error: null
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case MYGARDEN_LOADING:
      return {
        ...state,
        loading: true
      };
    case MYGARDEN_CROPS_ADDED:
      return {
        ...state,
        user: action.data,
        loading: false
      };
    case MYGARDEN_FAILED:
      return {
        ...state,
        error: action.data,
        loading: false
      };
    default:
      return state;
  }
}
