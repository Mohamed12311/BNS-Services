import React from 'react';

import './Forget_pass.css'
const Checkemail = () => {

  return (
    <div>
      
      <section id="page1">
        <div className="All">

        
        <div className="e e1"></div>
            <div className="e e2"></div>

            <div className="e e3"><p className="into"> please check your email</p> <span>We’ve sent a code to ****@gmail.com
</span></div>
            
            <div className="e e4">

                

                
                   
                    <div className="form">
                        {/* {error.length >0 ? <div className="alert alert-danger">{error}</div>:''}            */}
                                   
                    <form >
                        
                        <label htmlFor="code">Enter code:</label>
                        <input  className='form-control mb-4' type="number" id="code"   name="code"  placeholder=""/>
     
    
                       <button  className='btn  btn-lg   my-5 ' type='submit'>
{/*     
                        {islooding ===true ? <i className='fas fa-spinner fa-spin' ></i> : 'Verify' } */}
                       </button>
    
                     
                    </form>
                </div>
            

             
          
        </div>
       </div>
    </section>



    </div>
  )
}

export default Checkemail