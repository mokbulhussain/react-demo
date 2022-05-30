import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import Footer from "../components/Footer/Footer";
import AboutDescription from "../components/AboutDescription/AboutDescription";

class AboutUsPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation/>
                <PageTop pageTitle="About Us"/>
                <AboutDescription/>
                <Footer/>
            </Fragment>
        );
    }
}

export default AboutUsPage;