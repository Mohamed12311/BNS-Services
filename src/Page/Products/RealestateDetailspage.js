import React from 'react'
import share from "../../image/10.png";
import pc1 from "../../image/pcc1.png";
import per from "../../image/per.png";
import bx from "../../image/bx_area.png";
import gr from "../../image/gridicons_location.png";
import back from "../../image/back.png";
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import whats from "../../image/whatsapp-icon.svg";
import pho from "../../image/jobtele2.png";

import './RealestateDetailspage.css'

const  RealestateDetailspage= () => {
    return (
    
    
        <div className="RealestateDetailspage" >
 
         <div className='Real1 Real'>
         <Link to="/HomeRealestate" style={{ textDecoration: 'none' }}>
          <div className='Realback'> <img style={{float:"left"}} src={back}/>  </div>
          </Link>
          <div className='Realsave'><img style={{float:"right"}} src={share}/> </div>
         </div>

 
         <div className='Real2 Real'>

         <div className='row r1'>
        <div className='col-sm-2'><img src={per}/></div>
        <div className='col-sm-3 t' > <span className='names'> Omer salah </span> <br/> <span style={{color:"#909090" , fontWeight:"600"}}>2 days ago</span></div>
        </div>

        <div className='row r2'>
        <div className='col-4 s'><span className='dis'>EGP 750,000</span> </div>
        <div className='col-3 s'>  <img src={bx}/><span  className='dis'> 115 m </span></div>
        <div className='col-4 s'> <span  className='dis'>Sale</span> </div>
        </div>
        <div className='com' >  <img src={gr}/>Fayoum Road,beni suef</div>
         </div>
   
    
         <div className='Real3 Real'>
         <h4 style={{color:"var( --body_color)" , fontSize:"24px",fontWeight:"600"}}>Description:</h4>
         <span style={{fontSize:"18px", fontWeight:"500", color:"var(--card-h_color)"}}>
            A Fast Food Cashier works in a fast food restaurant, where they assist customers by taking payment for orders. Fast Food Cashier responsibilities include taking customer orders, serving food, and balancing the cash drawer. 
            </span>

            <center> <div className='btn ' style={{  marginTop:"50px"}}>
               
            <DropdownButton  id="dropdown-basic-button"  title="Buy now" size='md'  >
      <Dropdown.Item style={{marginTop:"5px"}} href="http://wa.me/+01063144509" target="_blank"><img style={{marginRight:"5px"}} src={whats} /> <span > Send message</span> </Dropdown.Item>
      <Dropdown.Item style={{marginTop:"5px"}} href="tel:+01063144509" target="_blank" ><img style={{marginRight:"5px"}} src={pho} /> <span  > Call +</span> <span>201000000000</span></Dropdown.Item>
           </DropdownButton>
            
               </div></center>
         </div>
     

         <div className='Real4 Real'> 
         <Carousel fade className='real-homecarousel' id='sel'>
      <Carousel.Item >
      <img className=" real-carousel d-block w-100"  src={pc1} alt="" srcset="" />
      </Carousel.Item>

      <Carousel.Item>
      <img className=" real-carousel d-block w-100"  src={pc1} alt="" srcset="" />
      </Carousel.Item>

      <Carousel.Item>
      <img className=" real-carousel d-block w-100"  src={pc1} alt="" srcset="" />
      </Carousel.Item>

    </Carousel>
          </div>
       
     
         </div>
    
   

)
}

export default RealestateDetailspage