import React from 'react'
import Crafts from './Crafts';
import Silder from './../../Components/Home/Silder';
import Electronic from '../Crafts/Electronic';
const HomeCrafts = () => {
    return (
        <div className='font' style={{ minHeight: '670px' }}>
            
             <Crafts />
            <Silder />
            <Electronic/>

        </div>
    )
}

export default HomeCrafts
