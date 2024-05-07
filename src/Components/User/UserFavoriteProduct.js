import React from 'react'
import { Row } from 'react-bootstrap';
import ProductCard from './../Products/ProductCard';
const UserFavoriteProduct = () => {
    return (
        <div>
            <div className="admin-content-text pb-4">Your Favorite Places:</div>
            <Row className='justify-content-start'>
                <ProductCard />
                <ProductCard />
                <ProductCard />
               
            </Row>
    
        </div>
    )
}

export default UserFavoriteProduct
