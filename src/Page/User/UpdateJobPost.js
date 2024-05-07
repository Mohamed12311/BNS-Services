import React from 'react'
import { Row, Col } from 'react-bootstrap'
import back from '../.././image/back.png'
import { Link } from 'react-router-dom';
import "../../Components/User/AddJob.css"
const UpdateJobPost = () => {
    return (
        <div className='Add-job'>
               <div className="po" >
                
               <div className="p p3">
                <h3 style={{color:"#222043" , fontSize:"24px",fontWeight:"700", marginBottom:"25px"}}>Edit post</h3>
               </div>

               <div className="p p1">
               <label htmlFor="Job-title" className='label'>Job title:</label>
                <input
                  className="form-control q mb-4"
                  type="text"
                  id="Job-title"
                  placeholder="Enter Title"
                />

                 <label htmlFor="Requirement" className='label'>Requirement:</label>
                    <textarea
                        className="input-form-area p-2 mt-3"
                        rows="5"
                        cols="50"
                        placeholder="enter the requirements..."

                    />

                 <label htmlFor="Phone" className='label'>Phone number:</label>
                <input
                  className="form-control q mb-4"
                  type="number"
                  id="Phone "
                  placeholder="+20"
                />

               </div>
               <div className="p p2">

               <label htmlFor="Job-description " className='label'>Job description:</label>
                <input
                  className="form-control q mb-4"
                  type="text"
                  id="Job-description"
                  placeholder="Enter job description"
                />

              <label htmlFor="job-type" className='label'>Job type:</label>
              <center>
              <div className="job-control ">
                    <label htmlFor="job-radio1" className="job-radio">
                    <input id="job-radio1" className='red' type="radio" name="foobar" />
                    Full-time
                    </label>
                    <label htmlFor="job-radio2" className="job-radio">
                        <input  id="job-radio2"className='red'  type="radio" name="foobar" checked />
                        Part-time
                     </label>
                     </div>

                </center>

                    
              <Row >
                <div className='col-6' style={{display:"flex"}}> <span className='x' htmlFor="Job-type">WorkHours:</span>  
                 <input
                  className="ff "
                  type="number"
                  id="Job-description"
                  placeholder="00"
                />  </div>
                    <div className='col-6' style={{display:"flex"}}> <span className='x' htmlFor="Job-type" >Salary:</span>  
                 <input
                  className="ff "
                  type="number"
                  id="Job-description"
                  placeholder="EGP 00,00"
                />  </div>
            
              </Row>
              
              <label htmlFor="Phone" className='label' style={{marginTop:"26px"}}>WhatsApp:</label>
                <input
                  className="form-control q mb-4"
                  type="number"
                  id="WhatsApp "
                  placeholder="+20"
                />

               </div>

               <div className="p p4">
               <div className='btn job-btn ' > Update </div>
               </div>

               <div className="p p5"> 
               <Link to="/user/MyPost" style={{ textDecoration: 'none' }}>
               <img src={back}/>
               </Link>
               </div>
        </div>
        </div>
    )
}

export default UpdateJobPost