import React  from 'react';
import { Link } from 'react-router-dom'
import './Confirm_change.css'
const Confirmchange = () =>{




  return (
    <div>
      
      <section id="page5">
        <div className="Vll">

        
        <div className="i i1"></div>
            <div className="i i2"></div>

            <div className="i i3"></div>
            <div className="i i4"><center> <span>Password changed</span> <p>Your password has been <br /> changed successfully</p> 
            

    
            <Link className="btn btn-primary text-light  mx-2" to="/" >Back to log in </Link>     
                       
            
             </center></div>
       </div>
    </section>



    </div>
  )
}

export default Confirmchange