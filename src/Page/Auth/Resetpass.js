import React from 'react';

import './Forget_pass.css'
const Resetpass = () => {





  return (
    <div>
      
      <section id="page1">
        <div className="All">

        
        <div className="e e1"></div>
            <div className="e e2"></div>

            <div className="e e3"><p className="into"> Reset password</p> <span>Please type something you’ll remember
</span></div>
            
            <div className="e e4">

                

                
                   
                    <div className="form">
                        {/* {error.length >0 ? <div className="alert alert-danger">{error}</div>:''}            */}
                                   
                    <form >
                        
                        <label htmlFor="pass1"> New password:</label>
                        <input  className='form-control mb-4' type="number" id="pass1"   name="pass1"  placeholder=""/>
     
                        <label htmlFor="pass2">  Confirm new password:</label>
                        <input  className='form-control mb-4' type="number" id="pass2"   name="pass2"  placeholder=""/>
     
                       <button  className='btn  btn-lg   my-5 ' type='submit'>
{/*     
                        {islooding ===true ? <i className='fas fa-spinner fa-spin' ></i> : 'Reset password' } */}
                        Reset password
                  
                       </button>
    
                     
                    </form>
                </div>
            

             
          
        </div>
       </div>
    </section>



    </div>
  )
}

export default Resetpass