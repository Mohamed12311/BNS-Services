import React from 'react'
import CategoryHeader from '../../Components/Category/CategoryHeader'
import ProductDetalis from '../../Components/Products/ProductDetalis'
import RateContainer from '../../Components/Rate/RateContainer'
import ProductAbout from '../../Components/Products/ProductAbout'
import back from '../../image/back25.png'
import './ProductDetalispage.css'

const ProductDetalisPage = () => {
    return (

        <div class="AllProduct">
        <div class="product product1"><CategoryHeader /></div>
        <div class=" product2"><img alt='' src={back}/></div>
    
        <div class="product product3"><ProductDetalis /></div>
        <div class="product product4"><ProductAbout/></div>
        <div class="product product5"><RateContainer /></div>

        
   
   
        
    </div>
            
            
                
              
                
         
       
    )
}

export default ProductDetalisPage
