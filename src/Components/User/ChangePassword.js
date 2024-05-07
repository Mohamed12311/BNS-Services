import React from 'react'
import { Row, Col } from 'react-bootstrap'

const changePassword = () => {
    return (
        <div>
            <div className="user-Change-card my-3 px-2"  style={{backgroundColor:"var(--card_background)"}}>
         

                
           
                <Row className="mt-4">
                <center>
                    <Col xs="10" sm="7" md="6" className="my-5">
                        
                        <div className="admin-content-text">Change Password:</div>
                        <label className='label' htmlFor="Current password" style={{float:"left" , marginTop:"20px"}}>Current password:</label>
                        <input
                            type="password"
                            className="input-form d-block my-1 px-3"
                            placeholder="Current password "
                        />
                        <label className='label' htmlFor="New password"style={{float:"left" , marginTop:"8px"}}>New password:</label>
                        <input
                            type="password"
                            className="input-form d-block my-1 px-3"
                            placeholder=" Enter old  password"
                        />
                        <label className='label' htmlFor="Confirm new password" style={{float:"left" , marginTop:"8px"}}>Confirm new password:</label>
                        <input
                            type="password"
                            className="input-form d-block my-1 px-3"
                            placeholder="  Enter new password "
                        />
                          <button className="btn-save d-inline mt-2 ">  Save password   </button>
                    </Col>
                    </center>
                </Row>
               
            </div>
        </div>
    )
}

export default changePassword





