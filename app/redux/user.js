import axios from 'axios';

const GET_USER = 'GET_USER';

const gotMe = user => ({
  type: GET_USER,
  user
});

export const getMe = () => dispatch => {
  return axios
    .get('/authentication/auth/me')
    .then(res => res.data)
    .then(user => dispatch(gotMe(user)))
    .catch(console.error.bind(console));
};

export const login = formData => dispatch => {
  return axios
    .put('/authentication/auth/login', formData)
    .then(res => res.data)
    .then(user => dispatch(gotMe(user)))
    .catch(console.error.bind(console));
};

export const logout = userState => dispatch => {
  return axios
    .delete('/authentication/auth/logout')
    .then(() => dispatch(gotMe(userState.user)))
    .catch(console.error.bind(console));
};

const defaultState = {};

export const userReducer = (userState = defaultState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...userState,
        user: action.user
      };
    default:
      return userState;
  }
};
