import React from 'react'
import { Link } from 'react-router-dom'
import "./HalloPage.css"
const HalloPage = () => {
    return (
       <div>

    
        <div className="HalloPage">

          <div className="Hallo Hallo1">
            <div style={{float:"left", color:"#FFFFFF" , margin:"38px 0px 0px 34px" , fontSize:"24px", fontWeight:"600"}}><h3>BNS 360</h3></div>
             <div style={{float:"right" ,margin:"38px 34px 0px 0px"  }}>
             <div className='row'>
             <div className='col-3' > <span style={{color:"#FFFFFF" , fontSize:"16px", fontWeight:"500px" }}>Aboutus</span></div>
             <div className='col-3'> <span style={{color:"#FFFFFF" , fontSize:"16px", fontWeight:"500px"}}>Contact</span></div>
             <div className='col-3' > <Link  className="btn" to="/login" style={{width:"68px" , height:"34px",margin:"-5px 0px 0px 0px" , fontSize:"16px", fontWeight:"500", border:"1px solid #FFFFFF" , borderRadius:"50px" , color:"#FFFFFF" , padding:"4px"}} > Login</Link></div>
             <div className='col-3'> <Link className="btn" to="/register" style={{ width:"81px" , height:"34px",margin:"-5px 0px 0px 0px" , fontSize:"16px", fontWeight:"500", border:"1px solid #222043" , borderRadius:"50px" , color:"#222043" , padding:"4px" , backgroundColor:"#FFFFFF"}} > Signup</Link></div>
             </div>

             

            </div> 

          </div>
          <div className="Hallo Hallo2"></div>

          <div className="Hallo Hallo3">
          <span className='searchde' >Search your Destination</span>
          <p className='parag' style={{color:"#FFFFFF" , fontSize:"20px", fontWeight:"400" , margin:"5px 0px 10px 30px" , textAlign:"start", lineHeight:"30px" , opacity:".8"}}>Welcome to BNS 360. We provide all the <br/> information about Beni Suef that helps you find <br/>your destination.</p>
          </div>

          <div className="Hallo Hallo4"></div>

          <div className="Hallo Hallo5">
          <div style={{margin:"40px 0px 0px 0px", width:"207px" , height:"60px" , fontSize:"24px", fontWeight:"600", border:"1px solid #222043" , borderRadius:"50px" , color:"#FFFFFF" , padding:"10px" , backgroundColor:"#222043"}} className='btn '>Get Started</div>
      </div>

      <div className="Hallo Hallo6">
      </div>



          </div>


       </div>
    )
}

export default HalloPage