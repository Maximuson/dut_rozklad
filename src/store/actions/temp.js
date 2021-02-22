import * as actionTypes from "./actionTypes";

import axios from "axios";

const tempAction = (payload) => {
  return {
    type: actionTypes.TEMP,
    payload,
  };
};
