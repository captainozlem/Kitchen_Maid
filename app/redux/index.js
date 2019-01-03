import {combineReducers} from 'redux';
import {groceryReducer} from './grocery';
import {userReducer} from './user';

const appReducer = combineReducers({
  grocery: groceryReducer,
  user: userReducer
  //recipes: recipeReducer
});

export default appReducer;
