//here lies the crops related actions and reducers

//mock_data
const mock_crops = [
  { id: 1, name: "crop1", category: "veggie", url:"https://images.unsplash.com/photo-1467020323552-36f7bf0e30e6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=531319c82648653fd61091ddd2141768&auto=format&fit=crop&w=1050&q=80" }, 
  { id: 2, name: "crop2", category: "herb", url:"https://images.unsplash.com/photo-1494220394759-e0b232f883ef?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0d9ac6d7ff29e685c4ed80241a354901&auto=format&fit=crop&w=634&q=80" },
  { id: 3, name: "crop3", category: "veggie", url: "https://images.unsplash.com/photo-1494220394759-e0b232f883ef?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0d9ac6d7ff29e685c4ed80241a354901&auto=format&fit=crop&w=634&q=80" },
  { id: 4, name: "crop4", category: "herb", url:"https://images.unsplash.com/photo-1494220394759-e0b232f883ef?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0d9ac6d7ff29e685c4ed80241a354901&auto=format&fit=crop&w=634&q=80" },
  { id: 5, name: "crop5", category: "veggie", url:"https://images.unsplash.com/photo-1494220394759-e0b232f883ef?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0d9ac6d7ff29e685c4ed80241a354901&auto=format&fit=crop&w=634&q=80"},
  { id: 6, name: "crop6", category: "fruit", url:"https://images.unsplash.com/photo-1494220394759-e0b232f883ef?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0d9ac6d7ff29e685c4ed80241a354901&auto=format&fit=crop&w=634&q=80" },
  { id: 7, name: "crop7", category: "veggie", url:"https://images.unsplash.com/photo-1494220394759-e0b232f883ef?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0d9ac6d7ff29e685c4ed80241a354901&auto=format&fit=crop&w=634&q=80" },
  { id: 8, name: "crop8", category: "fruit", url:"https://images.unsplash.com/photo-1494220394759-e0b232f883ef?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0d9ac6d7ff29e685c4ed80241a354901&auto=format&fit=crop&w=634&q=80" },
  { id: 9, name: "crop9", category: "veggie", url:"https://images.unsplash.com/photo-1494220394759-e0b232f883ef?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0d9ac6d7ff29e685c4ed80241a354901&auto=format&fit=crop&w=634&q=80" },
  { id: 10, name: "crop10", category: "fruit", url:"https://images.unsplash.com/photo-1494220394759-e0b232f883ef?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0d9ac6d7ff29e685c4ed80241a354901&auto=format&fit=crop&w=634&q=80" }
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
