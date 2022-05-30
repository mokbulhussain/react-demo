import React, {Component, Fragment} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import blog from '../../assets/img/banner.jpg';

class Blog extends Component {
    render() {
        return (
            <Fragment>
                <section className="blog">
                    <h2 className="text-center mb-4">Blog</h2>
                    <Container>
                        <Row>
                            <Col xl={4}>
                                <div className="blog-content">
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={blog} />
                                        <Card.Body>
                                            <Card.Title>Card Title</Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the bulk of
                                                the card's content.
                                            </Card.Text>
                                            <Button variant="primary">Read More</Button>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                            <Col xl={4}>
                                <div className="blog-content">
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={blog} />
                                        <Card.Body>
                                            <Card.Title>Card Title</Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the bulk of
                                                the card's content.
                                            </Card.Text>
                                            <Button variant="primary">Read More</Button>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                            <Col xl={4}>
                                <div className="blog-content">
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={blog} />
                                        <Card.Body>
                                            <Card.Title>Card Title</Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the bulk of
                                                the card's content.
                                            </Card.Text>
                                            <Button variant="primary">Read More</Button>
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

export default Blog;