//here lies the crops related actions and reducers

//mock_data
const mock_crops = [
  { id: 1, name: "crop1", category: "veggie" },
  { id: 2, name: "crop2", category: "herb" },
  { id: 3, name: "crop3", category: "veggie" },
  { id: 4, name: "crop4", category: "herb" },
  { id: 5, name: "crop5", category: "veggie" },
  { id: 6, name: "crop6", category: "fruit" },
  { id: 7, name: "crop7", category: "veggie" },
  { id: 8, name: "crop8", category: "fruit" },
  { id: 9, name: "crop9", category: "veggie" },
  { id: 10, name: "crop10", category: "fruit" }
];
//actions
const CROPS_FETCHED = "crops/FETCHED";
const CROPS_LOADING = "crops/LOADING";
const CROPS_FAILED = "crops/FAILED";

//action creators

export const getCrops = () => dispatch => {
  dispatch({ type: CROPS_LOADING });

  setTimeout(() => dispatch({ type: CROPS_FETCHED, data: mock_crops }), 2000);

  // dispatch({ type: CROPS_FAILED, data: err });
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
