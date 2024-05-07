import HomePage from "./Page/Home/HomePage";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBarLogin from "./Components/Uitily/NavBarLogin";
import Footer from "./Components/Uitily/Footer";
import LoginPage from './Page/Auth/LoginPage';
import RegisterPage from "./Page/Auth/RegisterPage";
import ProductDetalisPage from "./Page/Products/ProductDetalisPage";
import CraftsDetalisPage from "./Page/Products/CraftsDetalisPage";
import UserFavoriteProductsPage from "./Page/User/UserFavoriteProductsPage";
import BusinessAddBusinessPage from "./Page/User/BusinessAddBusinessPage";
import SeviceAddBusinessPage from "./Page/User/SeviceAddBusinessPage";
import MyPostPage from "./Page/User/MyPostPage";
import UserProfilePage from "./Page/User/UserProfilePage";
import RestaurantCafe from "./Components/Category/RestaurantCafe";
import HomeCrafts from "./Components/Home/HomeCrafts";
import UserChangePassword from "./Page/User/UserChangePssword";
import Electronic from "./Components/Crafts/Electronic";
import HomeJobs from "./Components/Home/HomeJobs";
import JobDetailsPage from "./Page/Products/JobDetailsPage";
import AddJob from "./Components/User/AddJob";
import RealestateDetailspage from "./Page/Products/RealestateDetailspage";
import HomeRealestate from "./Components/Home/HomeRealestate";
import AddReal from "./Components/User/AddReal";
import Forgetpass from "./Page/Auth/Forgetpass";
import Resetpass from "./Page/Auth/Resetpass";
import HalloPage from "./Page/Auth/HalloPage";
import Checkemail from "./Page/Auth/Checkemail";
import Confirmchange from "./Page/Auth/Confirmchange";
import UpdateJobPost from "./Page/User/UpdateJobPost";
import UpdateRealPost from "./Page/User/UpdateRealPost";
import SavedPage from "./Page/User/SavedPage";
function App() {
  return (
    <div className="font" >
      <NavBarLogin />
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<HalloPage/>} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forget-password" element={<Forgetpass />} />
          <Route path="/Checkemail" element={<Checkemail/>} />
          <Route path="/Reset-password" element={<Resetpass/>} />
          <Route path="/ConfirmChange-password" element={<Confirmchange/>} />
          <Route path="/HomePage/restaurantCafe" element={<RestaurantCafe />} />
          <Route path="/products/:id" element={<ProductDetalisPage />} />
          <Route path="/homeJobs/AddJob" element={<AddJob/>} />
          <Route path="/homeReal/AddReal" element={<AddReal/>} />
          <Route path="/Jobs/:id" element={<JobDetailsPage/>} />
          <Route path="/Realestate/:id" element={<RealestateDetailspage/>} />
          <Route path="/HomeRealestate" element={<HomeRealestate/>} />
          <Route path="/homeJobs" element={<HomeJobs />} />
          <Route path="/Business/AddBusiness" element={<BusinessAddBusinessPage />} />
          <Route path="/Sevice/AddSevice" element={<SeviceAddBusinessPage />} />
          <Route path="/user/favoriteproducts" element={<UserFavoriteProductsPage />} />
          <Route path="/user/MyPost" element={<MyPostPage />} />
          <Route path="/user/MySave" element={<SavedPage />} />
          <Route path="/user/profile" element={<UserProfilePage />} />  
          <Route path="/user/changepassword" element={<UserChangePassword />} /> 
          <Route path="/homeCrafts" element={<HomeCrafts />} /> 
          <Route path="/Crafts/:id" element={<CraftsDetalisPage />} />
          <Route path="/homeCrafts/Electronic" element={<Electronic/>} />
          <Route path="/user/MyPost/updateJobPost:id" element={<UpdateJobPost/>} />
          <Route path="/user/MyPost/updateRealPost:id" element={<UpdateRealPost/>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
