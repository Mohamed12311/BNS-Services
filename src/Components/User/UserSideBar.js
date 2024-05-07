import React from 'react'
import { Link } from 'react-router-dom'

const UserSideBar = () => {
    return (
        <div className="sidebar">
            <div className="d-flex flex-column">
                {/* <Link to="/user/allorders" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text mt-3 border-bottom p-2 mx-auto text-center">
                        اداره الطلبات
                    </div>
                </Link> */}
                
                <Link to="/user/profile" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                        Your ProfiLe 
                    </div>
                </Link>

                <Link to="/user/changepassword" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                    Change passwod
                    </div>
                </Link>

                <Link to="/Business/AddBusiness" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                    My business
                    </div>
                </Link>

                <Link to="/Sevice/AddSevice" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                    My Service 
                    </div>
                </Link>
                <Link to="/user/MyPost" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                    My Post
                    </div>
                </Link>

                <Link to="/user/MySave" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                    Saved
                    </div>
                </Link>

                {/* /user/addresses */}
                <Link to="" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                    Log out
                    </div>
                </Link>


            </div>
        </div>
    )
}
export default UserSideBar
