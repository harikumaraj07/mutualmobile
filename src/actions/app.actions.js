import {
  GET_ALL_POSTS,
  GET_POST_DETAILS,
  GET_USER_DETAILS,
  GET_COMMENTS_FOR_POST,
  GET_ALL_USERS,
  CLEAR_COMMETS,
  CLEAR_POST_DETAILS,
  CLEAR_USER_DETAILS,
} from './types';
import api from '../services/api';

export const getAllPostsAction = () => dispatch => {
  return api('/posts', 'GET').then(payload => {
    dispatch({ type: GET_ALL_POSTS, payload });
  });
};

export const getPostDetailsAction = id => dispatch => {
  return api(`/posts/${id}`, 'GET').then(payload => {
    dispatch({ type: GET_POST_DETAILS, payload });
  });
};

export const getPostCommentsAction = id => dispatch => {
  return api(`/posts/${id}/comments`, 'GET').then(payload => {
    dispatch({ type: GET_COMMENTS_FOR_POST, payload });
  });
};

export const getUserDetailsAction = id => dispatch => {
  return api(`/users/${id}`, 'GET').then(payload => {
    dispatch({ type: GET_USER_DETAILS, payload });
  });
};

export const getAllUsersAction = () => dispatch => {
  return api('/users', 'GET').then(payload => {
    dispatch({ type: GET_ALL_USERS, payload });
  });
};

export const clearCommentsAction = () => dispatch => dispatch({ type: CLEAR_COMMETS });

export const clearUserDetailsAction = () => dispatch => dispatch({ type: CLEAR_USER_DETAILS });

export const clearPostDetailsAction = () => dispatch => dispatch({ type: CLEAR_POST_DETAILS });
