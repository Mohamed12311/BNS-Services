
import clock from '../.././image/mdi-light_clock.png'
import location from '../.././image/fluent_location-20-regular.png'
import televios from '../.././image/ph_phone-thin.png'
import {  Container } from 'react-bootstrap'
const ProductAbout = () => {
    return (
        <Container> 
        <div className='productabout'>
            <div className='About '>
            About:
            </div>
            <div className='About-body '>
             
                    {/* <li> <img alt='' src={location} style={{width:"25px",height:"25px"}}/> <span>Elkornish,Beni suef</span> <button className='btn btn-outline-primary' style={{borderRadius:"16px"}}>Map</button></li> */}
                    <div className='row row-About'>
                    <div className='col-3 about1'><img  src={clock}/> <span className='product-Available'>Open now</span> <span  className='product-clock'> 10 AM - 3 AM</span> </div>
          <div className='col-4 about1' > <img src={location}/> <span className='product-location'>Elkornish,Beni suef</span>  <button className='btn  map' >Map</button> </div>
          <div className='col-3 about1'><img  src={televios }/> <span className='proudct-telephone'>01004100826</span> </div>
         
         </div>

       
                         
                  
        
        
                
               
            </div>
        </div>
        </Container> 
    )
}

export default ProductAbout
