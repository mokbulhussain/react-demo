import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import Contact from "../components/contact/Contact";
import Footer from "../components/Footer/Footer";

class ContactPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation/>
                <PageTop pageTitle="Contact"/>
                <Contact/>
                <Footer/>
            </Fragment>
        );
    }
}

export default ContactPage;