import React, {Component} from 'react';
import './assets/css/bootstrap.min.css';
import './assets/css/custom.css';

import Contact from "./components/contact/Contact";
import {BrowserRouter} from "react-router-dom";
import AppRoute from "./route/AppRoute";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
              <AppRoute/>
            </BrowserRouter>
        );
    }
}

export default App;