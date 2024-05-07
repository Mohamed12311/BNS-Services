import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import crimg1 from '../.././image/crimg1.png'
import   crimg2 from '../.././image/crimg2.png'
import  crimg3 from '../.././image/crimg3.png'
import  crimg4 from '../.././image/crimg4.png'
const  Craftsabout= () => {
    return (
      <Container>
      <div className='work-image'>
         <div className='work-img'>Work images:</div>
           
      <div className='row'>
      <div className='col-2'><img className='crf-img' src={crimg1} /></div>
      <div className='col-2'><img  className='crf-img' src={crimg2} /></div>
      <div className='col-2'><img   className='crf-img'src={crimg3} /></div>
      <div className='col-2'><img   className='crf-img'src={crimg4} /></div>
      </div>
      
      </div>
      </Container>
    )
}

export default Craftsabout