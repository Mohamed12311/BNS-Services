import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import UserSideBar from '../../Components/User/UserSideBar'
import MyPost from '../../Components/User/MyPost';
const MyPostPage = () => {
    return (
        <Container >
            <Row className='py-3'>
                <Col sm="3" xs="4" md="3">
                    <UserSideBar />
                </Col>

                <Col sm="9" xs="8" md="9">
                  <MyPost />
                </Col>
            </Row>
        </Container>
    )
}
export default MyPostPage
