import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import UserSideBar from '../../Components/User/UserSideBar'
import MySaved from '../../Components/User/MySaved'
const SavedPage = () => {
    return (
        <Container >
            <Row className='py-3'>
                <Col sm="3" xs="4" md="3">
                    <UserSideBar />
                </Col>

                <Col sm="9" xs="8" md="9">
                  <MySaved />
                </Col>
            </Row>
        </Container>
    )
}
export default SavedPage
