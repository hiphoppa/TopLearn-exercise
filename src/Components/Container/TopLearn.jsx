import React from "react";
import Courses from "../Course/Courses";
import MainLayout from "../Layout/MainLayout";
import Login from "../Login/Login";
import { Route } from 'react-router'
import Register from "../Register/Register";
import Accounts from "../Dashboard/Account";
import Repair from "../Dashboard/Repair";
import Archive from "../Archive/Archive";
import Post from "../Posts/Post";

const TopLearn = props => {
    return (
        <MainLayout>
            <Route path='/' exact component={Courses} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/account' component={Accounts} />
            <Route path='/repair' component={Repair} />
            <Route path='/archive' component={Archive} />
            <Route path='/post' component={Post} />
        </MainLayout>
    )
}

export default TopLearn;