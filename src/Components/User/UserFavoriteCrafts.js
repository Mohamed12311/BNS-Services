import React from 'react'
import { Row } from 'react-bootstrap';
import CraftsCard from '../Products/CraftsCard';
const  UserFavoriteCrafts= () => {
    return (
        <div>
            <div className="admin-content-text pb-4">Your Favorite Craftsman:</div>
            <Row className='justify-content-start'>
                <CraftsCard/>
                <CraftsCard/>
                <CraftsCard/>
               
            </Row>
    
        </div>
    )
}

export default UserFavoriteCrafts