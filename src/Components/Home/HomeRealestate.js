import React from 'react'
import RealestateCard from '../Products/RealestateCard';
import { Container,Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import add from '.././../image/add.png'

const  HomeRealestate= () => {
    return (
        <div>
       <Container>
       <h3 style={{margin:"20px 0px 20px 100px " , color:"var(--link2_color)" , fontSize:"20px" , fontWeight:"700"}}>Find your home!</h3>
       <form className="form-inline" style={{display:"flex" , margin:"20px 100px"}}>
      <input 
        className="form-control "  type="search" placeholder="Search..." aria-label="Search"  />
       <div className='btn btn-primary ' style={{margin:" 5px -45px  " ,height:"40px" , borderRadius:"25px", backgroundColor:"#222043" , border:"#222043"}}><i class="fa-solid fa-magnifying-glass"></i> </div>
      </form>
      <div className='row' style={{float:"right" , margin:"5px 15px 10px 0px"}}>
      <Link to="/homeReal/AddReal" style={{ textDecoration: "none" }}>
       <Col> <img style={{marginRight:"3px" , marginTop:"-2px" , width:"20px" , height:"20px"}} src={add}/> <span style={{color:"var(--link2_color)" , fontSize:"19px", fontWeight:"600"}}>Add property</span></Col>  
       </Link>
      </div>
   <Row style={{width:"100%"}}>

        <RealestateCard />
        <RealestateCard />
        <RealestateCard />
        <RealestateCard />

        </Row>
       </Container>

        </div>
    )
}

export default HomeRealestate