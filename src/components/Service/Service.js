import React, {Component, Fragment} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import web from '../../assets/img/web.png';
import graphics from '../../assets/img/graphics.png';
import digital from '../../assets/img/digital.png';

class Service extends Component {
    render() {
        return (
            <Fragment>
                <section className="service mt-5">
                    <h2 className="text-center mb-4">Service</h2>

                    <Container>
                        <Row>
                            <Col xl={4}>
                                <div className="service-content">
                                    <Card>
                                        <Card.Img variant="top" src={web} />
                                        <Card.Body>
                                            <Card.Title>Web Design</Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the bulk of
                                                the card's content.
                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                            <Col xl={4}>
                                <div className="service-content">
                                    <Card>
                                        <Card.Img variant="top" src={graphics} />
                                        <Card.Body>
                                            <Card.Title>Web Design</Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the bulk of
                                                the card's content.
                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                            <Col xl={4}>
                                <div className="service-content">
                                    <Card>
                                        <Card.Img variant="top" src={digital} />
                                        <Card.Body>
                                            <Card.Title>Web Design</Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the bulk of
                                                the card's content.
                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Fragment>
        );
    }
}

export default Service;