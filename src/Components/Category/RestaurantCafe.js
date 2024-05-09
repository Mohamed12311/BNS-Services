import React from 'react'
import { Container,Row } from 'react-bootstrap'
import ProductCard from '../Products/ProductCard'
import './RestaurantCafe.css'
const RestaurantCafe = () => {
    return (
        <Container>
            <h2 className='Restaurant'>Restaurant & Café</h2>
            <div className='input-group'>
      <form className="form-inline"  >
      <input 
        className="form-control "  type="search" placeholder="...Search" aria-label="Search"  />

      </form>
      </div>

      
      


            <Row className='my-2 d-flex justify-content-start'>
                <ProductCard />
                <ProductCard />
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

export default RestaurantCafe
