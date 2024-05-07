import React from 'react'
import HomeCategory from '../../Components/Home/HomeCategory';
import Silder from './../../Components/Home/Silder';
import RestaurantCafe from '../../Components/Category/RestaurantCafe';
const HomePage = () => {
    return (
        <div className='font' style={{ minHeight: '670px' }}>
             <HomeCategory />
            <Silder />
            <RestaurantCafe/>
            {/* <div>
                <Outlet>
                    
                </Outlet>
            </div> */}
            {/* <CardProductsContainer title=" Highest rating :" btntitle="More" pathText="/products" /> */}
            {/* <BrandFeatured title="اشهر الماركات" btntitle="المزيد"  /> */}

        </div>
    )
}

export default HomePage
