import axios from 'axios';

//action types
const SET_GROCERIES = 'SET_GROCERIES';
const ADD_GROCERY = 'ADD_GROCERY ';
const REMOVE_GROCERY = 'REMOVE_GROCERY';
const UPDATE_GROCERY = 'UPDATE_GROCERY';

//action creator
export const setGroceries = groceries => ({
  type: SET_GROCERIES,
  groceries
});

export const addGrocery = newGrocery => ({
  type: ADD_GROCERY,
  newGrocery
});

export const removeGrocery = groceryId => ({
  type: REMOVE_GROCERY,
  groceryId
});

export const updateGrocery = changeGrocery => ({
  type: UPDATE_GROCERY,
  changeGrocery
});

//thunk creators
export const fetchGrocery = () => async dispatch => {
  try {
    const {data: groceries} = await axios.get('/api/groceries');
    console.log('groceries are looking like ===> ', groceries);
    dispatch(setGroceries(groceries));
  } catch (err) {
    console.log(err);
  }
};

export const postGrocery = newGrocery => async dispatch => {
  const {data} = await axios.post('/api/groceries', newGrocery);
  const action = addGrocery(data);
  dispatch(action);
};

export const deleteGrocery = groceryId => async dispatch => {
  await axios.delete(`/api/groceries/${groceryId}`);
  dispatch(removeGrocery(groceryId));
};

export const updatedGrocery = grocery => async dispatch => {
  const {data} = await axios.put(`/api/groceries/${grocery.id}`, grocery);
  dispatch(updateGrocery(data));
};

//reducer
const defaultState = [];

export const groceryReducer = (groceryState = defaultState, action) => {
  switch (action.type) {
    case SET_GROCERIES:
      return action.groceries;
    case ADD_GROCERY:
      return [...groceryState, action.newGrocery];
    case REMOVE_GROCERY:
      return groceryState.filter(grocery => grocery.id !== action.groceryId);
    case UPDATE_GROCERY:
      return groceryState.map(grocery => {
        if (grocery.id === action.changeGrocery.id) {
          return {...grocery, ...action.changeGrocery};
        } else {
          return grocery;
        }
      });
    default:
      return groceryState;
  }
};
