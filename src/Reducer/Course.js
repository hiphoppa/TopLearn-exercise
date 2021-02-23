export const UserCourse = (state = {}, action) => {
    switch (action.type) {
        case 'GetCourse':
            return {...action.payload }
        default:
            return state;
    }
}