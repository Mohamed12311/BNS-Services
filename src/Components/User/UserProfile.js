import React from "react";
import { Row, Col } from "react-bootstrap";
import deleteicon from "../../images/delete.png";
import profile from "../../image/profile29.png";
import chosee_profile from "../../image/chosee40075.png";

const UserProfile = () => {
  return (
    <div>
      <div className="user-address-card my-2 px-2"  style={{backgroundColor:"var(--card_background)"}}>
        <center>
          <img
            style={{ width: "110px", height: "110px" }}
            src={profile}
            className="login-img "
            alt="sfvs"
          />
          <img
            style={{ width: "40px", height: "40px" }}
            src={chosee_profile}
            className="chosse-login-img "
            alt="sfvs"
          />
        </center>


        <div className="my-5">
          <center>
            <Col xs="12" sm="9" md="4" className="d-flex">
              <div className=" profile-name">Name:</div>
            </Col>
          </center>

          <Row className="">
            <center>
              <Col xs="12" sm="9" md="4" className="d-flex">
              <input
                style={{width:"466px" , height:"50px" , border:"1px solid #222043" , borderRadius:"8px"}}
                className="form-control  mb-3 "
                type="text"
                placeholder="Enter new name"
              />
              </Col>
            </center>
          </Row>


          <Row className="">
            <center>
              <Col xs="12" sm="9" md="4" className="d-flex">
                <div className=" profile-name">GmaiL:</div>
              </Col>
            </center> 
          </Row>

          <Row className="">
            <center>
              <Col xs="12" sm="9" md="4" className="d-flex">
              <input
                style={{width:"466px" , height:"50px" , border:"1px solid #222043" , borderRadius:"8px"}}
                className="form-control  mb-1 "
                type="email"
                placeholder="Enter new gamil"
              />
              </Col>
            </center>
          </Row>
        </div>

        <center>
          <button className="btn-save d-inline mt-2 "> Save change</button>
        </center>
      </div>
    </div>
  );
};

export default UserProfile;
