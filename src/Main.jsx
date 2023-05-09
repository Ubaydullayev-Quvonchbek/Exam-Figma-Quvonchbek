import React from 'react';
import { Col, Container, Row } from "react-bootstrap";

const Main = () => {
    return (
        <>
            <main>
                <Container>
                    <Row>
                        <Col lg={4}>
                            <div className="three-card bg1">
                                <h1 className="momo">Наш магазин <br />
                                    в Минске</h1>
                                <button className="Подробнее">Подробнее</button>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="three-card bg2">
                                <h1 className="momo">Доставка и
                                    <br />
                                    оплата товара</h1>
                                <button className="Подробнее">Подробнее</button>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="three-card bg3">
                                <h1 className="momo">Товары
                                    <br />
                                    со скидкой</h1>
                                <button className="Подробнее">Подробнее</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </main>
        </>
    );
}

export default Main;
