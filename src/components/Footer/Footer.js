import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";

class Footer extends Component {
    render() {
        return (
            <Fragment>
                <footer className="mt-5 footer">
                    <Container>
                        <Row>
                            <Col>
                                <div className="footer-content text-center">
                                    <h3>Copyright@Mokbulhussain</h3>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </footer>
            </Fragment>
        );
    }
}

export default Footer;