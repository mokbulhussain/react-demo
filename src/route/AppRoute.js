import React, {Component} from 'react';
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutUsPage from "../pages/AboutUsPage";
import Service from "../components/Service/Service";
import BlogPage from "../pages/BlogPage";
import ContactPage from "../pages/ContactPage";

class AppRoute extends Component {
    render() {
        return (
            <div>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="about" element={<AboutUsPage />} />
                    <Route path="blog" element={<BlogPage />} />
                    <Route path="contact" element={<ContactPage />} />
                </Routes>
            </div>
        );
    }
}

export default AppRoute;