import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const ImageRow = () => {
    return (
        <Container fluid>
            <Row>
                <Col xs={6} md={4}>
                    <Image className="img-fluid" src="/images/broom.jpg" thumbnail />
                </Col>
                <Col xs={6} md={4}>
                    <Image className="img-fluid" src="/images/R_Room.jpg" thumbnail />
                </Col>
                <Col xs={6} md={4}>
                    <Image className="img-fluid" src="/images/coffee.jpg" thumbnail />
                </Col>
            </Row>
        </Container>
    );
};

export default ImageRow;