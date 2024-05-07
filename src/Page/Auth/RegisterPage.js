import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./Signup.css"

const RegisterPage = () => {
    return (
      <div>
          
  
  
      <section id="page1">
            <div className="Coll">
    
            
                <div className="co co1"></div>
                <div className="co co2"></div>
    
                <div className="co co3"><p className="int">Create Your Account,</p></div>
                
                <div className="co co4">
  
                        <div className="form">
                        <form >
                        < label htmlFor="name">Name:</label>
                        <input 
                          required
                          className='form-control mb-3' 
                          placeholder="Enter your Name"
                          type="text" id="name" 
                          // value={firstname}
                          // onChange={onChangefirname}
                          />
              
  
    
    
                        <label htmlFor="email">Email:</label>
                        <input 
                          required
                          className='form-control mb-3' 
                          placeholder="Enter your Email"
                          type="email" 
                          id="email"  
                          // value={email}
                          // onChange={onChangeEmail}
                          />
        
                        <label htmlFor="password">Password:</label>
                        <input  
                          required
                          className='form-control mb-3 '
                          placeholder=" Password" 
                          type="password"
                          id="password"  
                          // value={password}
                          // onChange={onChangePassword}
                          />
                        <label htmlFor="Confirm Password">Confirm Password:</label>
                        <input  
                          required
                          className='form-control mb-3 '
                          placeholder=" Confirm Password" 
                          type="password"
                          id="Confirm Password"  
                          // value={password}
                          // onChange={onChangePassword}
                          />
                            
                            <center>
                <div className="register-control">
                    <label className="register-radio">
                    <input className='redo' type="radio" name="foobar" checked/>
                    User 
                    </label>
                    <label className="register-radio">
                        <input className='redo'  type="radio" name="foobar" />
                        Business owner
                     </label>
                     <label className="register-radio">
                        <input className='redo'  type="radio" name="foobar"  />
                        Service provider
                     </label>
                     </div>

                </center>
  
                                        
                                        
    
                            <button className='btn  btn-lg   my-5 ' type='submit'> Sign Up</button>
        
                        </form>
                    </div>
    
  
                    <center>
  
                    <span>Already have account?</span> <Link className="nav-link " to="/login" >Log in </Link>
  
                    </center>
                
            </div>
      
            </div>
        </section>
          
    
     
        </div>
   
    )
}

export default RegisterPage
