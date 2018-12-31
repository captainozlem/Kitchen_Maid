import {combineReducers} from 'redux';
import {groceryReducer} from './grocery';
import {recipeReducer} from './recipes';

const appReducer = combineReducers({
  grocery: groceryReducer,
  recipes: recipeReducer
});

export default appReducer;
