import parse from "node-html-parser";
import { getSelectData } from "../../utility";

import { updateObject } from "../../utility";
import {
  GET_COURSE_START,
  GET_COURSE_SUCCESS,
  GET_FACULTATIES_START,
  GET_FACULTATIES_SUCCESS,
  GET_GROUP_START,
  GET_GROUP_SUCCESS,
} from "../actions/actionTypes";

const initialState = {
  facultaties: [],
  courses: [],
  groups: [],

  isLoading: true,
  error: null,
};

const getFacultatiesData = (html) => {
  const dom = parse(html.toString());
  const select = dom.querySelector("#TimeTableForm_faculty");

  const facultaties = getSelectData(select);

  return facultaties;
};

const getFacultatiesStart = (state) => {
  return updateObject(state, {
    isLoading: true,
  });
};

const getFacultatiesSuccess = (state, action) => {
  const responseData = action.payload.data;
  const facultaties = getFacultatiesData(responseData);

  return updateObject(state, {
    facultaties: facultaties,
    isLoading: false,
  });
};

//#region course

const getCourseData = (html) => {
  const dom = parse(html.toString());
  const select = dom.querySelector("#TimeTableForm_course");

  const courses = getSelectData(select);

  return courses;
};

const getCoursesStart = (state) => {
  return updateObject(state, {
    isLoading: true,
  });
};

const getCoursesSuccess = (state, action) => {
  const responseData = action.payload.data;

  const courses = getCourseData(responseData);

  return updateObject(state, {
    courses: courses,
    isLoading: false,
  });
};

//#endregion

//#region group

const getGroupData = (html) => {
  const dom = parse(html.toString());
  const select = dom.querySelector("#TimeTableForm_group");

  const groups = getSelectData(select);

  return groups;
};

const getGroupsStart = (state) => {
  return updateObject(state, {
    isLoading: true,
  });
};

const getGroupsSuccess = (state, action) => {
  const responseData = action.payload.data;
  const groups = getGroupData(responseData);

  return updateObject(state, {
    groups: groups,
    isLoading: false,
  });
};

//#endregion

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FACULTATIES_START:
      return getFacultatiesStart(state);
    case GET_FACULTATIES_SUCCESS:
      return getFacultatiesSuccess(state, action);

    case GET_COURSE_START:
      return getCoursesStart(state, action);
    case GET_COURSE_SUCCESS:
      return getCoursesSuccess(state, action);

    case GET_GROUP_START:
      return getGroupsStart(state, action);
    case GET_GROUP_SUCCESS:
      return getGroupsSuccess(state, action);
    default:
      return state;
  }
};

export default reducer;
