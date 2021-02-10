import { Container, Row } from 'react-bootstrap'
import Header from '../../components/Header'
import SingleImage from '../../components/SingleImage'
import { imageList } from './mockData'

export default () => {
    return (
        <div>
            <Header />
            <Container fluid>
                <Row>
                    {
                        imageList.map((item, index) =>
                            <SingleImage key={index} item={item} />
                        )
                    }
                </Row>
            </Container>
        </div>
    )
}
