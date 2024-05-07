import React from 'react'
import { Card, Col ,Row} from 'react-bootstrap'
import real from "../../image/realstateim.png";
import per from "../../image/per.png";
import oo from "../../image/oo.png";
import bx from "../../image/bx_area.png";
import gr from "../../image/gridicons_location.png";
import ve from "../../image/Vecr.png";
import "../../Page/Products/RealestateDetailspage.css"

import { Link } from 'react-router-dom';

const RealestateCard = () => {
    return (
   
    

<div className='col-lg-6 '>

<Card
    className="Real-card" style={{backgroundColor:"var(--card_background)"}}>
    <Link to="/Realestate/:id" style={{ textDecoration: 'none' }}>
        <Card.Img className='realcard-img'  src={real} />
    </Link>
 
    <Card.Body className='card-body'>
      
        <div className='row r1'>
        <div className='col-2'><img src={per}/></div>
        <div className='col-9 a '> <span className='names'> Omer salah </span></div>
        <div className='col-1 a'><img src={oo}/></div>
        </div>

        <div className='row r2'>
        <div className='col-4 s'><span className='dis'>EGP 750,000</span> </div>
        <div className='col-3 s'>  <img src={bx}/><span  className='dis'> 115 m </span></div>
        <div className='col-4 s'> <span  className='dis'>Sale</span> </div>
        </div>

        <div className='row r3'>
        <div className='col-8 z'>  <img src={gr}/>Fayoum Road,beni suef</div>
        <div className='col-3 z'>  <img src={ve}/> <span className='road'> 2 days ago</span></div>
        </div>

    
     
    </Card.Body>
</Card>
          
        </div>


       
    )
}

export default RealestateCard