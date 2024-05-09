import React, { useState } from 'react'
import { Navbar, Container, Carousel } from 'react-bootstrap'

import pc1 from "../../image/pcc1.png";
import './Slider.css'

const Silder = () => {

    return (
        <div className="Cll">
            <div className="c c2">
                <div className='hider-name'> Welcome To <br/>Beni Suef,</div>
                <p className='hider-prgraf'>Beni Suef is the capital city of the Beni Suef Governorate in Egypt. The city is the location of Beni Suef University. An important agricultural trade centre on the west bank of the Nile River, the city is located 110 km south of Cairo. </p>
            </div>
             <div className="c c1">
             <div className='carousel'>  
             <Carousel fade id='Carousel'>
      <Carousel.Item >
      <img   className=" d-block w-100"  src={pc1} alt="" srcset="" />
      </Carousel.Item>

      <Carousel.Item>
      <img className="  d-block w-100"  src={pc1} alt="" srcset="" />
      </Carousel.Item>

      <Carousel.Item>
      <img className=" d-block w-100"  src={pc1} alt="" srcset="" />
      </Carousel.Item>

    </Carousel> 
</div> 
             </div>
       
        </div>
    )
}

export default Silder
