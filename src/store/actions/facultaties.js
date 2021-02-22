import axios from "axios";
import {
  GET_COURSE_START,
  GET_COURSE_SUCCESS,
  GET_COURSE_FAIL,
  GET_FACULTATIES_FAIL,
  GET_FACULTATIES_START,
  GET_FACULTATIES_SUCCESS,
  GET_GROUP_FAIL,
  GET_GROUP_START,
  GET_GROUP_SUCCESS,
} from "./actionTypes";

const baseUrl = `http://e-rozklad.dut.edu.ua/timeTable/group?TimeTableForm[faculty]=$faculty&TimeTableForm[course]=$course`;

const facultaties_url = "http://e-rozklad.dut.edu.ua/timeTable/group";

export const getFacultatiesStart = () => {
  return {
    type: GET_FACULTATIES_START,
  };
};

export const getFacultatiesSuccess = (payload) => {
  return {
    type: GET_FACULTATIES_SUCCESS,
    payload,
  };
};

export const getFacultatiesFail = (payload) => {
  return {
    type: GET_FACULTATIES_FAIL,
    payload,
  };
};

export const getFacultaties = () => {
  return (dispatch) => {
    dispatch(getFacultatiesStart());

    axios
      .get(facultaties_url)
      .then((res) => {
        dispatch(getFacultatiesSuccess(res));
      })
      .catch((err) => {
        dispatch(getFacultatiesFail(err));
      });
  };
};

export const getCoursesStart = () => {
  return {
    type: GET_COURSE_START,
  };
};

export const getCoursesSuccess = (payload) => {
  return {
    type: GET_COURSE_SUCCESS,
    payload,
  };
};

export const getCoursesFail = (payload) => {
  return {
    type: GET_COURSE_FAIL,
    payload,
  };
};

export const getCourses = ({ facultatie }) => {
  return (dispatch) => {
    dispatch(getCoursesStart());

    axios
      .get(
        `http://e-rozklad.dut.edu.ua/timeTable/group?TimeTableForm[faculty]=${facultatie}`
      )
      .then((res) => {
        dispatch(getCoursesSuccess(res));
      })
      .catch((err) => {
        dispatch(getCoursesFail(err));
      });
  };
};

export const getGroupsStart = () => {
  return {
    type: GET_GROUP_START,
  };
};

export const getGroupSuccess = (payload) => {
  return {
    type: GET_GROUP_SUCCESS,
    payload,
  };
};

export const getGroupsFail = (payload) => {
  return {
    type: GET_GROUP_FAIL,
    payload,
  };
};

export const getGroups = ({ facultatie, course }) => {
  return (dispatch) => {
    dispatch(getFacultatiesStart());

    axios
      .get(
        `http://e-rozklad.dut.edu.ua/timeTable/group?TimeTableForm[faculty]=${facultatie}&TimeTableForm[course]=${course}`
      )
      .then((res) => {
        dispatch(getGroupSuccess(res));
      })
      .catch((err) => {
        dispatch(getGroupsFail(err));
      });
  };
};
