const mock_crop = {
  name: "tomato",
  category: "veggie",
  description: "best veggie ever",
  info: ["item1", "item2", "item3"]
};
//const mock_error = { message: "crop not found", stack: "bla bla" };
//action
const CROP_LOADING = "crop/LOADING";
const CROP_FETCHED = "crop/FETCHED";
const CROP_FAILED = "crop/FAILED";

//action creators
export const getCrop = name => dispatch => {
  //fetch crop from DB
  dispatch({ type: CROP_LOADING });
  setTimeout(() => dispatch({ type: CROP_FETCHED, data: mock_crop }), 500);

  //dispatch({ type: CROP_FAILED, data: mock_error });
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
