import React from 'react'
import { Container, Row ,Col  } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import './Crafts.css'

const Crafts = () => {
    return (


        <div className="container-fluid" >
     
		
        <div className="scrolling-wrapper row flex-row flex-nowrap ">
           

                <Col> <span>AllCraftsmen:</span></Col>
                <Col><Link  className="nav-link p  " to="/homeCrafts/Electronic">Electrician </Link></Col>
                <Col><Link className="nav-link  p " to=""> Plumber </Link></Col>
                <Col><Link className="nav-link  p " to=""> Carpenter </Link></Col>
                <Col><Link className="nav-link  p " to="">  Cleaning </Link></Col>
                <Col><Link className="nav-link  p " to="">AirConditioning</Link></Col>
                <Col></Col>
                <Col></Col>
                <Col></Col>
                <Col></Col>

          
            </div>
         </div>

    )
}

export default Crafts
