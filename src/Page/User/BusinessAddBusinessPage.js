import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import UserSideBar from '../../Components/User/UserSideBar'
import BusinessAddBusiness from '../../Components/User/BusinessAddBusiness';
const BusinessAddBusinessPage = () => {
    return (
        <Container >
            <Row className='py-3'>
                <Col sm="3" xs="4" md="3">
                    <UserSideBar />
                </Col>

                <Col sm="9" xs="8" md="9">
                  <BusinessAddBusiness />
                </Col>
            </Row>
        </Container>
    )
}
export default BusinessAddBusinessPage
