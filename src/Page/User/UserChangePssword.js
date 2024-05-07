import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import UserSideBar from '../../Components/User/UserSideBar'
import ChangePassword from '../../Components/User/ChangePassword'
const UserChangePassword = () => {
    return (
        <Container >
            <Row className='py-3'>
                <Col sm="3" xs="4" md="3">
                    <UserSideBar />
                </Col>

                <Col sm="9" xs="8" md="9 ">
                  <ChangePassword/>
                </Col>
            </Row>
        </Container>
    )
}
export default UserChangePassword
