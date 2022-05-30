import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import Banner from "../components/Banner/Banner";
import Service from "../components/Service/Service";
import Blog from "../components/Blog/Blog";
import Footer from "../components/Footer/Footer";

class HomePage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation/>
                <Banner/>
                <Service/>
                <Blog/>
                <Footer/>
            </Fragment>
        );
    }
}

export default HomePage;