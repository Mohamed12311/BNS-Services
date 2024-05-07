import React from 'react'
import { Container,Row } from 'react-bootstrap'
import ProductCard from './ProductCard'


const CardProductsContainer = () => {
    return (
       
        <Container>
            
      
            <Row className='my-2 d-flex justify-content-start'>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </Row>
        </Container>
    )
}

export default CardProductsContainer
