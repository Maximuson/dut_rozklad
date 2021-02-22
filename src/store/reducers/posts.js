import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../utility";

const initialState = {
  items: [
    {
      id: 1,
      title: "Коротание ночей",
      text:
        "asda asdas sdas  djs jsd sjd sjd sdjsdhsdf sd sd ds sdhajwhda asda asdas sdas  djs jsd sjd sjd sdjsdhsdf sd sd ds sdhajwhda a sada asda asdas sdas  djs jsd sjd sjd sdjsdhsdf sd sd ds sdhajwhda a sada asda asdas sdas  djs jsd sjd sjd sdjsdhsdf sd sd ds sdhajwhda a sadaasda asdas sdas  djs jsd sjd sjd sdjsdhsdf sd sd ds sdhajwhda a sada a sada dawdawd dadawd awdawdawd awda",
    },
  ],
  isLoading: true,
  isPostLoading: true,
  error: null,
  post: {},
};

const fetchPostsStart = () => {
  return updateObject(state, {
    isLoading: true,
  });
};

const fetchPostsSuccess = (state, action) => {
  return updateObject(state, {
    items: [...action.payload],
    post: {},
    isLoading: false,
  });
};

const getPostStart = (state) => {
  return updateObject(state, {
    isPostLoading: true,
  });
};

const getPostSuccess = (state, action) => {
  return updateObject(state, {
    post: action.payload,
    isPostLoading: false,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_POSTS_START:
      return fetchPostsStart(state);
    case actionTypes.FETCH_POSTS_SUCCESS:
      return fetchPostsSuccess(state, action);

    case actionTypes.GET_POST_START:
      return getPostStart(state);
    case actionTypes.GET_POST_SUCCESS:
      return getPostSuccess(state, action);
    default:
      return state;
  }
};

export default reducer;
