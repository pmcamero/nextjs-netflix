import Col from "./col"
import Heading from "./heading"
import Row from "./row"
import WordpressImage from './wordpressimage'

const PersonCard = ({ image, name }) => {
    return <Row>
        <Col xs="4" sm="4">
            <WordpressImage data={image} rounded />
        </Col>
        <Col xs="8" sm="8" alignItems="center">
            <Heading type="h3">{name}</Heading>
        </Col>
    </Row>
}
export default PersonCard