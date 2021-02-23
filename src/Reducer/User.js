export const GetUser = (state = {}, action) => {
    switch (action.type) {
        case 'LoginUser':
            return {...action.payload };
        case 'LogoutUser':
            return {...action.payload };
        default:
            return state;
    }
}