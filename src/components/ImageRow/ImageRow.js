import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const ImageRow = () => {
    return (
        <React.Fragment>
            <Container>
                <Row>
                    <Col xs={6} md={4}>
                        <Image src="../../../public/images/coffee.jpg" rounded />
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src="../../../public/images/coffee.jpg" roundedCircle />
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src="../../../public/images/coffee.jpg" thumbnail />
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
};

export default ImageRow;