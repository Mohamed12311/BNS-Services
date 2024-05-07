import React from 'react'
import { Row, Col } from 'react-bootstrap'
import back from '../.././image/back.png'
import { Link } from 'react-router-dom';
import uplood from "../../image/upload img.png"
import "./AddReal.css"
const AddReal = () => {
    return (
        <div className='Add-job'>
               <div className="po" >

               <div className="p p3">
                <h3 style={{color:"#222043" , fontSize:"24px",fontWeight:"700", marginBottom:"25px"}}>Add Property</h3>
               </div>
               
               <div className="p p1">
                 <label htmlFor="Description" className='label'>Description:</label>
                    <textarea
                        className="input-form-area p-2 mt-3 "
                        rows="5"
                        cols="50"
                        id="Description"
                        placeholder="enter the requirements..."

                    />
                 <label htmlFor="Property address" className='label'>Property address:</label>
                <input
                  className="form-control q mb-4"
                  type="text"
                  id="Property address"
                  placeholder="Enter Title"
                />

                 <label htmlFor="Phone number" className='label'>Phone number:</label>
                <input
                  className="form-control q mb-4"
                  type="number"
                  id="Phone number "
                  placeholder="+20"
                />

               </div>
               <div className="p p2">

               <label htmlFor="Upload-property " className='label'>Upload property images:</label>
               <div className='uplood-img'>
                <center>
               <input className='up-lood' type="image" src={uplood} alt="Submit" width="48" height="48"/>
               <br/>
               <span>Drop your imaged</span>
               </center>
               </div>
               <span>Maximum upload of 4 images</span>
           

            

                    
              <Row >
                <div className='col-6' style={{display:"flex"}}> <span className='x' htmlFor="Area">Area:</span>  
                 <input
                  className="ff "
                  type="number"
                  id="Area"
                  placeholder="00"
                />  </div>
                    <div className='col-6' style={{display:"flex"}}> <span className='x' htmlFor="Price" >Price:</span>  
                 <input
                  className="ff "
                  type="number"
                  id="Price"
                  placeholder="EGP 00,00"
                />  </div>
            
              </Row>
              
              <label htmlFor="WhatsApp" className='label' style={{marginTop:"17px"}}>WhatsApp:</label>
                <input
                  className="form-control q mb-4"
                  type="number"
                  id="WhatsApp"
                  placeholder="+20"
                />
            
                <center>
                <div className="control">
                    <label  htmlFor="radio1" className="radio">
                    <input  id="radio1" className='redo' type="radio" name="foobar" />
                    Sale 
                    </label>
                    <label  htmlFor="radio2" className="radio">
                        <input id="radio2" className='redo'  type="radio" name="foobar" checked />
                        Rent
                     </label>
                     </div>

                </center>
               
          </div>


               <div className="p p4">
               <div className='btn btn-real' > Post now</div>
               </div>

               <div className="p p5"> 
               <Link to="/HomeRealestate" style={{ textDecoration: 'none' }}>
               <img src={back}/>
               </Link>
               </div>
        </div>
        </div>
    )
}

export default AddReal