import React, { useState } from 'react';
import { Row,Col } from 'react-bootstrap'
import MultiImageInput from 'react-multiple-image-input';
const BusinessAddBusiness = () => {
  
  const [imag, setImag] = useState([]);
  const [ima, setIma] = useState([]);
  console.log(imag)
  console.log(ima)
    return (
        <div style={{backgroundColor:"var( --card_background)" , borderRadius:"10px"}}>
          <div  style={{margin:"0px 100px 0px 160px", padding:"20px"}}>

      
         
          <div style={{margin:"0px 160px 20px 160px",Color:"#222043",fontSize:"24px" , fontWeight:"600" }} className='addbusinessHeader'>Add Business </div>
     
           

            <label htmlFor="Business name" className='label'>Business name:</label>
                <input
                  style={{width:"466px" , height:"50px" , border:"1px solid #222043" , borderRadius:"8px"}}
                  className="form-control  mb-3 "
                  type="text"
                  id="Business name"
                  placeholder="Enter Title"
                />
                 
               <select class="form-select mb-3 mt-4 "  style={{width:"466px" , height:"50px" , border:"1px solid #222043" , borderRadius:"8px"}}aria-label="Default select example">
                 <option selected>Select the types of business</option>
                 <option value="1">restaurant & café</option>
                 <option value="2">Hospitals</option>
                 <option value="3">Clinics</option>
                 <option value="4">Banks</option>
                 <option value="5">Hotels</option>
                 <option value="6">Universities</option>
                 <option value="7">Libraries</option>
                 <option value="8">Entertainment</option>
                 <option value="9">Pharmacies</option>
                </select>



                 <label htmlFor="Business description" className='label'>Business description:</label>
                <input
                style={{width:"466px" , height:"50px" , border:"1px solid #222043" , borderRadius:"8px"}}
                  className="form-control  mb-3 "
                  type="text"
                  id="Business description"
                  placeholder="Enter Title"
                />

                 <label htmlFor="Business address" className='label'>Business address:</label>
                <input
                style={{width:"466px" , height:"50px" , border:"1px solid #222043" , borderRadius:"8px"}}
                  className="form-control  mb-3 "
                  type="text"
                  id="Business address"
                  placeholder="Enter Title"
                />

                <label htmlFor="Phone number" className='label'>Phone number:</label>
                <input
                style={{width:"466px" , height:"50px" , border:"1px solid #222043" , borderRadius:"8px"}}
                  className="form-control  mb-3 "
                  type="number"
                  id="Phone number "
                  placeholder="+20"
                />

               
                <label htmlFor="Times of work" className='label' style={{marginTop:"10px"}}>Times of work:</label>
                <Row style={{margin:"-20px 0px 20px 20px"}} >
                <div className='col-6' style={{display:"flex"}}> <span className='x' htmlFor="Job-type">From:</span>  
                 <input
                  className="ff "
                  type="number"
                  id="Times of work"
                  placeholder="09:00 AM"
                />  </div>
                    <div className='col-6' style={{display:"flex"}}> <span className='x' htmlFor="To" >To:</span>  
                 <input
                  className="ff "
                  type="number"
                  id="To"
                  placeholder="10:00 PM"
                />  </div>
            
              </Row>
             

              

              
              <label htmlFor="Upload-property " className='label'>Upload property images:</label>
               <div className='uplood-im'  style={{width:"466px"}}>
               <MultiImageInput
                images={imag}
                setImages={setImag}
                theme="light"
                 max={1}
                />
               </div>
              

                <br/>
                
               <label htmlFor="Upload-property " className='label'>Upload background images:</label>
               <div className='uplood-im'  style={{width:"466px"}}>

               <MultiImageInput
                images={ima}
                setImages={setIma}
                theme="light"
                 max={1}
                />
               </div>
               
               <br/>
          
               <div className='btn  ' style={{margin:"30px 140px 20px 140px" , color:"#FFFFFF" , backgroundColor:"#222043" , width:"205px" , height:"48px" , borderRadius:"8px" , fontSize:"20px" , fontWeight:"600"}}  > Add business</div>
            
            
               
               </div>
        
        </div>
    )
}

export default BusinessAddBusiness
