import { Col, Image } from 'react-bootstrap'

export default ({ item }) => {
    return (
        <Col xs={6} md={4} className="mb-4">
            <Image className="img-fluid" src={item.imgUrl} thumbnail />
            {/* <Image className="img-fluid" src={item.imgUrl} thumbnail /> */}
        </Col>
    )
}