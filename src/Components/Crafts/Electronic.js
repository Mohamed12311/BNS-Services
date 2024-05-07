import React from 'react'
import { Container,Row } from 'react-bootstrap'
import CraftsCard from '../Products/CraftsCard'
import '../Category/RestaurantCafe.css'
const Electronic = () => {
    return (
        <Container>
          <h2 style={{fontSize:"24px" , fontWeight:"700" , color:"var(--link2_color)" , margin:"10px 0px 0px 0px"}}>Electronic</h2>
            <div className='input-group'>
      <form className="form-inline">
      <input 
        className="form-control "  type="search" placeholder="...Search" aria-label="Search"  />



   
      </form>
      </div>
            <Row className='my-2 d-flex justify-content-start'>
                <CraftsCard/>
                <CraftsCard/>
                <CraftsCard/>
                <CraftsCard/>
                <CraftsCard/>
                <CraftsCard/>
             
            </Row>
        </Container>
    )
}

export default Electronic