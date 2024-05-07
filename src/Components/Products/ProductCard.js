import React from 'react'
import { Card, Col } from 'react-bootstrap'
import prod1 from "../../images/prod1.png";
import favoff from "../../images/fav-off.png";
import rate from "../../images/rate.png";
import { Link } from 'react-router-dom';
import {Rating} from '@mui/material'
const ProductCard = () => {
    return (
        <Col sm="6" md="6" lg="4" className="d-flex ">

            <Card
                className="my-2 product-card"
                style={{
                    width: "100%",
                    height: "370px",
                    borderRadius: "8px",
                    border: "none",
                    backgroundColor: "var(--card_background)",
                    boxShadow: "0 2px 2px 0 rgba(151,151,151,0.5)",
                }}>
                <Link to="/products/:id" style={{ textDecoration: 'none' }}>
                    <Card.Img style={{ height: "228px", width: "100%" }} src={prod1} />
                </Link>
             
                <Card.Body>
                    <Card.Title>

                        <h5 className="card-title" style={{color:"var(--card-h_color)"}}>
                        PUBG Cafe and Restaurant
                        </h5>
                    </Card.Title>
                    <Card.Text>
                    <p className="card-text" style={{color:"var( --card-p_color)" , fontSize:"15px " , fontWeight:"400"}} > Price and other details may vary based on product size and color. </p>
                        <div className="d-flex justify-content-between ">
                            <div className="d-flex">
                            <Rating className='rat' precision={0.1} name="read-only" value={4.5} readOnly /> 
                                <span className=" mx-1" style={{color:"#234487" , fontSize:"14px", fontWeight:"400" , margin:"2px 0px 0px 0px"}} >(200) reviewer</span>
                            </div>
                            <div className="d-flex">
                            <img
                        src={favoff}
                        alt=""
                        className="text-center"
                        style={{
                            height: "24px",
                            width: "26px",
                        }}
                    />
                            </div>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default ProductCard
