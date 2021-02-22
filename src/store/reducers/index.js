const { combineReducers } = require("redux");

import tempReducer from "./temp";
import postsReducer from "./posts";
import facultatiesReducer from "./facultaties";

const appReducer = combineReducers({
  temp: tempReducer,
  posts: postsReducer,
  facultaties: facultatiesReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "LOGOUT_USER") {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
