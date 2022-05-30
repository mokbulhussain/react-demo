import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import banner from '../../assets/img/banner.jpg';

class Banner extends Component {
    render() {
        return (
            <Fragment>
                <section className="banner">
                    <Container>
                        <Row>
                            <Col xl={6} className="align-items-center d-flex">
                                <div className="banner-content text-center">
                                    <h1>More Learn Then More Earn</h1>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                        text ever since the 1500s,</p>
                                </div>
                            </Col>
                            <Col xl={6}>
                               <div className="banner-img">
                                   <img src={banner} alt="" />
                               </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

            </Fragment>
        );
    }
}

export default Banner;