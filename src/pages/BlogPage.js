import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import Blog from "../components/Blog/Blog";
import Footer from "../components/Footer/Footer";

class BlogPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation/>
                <PageTop pageTitle="Blog" />
                <Blog/>
                <Blog/>
                <Footer/>
            </Fragment>
        );
    }
}

export default BlogPage;