import * as actionTypes from "./actionTypes";

import axios from "axios";

//#region mock data
const fakePosts = [];
//#endregion

const fetchPostsStart = () => {
  return {
    type: actionTypes.FETCH_POSTS_START,
  };
};

const fetchPostsSuccess = (payload) => {
  return {
    type: actionTypes.FETCH_POSTS_SUCCESS,
    payload,
  };
};

const fetchPostsFail = (err) => {
  return {
    type: actionTypes.FETCH_POSTS_FAIL,
    payload: err,
  };
};

const getPostStart = () => {
  return {
    type: actionTypes.GET_POST_START,
  };
};

const getPostSuccess = (payload) => {
  return {
    type: actionTypes.GET_POST_SUCCESS,
    payload,
  };
};

const getPostFail = (err) => {
  return {
    type: actionTypes.GET_POST_FAIL,
    payload: err,
  };
};

export const fetchPosts = (payload) => {
  return (dispatch) => {
    dispatch(fetchPostsStart);

    setTimeout(() => {
      dispatch(fetchPostsSuccess(fakePosts));
    }, 3000);

    //handle error

    //  dispatch(fetchPostsFail(err))
  };
};

export const getPost = (data) => {
  const mock = fakePosts.find((item) => item.id === data.id);
  //   console.log(mock);
  return (dispatch) => {
    dispatch(getPostStart());

    setTimeout(() => {
      dispatch(getPostSuccess(mock));
    }, 2000);
  };
};
