import {combineReducers } from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer'

const rootReducer = combineReducers({
  courses, //same as courses: courses.  Short-hand property name
  authors,
  ajaxCallsInProgress
});

export default rootReducer;
