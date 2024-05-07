import React from 'react'
import { Container, Row ,Col  } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import './HomeCategory.css'

const HomeCategory = () => {
    return (
     

            <div className="container-fluid" >
     
		
    <div className="scrolling-wrapper row flex-row flex-nowrap ">
             <Col> <span>AllCategories:</span></Col>
                <Col><Link  className="nav-link "  to="/HomePage/restaurantCafe" >Restaurant&café  </Link></Col>
                <Col><Link className="nav-link    " to=""> Hospitals </Link></Col>
                <Col><Link className="nav-link   " to=""> Clinics </Link></Col>
                <Col><Link className="nav-link   " to="">  Banks </Link></Col>
                <Col><Link className="nav-link   " to="">Hotels</Link></Col>
                <Col><Link className="nav-link   " to=""> Universities </Link></Col>
                <Col><Link className="nav-link   " to="">  Libraries </Link></Col>
                <Col><Link className="nav-link   " to="">  Entertainment </Link></Col>
                <Col><Link className="nav-link   " to="">  Pharmacies </Link></Col>
		
			
    </div>
</div>

          

            
    )
}

export default HomeCategory
