import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import SeviceAddBusiness from '../../Components/User/SeviceAddBusiness'
import UserSideBar from '../../Components/User/UserSideBar'
const SeviceAddBusinessPage = () => {
    return (
        <Container >
            <Row className='py-3'>
                <Col sm="3" xs="4" md="3">
                    <UserSideBar />
                </Col>

                <Col sm="9" xs="8" md="9">
                  <SeviceAddBusiness />
                </Col>
            </Row>
        </Container>
    )
}

export default SeviceAddBusinessPage
