import axios from "axios";
//action
const CROP_LOADING = "crop/LOADING";
const CROP_FETCHED = "crop/FETCHED";
const CROP_FAILED = "crop/FAILED";

//action creators
export const getCrop = id => dispatch => {
  //fetch crop from DB
  dispatch({ type: CROP_LOADING });
  return axios
    .get(`/crops/${id}`)
    .then(res => dispatch({ type: CROP_FETCHED, data: res.data }))
    .catch(err => dispatch({ type: CROP_FAILED, data: err }));
};
//reducers
const initialState = {
  loading: false,
  crop: {},
  error: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CROP_LOADING:
      return {
        ...state,
        loading: true
      };
    case CROP_FETCHED:
      return {
        ...state,
        loading: false,
        crop: action.data
      };
    case CROP_FAILED:
      return {
        ...state,
        loading: false,
        error: action.data
      };
    default:
      return state;
  }
}
