import { GetCourses } from "../Services/userServices"

export const Courses = () => {
    return async dispatch => {
        const { data } = await GetCourses();
        await dispatch({type: 'INIT', payload: data.courses})
    }
}