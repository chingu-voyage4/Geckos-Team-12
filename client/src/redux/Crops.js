import axios from "axios";
//actions
const CROPS_FETCHED = "crops/FETCHED";
const CROPS_LOADING = "crops/LOADING";
const CROPS_FAILED = "crops/FAILED";

//action creators

export const getCrops = () => dispatch => {
  dispatch({ type: CROPS_LOADING });

  return axios
    .get(`http://localhost:5000/crops`)
    .then(res => dispatch({ type: CROPS_FETCHED, data: res.data }))
    .catch(err => dispatch({ type: CROPS_FAILED, data: err }));
};

//reducer
const initialState = {
  crops: [],
  loading: false,
  error: null
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CROPS_LOADING:
      return {
        ...state,
        loading: true
      };
    case CROPS_FETCHED:
      return {
        ...state,
        crops: action.data,
        loading: false
      };
    case CROPS_FAILED:
      return {
        ...state,
        error: action.data,
        loading: false
      };
    default:
      return state;
  }
}
