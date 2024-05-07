import React from 'react'
import  DarkMode   from '../../DarkMode/DarkMode'
import logo from '../../image/Ellipse 22.png'
import profile from '../../image/Frame 83.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBarLogin = () => {
    return (

        <Navbar sticky='top' expand="lg" style={{backgroundColor:"var( --card_background)"}} >
        <Container>
          <Navbar.Brand >
          <a href='/'>
                        <img src={logo} className='logo' />
                </a>
          </Navbar.Brand>
          <Navbar.Brand >
            <i id='fasBns' style={{color:"var(--link2_color)"}}  class="fas fa-h1 " >BNS 360</i>
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" >
              <Nav.Link id='cata'style={{color:"var(--link2_color)"}} href="/HomePage">Home</Nav.Link>
              <Nav.Link id='cata'style={{color:"var(--link2_color)"}}  href="/homeCrafts">Craftsman</Nav.Link>
              <Nav.Link id='cata'style={{color:"var(--link2_color)"}} href='/homeJobs'>Jobs</Nav.Link>
              <Nav.Link id='cata'style={{color:"var(--link2_color)"}} href='/HomeRealestate'>Real estate</Nav.Link>
              <Nav.Link id='cata'style={{color:"var(--link2_color)"}} href='/user/favoriteproducts'>Favorites</Nav.Link>
            
              {/* /admin/addproduct  */}
              <DarkMode/> 
            </Nav>
        
      
      
          </Navbar.Collapse>
        </Container>
        <form className="d-flex   ">
        <Nav.Link id='cata' href='/user/profile'>
       <img style={{width:'40px',height:'40px' , marginRight:"-15px"}} src={profile} className="login-img " alt="sfvs" />  
       </Nav.Link>
            <i className="" style={{width:"130px" , margin:"9px 20px 10px 15px  " , fontSize:"15px" , fontWeight:"600" , color:"var(--link2_color)"}}>Mohamed Ahmed</i>
          </form>
        
      </Navbar>

    )
}

export default NavBarLogin
