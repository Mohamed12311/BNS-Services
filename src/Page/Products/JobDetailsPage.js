import React from 'react'
import { Container } from 'react-bootstrap'
import { Row ,Col} from 'react-bootstrap'
import share from "../../image/10.png";
import job from "../../image/job.png";
import part from "../../image/work.png";
import timer from "../../image/ic_outline-timer.png";
import EgP from "../../image/game-icons_money-stack.png";
import uil from "../../image/il_postcard.png";
import back from "../../image/back.png";
import whats from "../../image/whatsapp-icon.svg";
import pho from "../../image/jobtele2.png";
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './JobDetalisPage.css'

const  JobDetailsPage= () => {
    return (
      <Container>
    
        <div className="fo">
         

        <div className="f f1"> 

        <Link to="/homeJobs" style={{ textDecoration: 'none' }}>
        <img className='backk'  src={back}/>
        </Link>
            <h3 className='cash' >Cashier</h3>
            <div className='apply' style={{float:"right"}}> <div className='btn' >
              
            <DropdownButton  id="dropdown-basic-button"  title="Apply Now" size='md'  >
      <Dropdown.Item style={{marginTop:"5px"}} href="http://wa.me/+01063144509" target="_blank"><img style={{marginRight:"5px"}} src={whats} /> <span> Send message</span> </Dropdown.Item>
      <Dropdown.Item style={{marginTop:"5px"}} href="tel:+01063144509" target="_blank"><img style={{marginRight:"5px"}} src={pho} /> <span> Call +</span> <span>201000000000</span></Dropdown.Item>
           </DropdownButton>
              
              
               </div> 

                <img  className='sha' src={share} />
                
                </div>
        </div> 


        <div className="f f4">
        <Row className='row-f4' >
                     <div className='col-sm-2 p'> <img className='job2-img' src={part}/> <span className='job2-footer'>Part time</span> </div>
                      <div className='col-sm-2 p'> <img  className='job2-img' src={timer}/> <span  className='job2-footer'> 8 hr work</span></div>
                      <div className='col-sm-2 p'> <img  className='job2-img' src={EgP}/> <span  className='job2-footer'>EGP 4,500 </span> </div>
                      <div className='col-sm-2 p'> <img  className='job2-img'src={uil}/> <span  className='job2-footer'>2 days ago</span></div>
                      </Row>
             </div> 
        <div className="f f3">
        <Row>
                    <div className='col-2'> <img style={{ height: "80px", width: "80px" }} src={job} /></div>
                    <div className='col-8 Lamera' > <div> <span className='JobLocation' >Lamera</span><br/><span className='catagoo' >Restaurant&Café</span> </div> </div>
                      
                 </Row>
             </div> 
    
        <div className="f f2" >
          <div>
            <h4 style={{color:"var(--body_color)" , fontSize:"24px",fontWeight:"600"}}>Description:</h4>
            <p>
            A Fast Food Cashier works in a fast food restaurant, where they assist customers by taking payment for orders. Fast Food Cashier responsibilities include taking customer orders, serving food, and balancing the cash drawer. 
            </p>
          </div>
          <div>
            <h4 style={{color:"var(--body_color)" , fontSize:"24px",fontWeight:"600"}}>Requirements:</h4>
           <ul>
            <li style={{marginBottom:"10px"}}>College degree</li>
            <li  style={{marginBottom:"10px"}}>Experience with a cashier</li>
            <li  style={{marginBottom:"10px"}}>Must be proficient in Microsoft Word, Microsoft Excel, SAP, and other applicable computer systems</li>
           </ul>
          </div>
        </div>
     
    </div>
    </Container>
   

)
}

export default JobDetailsPage