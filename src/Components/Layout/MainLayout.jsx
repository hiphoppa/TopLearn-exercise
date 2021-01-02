import React, { Fragment } from 'react';
import Footer from '../Common/Footer';
import Header from '../Common/Header';
import MainNav from '../Navs/MainNav';
import TopNav from '../Navs/TopNav';


const MainLayout = props => {
    return (
        <Fragment>
            <div className="landing-layer">
                <div className="container">
                    <TopNav />
                    <Header />
                </div>
            </div>
            <MainNav />
            <main id="home-page">
                <div className="container">
                    {props.children}
                </div>
            </main>
            <Footer />
        </Fragment>
    );
}
 
export default MainLayout;