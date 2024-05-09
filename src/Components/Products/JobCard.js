import React from 'react'
import { Card, Col ,Row} from 'react-bootstrap'
import job from "../../image/job.png";
import share from "../../image/10.png";
import part from "../../image/part.png";
import timer from "../../image/timer.png";
import EgP from "../../image/Egp.png";
import uil from "../../image/uil_postcard.png";
import { Link } from 'react-router-dom';
const JobCard = () => {
    return (
   
        <Col sm="12" md="12" lg="12" className="d-flex ">

            <Card
                className="my-2"
                style={{
                    width: "100%",
                    height: "250px",
                    borderRadius: "10px",
                    border: "none",
                    backgroundColor: "var(--card_background)",
                    boxShadow: "0 2px 2px 0 rgba(151,151,151,0.5)",
                    padding:"20px"
                }}>
                 
                 <Row id='jo-ro'>
                    <div className='col-1'> <Card.Img style={{ height: "80px", width: "80px" }} src={job} /></div>
                    <div className='col-10'> <span className='title'> Cashier</span><br/> <div style={{display:"flex"}} className='lp'> <span className='JobLocation'>Lamera</span> <span className='catagoo'>Restaurant&Café</span> </div> </div>
                    <div className='col-1'> <Card.Img style={{ height: "44px", width: "44px" }} className='sh' src={share} /></div>
                 </Row>
                   
                
                 <Link to="/Jobs/:id" style={{ textDecoration: 'none' }}>
                <Card.Body>

                    <Card.Text>
                    <p className="job-text" > A Fast Food Cashier works in a fast food restaurant, where they assist customers by taking payment for orders </p>
                    </Card.Text>
                    <div>
                    <Row className='fg-job' >
                  
                      <div className='col-3'> <img className='job-img' src={part}/> <span className='job-footer'>Part time</span> </div>
                      <div className='col-3'> <img  className='job-img' src={timer}/> <span  className='job-footer'> 8 hr work</span></div>
                      <div className='col-3'> <img  className='job-img' src={EgP}/> <span  className='job-footer'>EGP 4,500 </span> </div>
                      <div className='col-3'> <img  className='job-img'src={uil}/> <span  className='job-footer'>2 days ago</span></div>
                  
                    </Row>
                    </div>
                </Card.Body>
                </Link>
            </Card>
          
        </Col>
       
    )
}

export default JobCard