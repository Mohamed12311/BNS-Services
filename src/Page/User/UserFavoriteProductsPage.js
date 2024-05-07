import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import UserFavoriteProduct from '../../Components/User/UserFavoriteProduct'
import UserFavoriteCrafts from '../../Components/User/UserFavoriteCrafts'
const UserFavoriteProductsPage = () => {
    return (
        <Container >
        
                <Col sm="12" xs="13" md="12">
                    <UserFavoriteProduct />
                </Col>
                <Col sm="12" xs="13" md="12" style={{marginTop:"25px"}}>
                    <UserFavoriteCrafts />
                </Col>
            
        </Container>
    )
}

export default UserFavoriteProductsPage
