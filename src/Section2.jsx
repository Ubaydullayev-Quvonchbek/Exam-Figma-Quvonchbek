import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import img1 from "./image/kisspng-belt-buckle-leather-clothing-leather-belt-5a868a0e407ed9 1.png";
import img2 from "./image/kisspng-handbag-leather-baggage-duffel-travel-bag-5b44186ea50ae5 1.png";
import img3 from "./image/image 30.png";
import img4 from "./image/Subtract.png";
import img5 from "./image/image 41.png";
import img6 from "./image/image 43.png";
import img7 from "./image/image 42.png";
import img8 from "./image/pngwing 1.png";
import img9 from "./image/image 45.png";
import img10 from "./image/shutterstock_1867159558.png";
import img11 from "./image/Img.png";
import img12 from "./image/1111.png";

const Section2 = () => {
    return (
        <>
            <section className="sect2">
                <Container>
                    <Row className='justify-content-center'>
                        <Col lg={12}>
                            <h1 className="Каталог">Каталог</h1>
                        </Col>
                        <Col lg={3}>
                            <div className="product-card1">
                                <img src={img1} alt='sad' />
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="product-card1">
                                <img src={img2} alt='sad' />
                            </div>
                        </Col>
                        <Col lg={5}>
                            <div className='product-card2'>
                                <img src={img3} alt="" />
                            </div>
                            <div className='product-card2 mt--mb'>
                                <img src={img4} alt="" />
                            </div>
                        </Col>
                        <Col lg={4} className='mt--mb'>
                            <div className='product-card3'>
                                <img src={img5} alt="" />
                            </div>
                            <div className='product-card3 mt--mb'>
                                <img src={img6} alt="" />
                            </div>
                        </Col>
                        <Col lg={4} className='mt--mb'>
                            <div className='product-card3'>
                                <img src={img7} alt="" />
                            </div>
                            <div className='product-card3 mt--mb'>
                                <img src={img8} alt="" />
                            </div>
                        </Col>
                        <Col lg={3} className='mt--mb'>
                            <div className='product-card1'>
                                <img src={img9} alt="" />
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className='product-card3 mt--mb'>
                                <img src={img10} alt="" />
                            </div>
                        </Col>
                        <Col lg={4} className='mt--mb'>
                            <div className='product-card3'>
                                <img src={img11} alt="" />
                            </div>
                        </Col>
                        <Col lg={4} className='mt--mb'>
                            <div className='product-card3'>
                                <img src={img12} alt="" />
                            </div>
                        </Col> 
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default Section2;
