import React, { useState } from 'react';
import MultiImageInput from 'react-multiple-image-input';
import { Row} from 'react-bootstrap'
import "./Add-business.css"

const SeviceAddBusiness = () => {

  const [images, setImages] = useState([]);
  const [image, setImage] = useState([]);
  console.log(images)
  console.log(image)


    return (
        <div style={{backgroundColor:"var(--card_background)" , borderRadius:"10px"}}>
        <div className='addB' >

    
       
        <div className='addbusinessHeader'>Add Service  </div>
   
         

          <label htmlFor="Service name" className='label'>Service name:</label>
              <input
               
                className="form-control  mb-3 "
                type="text"
                id="Service name"
                placeholder="Enter Title"
              />
               
             <select class="form-select mb-3 mt-4 " aria-label="Default select example">
               <option selected>Select the types of Service</option>
               <option value="1">Electrician</option>
               <option value="2">Plumber</option>
               <option value="3">Carpenter</option>
               <option value="4">Cleaning</option>
               <option value="5">Air conditioning</option>
            
              </select>



               <label htmlFor="Service description" className='label'>Service description:</label>
              <input
            
                className="form-control  mb-3 "
                type="text"
                id="Service description"
                placeholder="Enter Title"
              />

               <label htmlFor="Service address" className='label'>Service address:</label>
              <input
             
                className="form-control  mb-3 "
                type="text"
                id="Service address"
                placeholder="Enter Title"
              />

              <label htmlFor="Phone number" className='label'>Phone number:</label>
              <input
            
                className="form-control  mb-3 "
                type="number"
                id="Phone number "
                placeholder="+20"
              />

             
              <label htmlFor="Phone" className='label' style={{marginTop:"10px"}}>Times of work:</label>
              <Row style={{margin:"-20px 0px 20px 20px"}} >
              <div className='col-sm-6' style={{display:"flex"}}> <span className='x' htmlFor="From">From:</span>  
               <input
                className="ff "
                type="number"
                id="From"
                placeholder="09:00 AM"
              />  </div>
                  <div className='col-sm-6' style={{display:"flex"}}> <span className='x' htmlFor="To" >To:</span>  
               <input
                className="ff "
                type="number"
                id="To"
                placeholder="10:00 PM"
              />  </div>
          
            </Row>
           

            

            
            <label htmlFor="Upload-property " className='label'>Upload property images:</label>
             <div className='uplood-im'  >
           
              <MultiImageInput
                images={image}
                setImages={setImage}
                theme="light"
                 max={1}
                />
          
             </div>
            

              <br/>
              
             <label htmlFor="Upload-property " className='label'>Upload background images:</label>
             <div className='uplood-im' >
          
             
              <MultiImageInput
                images={images}
                setImages={setImages}
                theme="light"
                 max={4}
                />

        
            
             </div>
             <span style={{marginTop:"4px"}}>Maximum upload of 4 images</span>
             
             <br/>
        
             <div className='btn add-bus'   > Add business</div>
          
          
             
             </div>
      
      </div>
    )
}

export default SeviceAddBusiness
