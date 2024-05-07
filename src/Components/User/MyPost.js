import React, { useEffect } from 'react'
import "./MyPOST.css"
import RealestateCard  from "../../Components/Products/RealestateCard"
import { Card, Col ,Row} from 'react-bootstrap'
import job from "../../image/job.png";
import share from "../../image/10.png";
import part from "../../image/part.png";
import timer from "../../image/timer.png";
import EgP from "../../image/Egp.png";
import uil from "../../image/uil_postcard.png";
import real from "../../image/realstateim.png";
import per from "../../image/per.png";
import oo from "../../image/oo.png";
import bx from "../../image/bx_area.png";
import gr from "../../image/gridicons_location.png";
import ve from "../../image/Vecr.png";
import "../../Page/Products/RealestateDetailspage.css"
import { Link } from 'react-router-dom';
const  MyPost= () => {
  // useEffect(() => {

  //   const wrapper = document.querySelector('.wrapper')
  //   let pressed = false
  //   let startX = 0
    
  //   wrapper.addEventListener('mousedown', function (e) {
  //     pressed = true
  //     startX = e.clientX
  //     this.style.cursor = 'grabbing'
  //   })
    
  //   wrapper.addEventListener('mouseleave', function (e) {
  //     pressed = false
  //   })
    
  //   window.addEventListener('mouseup', function (e) {
  //     pressed = false
  //     wrapper.style.cursor = 'grab'
  //   })
    
  //   wrapper.addEventListener('mousemove', function (e) {
  //     if(!pressed) {
  //       return
  //     }
  //     this.scrollLeft += startX - e.clientX
  //   })

  // }, []);



    return (
        <div>
          <div className='post-job'>
<span style={{fontSize:"24px" , fontWeight:"700" , color:"var(--link2_color)"}}>Jobs</span>
         
<div className="cards">
    <div className="card">
    <Col>

<Card
 
    style={{
        width: "100%",
        height: "300px",
        borderRadius: "10px",
        border: "none",
        backgroundColor: "var(--card_background)",
        boxShadow: "0 2px 2px 0 rgba(151,151,151,0.5)",
        padding:"20px"
    }}>
     
     <Row>
        <div className='col-1'> <Card.Img style={{ height: "80px", width: "80px" }} src={job} /></div>
        <div className='col-9' style={{margin:"0px 0px 0px 34px"}}> <span className='title'> Cashier</span><br/> <div  style={{display:"flex"}}> <span className='JobLocation'>Lamera</span> <span className='catagoo'>Restaurant&Café</span> </div> </div>
        <div className='col-1'> <Card.Img style={{ height: "44px", width: "44px" }} src={share} /></div>
     </Row>

    <Card.Body>
        <Card.Text>
        <p className="job-text"style={{margin:"20px 0px 0px 0px"}} > A Fast Food Cashier works in a fast food restaurant, where they assist customers by taking payment for orders. Fast Food Cashier responsibilities include taking customer orders, serving food, and balancing the cash drawer. </p>
        </Card.Text>
        <div>
        <Row style={{padding:"5px 0px 0px 0px"}}>
          <div className='col-3'> <img className='job-img' src={part}/> <span className='job-footer' style={{fontSize:"16px"}}>Part time</span> </div>
          <div className='col-3'> <img  className='job-img' src={timer}/> <span  className='job-footer'style={{fontSize:"16px"}}> 8 hr work</span></div>
          <div className='col-3'> <img  className='job-img' src={EgP}/> <span  className='job-footer'style={{fontSize:"16px"}}>EGP 4,500 </span> </div>
          <div className='col-3'> <img  className='job-img'src={uil}/> <span  className='job-footer'style={{fontSize:"16px"}}>2 days ago</span></div>
        </Row>
        <Link   to="/user/MyPost/updateJobPost:id" className='btn btn-primary' style={{margin:"25px 0px 0px 0px" , float:"left"}}>Update</Link>
        <div className='btn btn-danger' style={{margin:"25px 0px 0px 0px" , float:"right"}}>Delete</div>
        </div>
    
    </Card.Body>
</Card>
</Col>
    </div>




    <div className="card">
    <Col>

<Card
    style={{
        width: "100%",
        height: "300px",
        borderRadius: "10px",
        border: "none",
        backgroundColor: "var(--card_background)",
        boxShadow: "0 2px 2px 0 rgba(151,151,151,0.5)",
        padding:"20px"
    }}>
     
     <Row>
        <div className='col-1'> <Card.Img style={{ height: "80px", width: "80px" }} src={job} /></div>
        <div className='col-9' style={{margin:"0px 0px 0px 34px"}}> <span className='title'> Cashier</span><br/> <div  style={{display:"flex"}}> <span className='JobLocation'>Lamera</span> <span className='catagoo'>Restaurant&Café</span> </div> </div>
        <div className='col-1'> <Card.Img style={{ height: "44px", width: "44px" }} src={share} /></div>
     </Row>

    <Card.Body>
        <Card.Text>
        <p className="job-text"style={{margin:"20px 0px 0px 0px"}} > A Fast Food Cashier works in a fast food restaurant, where they assist customers by taking payment for orders. Fast Food Cashier responsibilities include taking customer orders, serving food, and balancing the cash drawer. </p>
        </Card.Text>
        <div>
        <Row style={{padding:"5px 0px 0px 0px"}}>
          <div className='col-3'> <img className='job-img' src={part}/> <span className='job-footer' style={{fontSize:"16px"}}>Part time</span> </div>
          <div className='col-3'> <img  className='job-img' src={timer}/> <span  className='job-footer'style={{fontSize:"16px"}}> 8 hr work</span></div>
          <div className='col-3'> <img  className='job-img' src={EgP}/> <span  className='job-footer'style={{fontSize:"16px"}}>EGP 4,500 </span> </div>
          <div className='col-3'> <img  className='job-img'src={uil}/> <span  className='job-footer'style={{fontSize:"16px"}}>2 days ago</span></div>
        
        </Row>
        <Link  to="/user/MyPost/updateJobPost:id" className='btn btn-primary' style={{margin:"25px 0px 0px 0px" , float:"left"}}>Update</Link>
        <div className='btn btn-danger' style={{margin:"25px 0px 0px 0px" , float:"right"}}>Delete</div>
        </div>
    </Card.Body>
</Card>
</Col>
    </div>



    <div className="card">
    <Col>

<Card
    style={{
        width: "100%",
        height: "300px",
        borderRadius: "10px",
        border: "none",
        backgroundColor: "var(--card_background)",
        boxShadow: "0 2px 2px 0 rgba(151,151,151,0.5)",
        padding:"20px"
    }}>
     
     <Row>
        <div className='col-1'> <Card.Img style={{ height: "80px", width: "80px" }} src={job} /></div>
        <div className='col-9' style={{margin:"0px 0px 0px 34px"}}> <span className='title'> Cashier</span><br/> <div  style={{display:"flex"}}> <span className='JobLocation'>Lamera</span> <span className='catagoo'>Restaurant&Café</span> </div> </div>
        <div className='col-1'> <Card.Img style={{ height: "44px", width: "44px" }} src={share} /></div>
     </Row>

    <Card.Body>
        <Card.Text>
        <p className="job-text"style={{margin:"20px 0px 0px 0px"}} > A Fast Food Cashier works in a fast food restaurant, where they assist customers by taking payment for orders. Fast Food Cashier responsibilities include taking customer orders, serving food, and balancing the cash drawer. </p>
        </Card.Text>
        <div>
        <Row style={{padding:"5px 0px 0px 0px"}}>
          <div className='col-3'> <img className='job-img' src={part}/> <span className='job-footer' style={{fontSize:"16px"}}>Part time</span> </div>
          <div className='col-3'> <img  className='job-img' src={timer}/> <span  className='job-footer'style={{fontSize:"16px"}}> 8 hr work</span></div>
          <div className='col-3'> <img  className='job-img' src={EgP}/> <span  className='job-footer'style={{fontSize:"16px"}}>EGP 4,500 </span> </div>
          <div className='col-3'> <img  className='job-img'src={uil}/> <span  className='job-footer'style={{fontSize:"16px"}}>2 days ago</span></div>
        </Row>
        <Link  to="/user/MyPost/updateJobPost:id"  className='btn btn-primary' style={{margin:"25px 0px 0px 0px" , float:"left"}}>Update</Link>
        <div className='btn btn-danger' style={{margin:"25px 0px 0px 0px" , float:"right"}}>Delete</div>
        </div>
    </Card.Body>
</Card>
</Col>
    </div>



    <div className="card">
    <Col>

<Card
    style={{
        width: "100%",
        height: "300px",
        borderRadius: "10px",
        border: "none",
        backgroundColor: "var(--card_background)",
        boxShadow: "0 2px 2px 0 rgba(151,151,151,0.5)",
        padding:"20px"
    }}>
     
     <Row>
        <div className='col-1'> <Card.Img style={{ height: "80px", width: "80px" }} src={job} /></div>
        <div className='col-9' style={{margin:"0px 0px 0px 34px"}}> <span className='title'> Cashier</span><br/> <div  style={{display:"flex"}}> <span className='JobLocation'>Lamera</span> <span className='catagoo'>Restaurant&Café</span> </div> </div>
        <div className='col-1'> <Card.Img style={{ height: "44px", width: "44px" }} src={share} /></div>
     </Row>

    <Card.Body>
        <Card.Text>
        <p className="job-text"style={{margin:"20px 0px 0px 0px"}} > A Fast Food Cashier works in a fast food restaurant, where they assist customers by taking payment for orders. Fast Food Cashier responsibilities include taking customer orders, serving food, and balancing the cash drawer. </p>
        </Card.Text>
        <div>
        <Row style={{padding:"5px 0px 0px 0px"}}>
          <div className='col-3'> <img className='job-img' src={part}/> <span className='job-footer' style={{fontSize:"16px"}}>Part time</span> </div>
          <div className='col-3'> <img  className='job-img' src={timer}/> <span  className='job-footer'style={{fontSize:"16px"}}> 8 hr work</span></div>
          <div className='col-3'> <img  className='job-img' src={EgP}/> <span  className='job-footer'style={{fontSize:"16px"}}>EGP 4,500 </span> </div>
          <div className='col-3'> <img  className='job-img'src={uil}/> <span  className='job-footer'style={{fontSize:"16px"}}>2 days ago</span></div>
        </Row>
        <Link to="/user/MyPost/updateJobPost:id" className='btn btn-primary' style={{margin:"25px 0px 0px 0px" , float:"left"}}>Update</Link>
        <div className='btn btn-danger' style={{margin:"25px 0px 0px 0px" , float:"right"}}>Delete</div>
        </div>
    </Card.Body>
</Card>
</Col>
    </div>
 
    </div>
    
</div>






<div className='post-real'>
<span style={{fontSize:"24px" , fontWeight:"700" , color:"var(--link2_color)"}}>Real estate</span>
         
<div className="cards ">
    <div className="card">
    <Col>
    <Card
    style={{
      width: "100%",
      height: "520px",
      borderRadius: "10px",
      border: "none",
      backgroundColor: "var(--card_background)",
      boxShadow: "0 2px 2px 0 rgba(151,151,151,0.5)",
      padding:"20px"
  }}>
        <Card.Img className='realcard-img'  src={real} />
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
             
        <Link className='btn btn-primary' to="/user/MyPost/updateRealPost:id" style={{margin:"-30px 0px 0px 0px" , float:"left"}}>Update</Link>
        <div className='btn btn-danger' style={{margin:"-30px 0px 0px 0px" , float:"right"}}>Delete</div>
    </Card.Body>

</Card>
</Col>
    </div>


    <div className="card">
    <Col>
    <Card

    style={{
      width: "100%",
      height: "520px",
      borderRadius: "10px",
      border: "none",
      backgroundColor: "var(--card_background)",
      boxShadow: "0 2px 2px 0 rgba(151,151,151,0.5)",
      padding:"20px"
  }}>
        <Card.Img className='realcard-img'  src={real} />
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

          
        <Link className='btn btn-primary' to="/user/MyPost/updateRealPost:id" style={{margin:"-30px 0px 0px 0px" , float:"left"}}>Update</Link>
        <div className='btn btn-danger' style={{margin:"-30px 0px 0px 0px" , float:"right"}}>Delete</div>
    </Card.Body>
</Card>
</Col>
    </div>


    <div className="card">
    <Col>
    <Card
    style={{
      width: "100%",
      height: "520px",
      borderRadius: "10px",
      border: "none",
      backgroundColor: "var(--card_background)",
      boxShadow: "0 2px 2px 0 rgba(151,151,151,0.5)",
      padding:"20px"
  }}>
        <Card.Img className='realcard-img'  src={real} />
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

    
        <Link className='btn btn-primary'  to="/user/MyPost/updateRealPost:id" style={{margin:"-30px 0px 0px 0px" , float:"left"}} >Update</Link>
        <div className='btn btn-danger' style={{margin:"-30px 0px 0px 0px" , float:"right"}}>Delete</div>
    </Card.Body>
</Card>
</Col>
    </div>

    
    







  
    </div>
      



    
      

</div>
           
        
        </div>
    )
}

export default MyPost
