import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";

class PageTop extends Component {
    render() {
        return (
            <Fragment>
                <section className="pageTop">
                    <Container>
                        <Row>
                            <Col>
                                <div className="pageTop-content text-center">
                                    <h3>{this.props.pageTitle}</h3>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

            </Fragment>
        );
    }
}

export default PageTop;