import axios from 'axios';

//action types
const SET_RECIPES = 'SET_RECIPES';
const ADD_RECIPE = 'ADD_RECIPE';
const REMOVE_RECIPE = 'REMOVE_RECIPE';

//action creator
export const setRecipes = recipes => ({
  type: SET_RECIPES,
  recipes
});

export const addRecipe = newRecipe => ({
  type: ADD_RECIPE,
  newRecipe
});

export const removeRecipe = recipeId => ({
  type: REMOVE_RECIPE,
  recipeId
});

//thunk creators
export const fetchRecipes = () => async dispatch => {
  try {
    const {data: recipes} = await axios.get('/api/recipes');
    console.log('recipes are looking like ====>', recipes);
    dispatch(setRecipes(recipes));
  } catch (err) {
    console.log(err);
  }
};

export const postRecipe = newRecipe => async dispatch => {
  const {data} = await axios.post('/api/recipes', newRecipe);
  const action = addRecipe(data);
  dispatch(action);
};

export const deleteRecipe = recipeId => async dispatch => {
  await axios.delete(`/api/recipes/${recipeId}`);
  dispatch(removeRecipe(recipeId));
};

//default state
//const defaultRobotState = [];

// I stayed there should be deciced what will be the recipes state !! Arr or obj
//reducer
export const projectsReducer = (projectsState = [], action) => {
  switch (action.type) {
    case SET_PROJECTS:
      return action.projects;
    case ADD_PROJECT:
      return [...projectsState, action.newProject];
    case REMOVE_PROJECT:
      return projectsState.filter(project => project.id !== action.projectId);
    default:
      return projectsState;
  }
};
