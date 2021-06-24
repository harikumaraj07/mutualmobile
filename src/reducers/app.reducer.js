import {
  GET_ALL_POSTS,
  GET_POST_DETAILS,
  GET_USER_DETAILS,
  GET_COMMENTS_FOR_POST,
  GET_ALL_USERS,
  CLEAR_COMMETS,
  CLEAR_POST_DETAILS,
  CLEAR_USER_DETAILS,
} from '../actions/types';

const initialState = {
  users: [],
  posts: [],
  postDetails: {},
  comments: [],
  userDetails: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case GET_POST_DETAILS:
      return {
        ...state,
        postDetails: action.payload,
      };
    case GET_USER_DETAILS:
      return {
        ...state,
        userDetails: action.payload,
      };
    case GET_COMMENTS_FOR_POST:
      return {
        ...state,
        comments: action.payload,
      };
    case GET_ALL_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case CLEAR_COMMETS:
      return {
        ...state,
        comments: [],
      };
    case CLEAR_USER_DETAILS:
      return {
        ...state,
        userDetails: {},
      };
    case CLEAR_POST_DETAILS:
      return {
        ...state,
        postDetails: [],
      };
    default:
      return state;
  }
};
