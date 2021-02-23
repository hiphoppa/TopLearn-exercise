import { combineReducers } from "redux";
import { UserCourse } from "./Course";
import { UserCourses } from "./Courses";
import { GetUser } from "./User";

export const reducers = combineReducers({
    Courses: UserCourses,
    Course: UserCourse,
    User: GetUser
})