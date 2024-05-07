import React ,{ useState } from 'react';
import './Forget_pass.css'
export default function Forgetpass() {


  return (
    <div>
      
      <section id="page1">
        <div className="All">

        
        <div className="e e1"></div>
            <div className="e e2"></div>

            <div className="e e3"><p className="into">  Forget Password,</p> <span>Don’t worry! It happens. Please enter the email associated with your account.</span></div>
            
            <div className="e e4">

                

                
                   
                    <div className="form">
                        {/* {error.length >0 ? <div className="alert alert-danger">{error}</div>:''}            */}
                                   
                    <form >
                        
                        <label htmlFor="email">Email:</label>
                        <input className='form-control mb-4' type="email" id="email"   name="email"  placeholder="Enter  email"/>
     
    
                       <button  className='btn  btn-lg   my-5 ' type='submit'>
    
                        {/* {islooding ===true ? <i className='fas fa-spinner fa-spin' ></i> : 'Send Code' } */}
                        Send Code
                       </button>
    
                     
                    </form>
                </div>
            

             
          
        </div>
       </div>
    </section>



    </div>
  )
}