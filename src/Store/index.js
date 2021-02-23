import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { reducers } from "../Reducer/CombineReducers";
import { GetCourses } from "../Services/userServices";

export const Store = createStore(reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    // compose(
    //     applyMiddleware(thunk),
    //     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    // )
)

// Store.dispatch(GetCourses());

Store.subscribe(() => console.log(Store.getState()))