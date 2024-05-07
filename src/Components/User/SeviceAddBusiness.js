import React, { useState } from 'react';
import MultiImageInput from 'react-multiple-image-input';
import { Row} from 'react-bootstrap'


const SeviceAddBusiness = () => {

  const [images, setImages] = useState([]);
  const [image, setImage] = useState([]);
  console.log(images)
  console.log(image)


    return (
        <div style={{backgroundColor:"var(--card_background)" , borderRadius:"10px"}}>
        <div  style={{margin:"0px 100px 0px 160px", padding:"20px"}}>

    
       
        <div style={{margin:"0px 160px 20px 160px",Color:"#222043",fontSize:"24px" , fontWeight:"600" }} className='addbusinessHeader'>Add Service  </div>
   
         

          <label htmlFor="Service name" className='label'>Service name:</label>
              <input
                style={{width:"466px" , height:"50px" , border:"1px solid #222043" , borderRadius:"8px"}}
                className="form-control  mb-3 "
                type="text"
                id="Service name"
                placeholder="Enter Title"
              />
               
             <select class="form-select mb-3 mt-4 "  style={{width:"466px" , height:"50px" , border:"1px solid #222043" , borderRadius:"8px"}}aria-label="Default select example">
               <option selected>Select the types of Service</option>
               <option value="1">Electrician</option>
               <option value="2">Plumber</option>
               <option value="3">Carpenter</option>
               <option value="4">Cleaning</option>
               <option value="5">Air conditioning</option>
            
              </select>



               <label htmlFor="Service description" className='label'>Service description:</label>
              <input
              style={{width:"466px" , height:"50px" , border:"1px solid #222043" , borderRadius:"8px"}}
                className="form-control  mb-3 "
                type="text"
                id="Service description"
                placeholder="Enter Title"
              />

               <label htmlFor="Service address" className='label'>Service address:</label>
              <input
              style={{width:"466px" , height:"50px" , border:"1px solid #222043" , borderRadius:"8px"}}
                className="form-control  mb-3 "
                type="text"
                id="Service address"
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

             
              <label htmlFor="Phone" className='label' style={{marginTop:"10px"}}>Times of work:</label>
              <Row style={{margin:"-20px 0px 20px 20px"}} >
              <div className='col-6' style={{display:"flex"}}> <span className='x' htmlFor="From">From:</span>  
               <input
                className="ff "
                type="number"
                id="From"
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
                images={image}
                setImages={setImage}
                theme="light"
                 max={1}
                />
          
             </div>
            

              <br/>
              
             <label htmlFor="Upload-property " className='label'>Upload background images:</label>
             <div className='uplood-im'  style={{width:"466px"}}>
          
             
              <MultiImageInput
                images={images}
                setImages={setImages}
                theme="light"
                 max={4}
                />

        
            
             </div>
             <span style={{marginTop:"5px"}}>Maximum upload of 4 images</span>
             
             <br/>
        
             <div className='btn  ' style={{margin:"30px 140px 20px 140px" , color:"#FFFFFF" , backgroundColor:"#222043" , width:"205px" , height:"48px" , borderRadius:"8px" , fontSize:"20px" , fontWeight:"600"}}  > Add business</div>
          
          
             
             </div>
      
      </div>
    )
}

export default SeviceAddBusiness
