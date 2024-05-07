import React from 'react'
import { Container,Row ,Col} from 'react-bootstrap'
import pro from  '../.././images/pro.png'
import tele from '../.././image/tele.png'
import cloc from '../.././image/cloc.png'
import loc from '../.././image/loc.png'
const CraftsHeader = () => {
    return (
       
     
          <div className='craftsheader' >
            <center>
          <div className='pro-craft'>
            <img src={pro} />
          </div>
           <h5 className='p1'>Easy Home</h5>
          <span className='p2'>General Maintenance</span>
           </center>
           <Container>
           <div className='row'>
           <div className='col-3'> <img  className='r'src={loc}/> <span className='location '>Beni suef</span></div>
    
            <div className='col-4'><img  className='r'src={cloc}/>  <span className='Available '>Available for work</span> <span  className='clock'>

<span>10AM </span>
<span> -</span>
<span>3AM</span>
                   
                     </span></div>

                     <div className='col-3'><img className='r' src={tele }/> <span className='televios '>01004100826</span> </div>

           </div>
           </Container>

          </div>
   
    )
}

export default CraftsHeader
