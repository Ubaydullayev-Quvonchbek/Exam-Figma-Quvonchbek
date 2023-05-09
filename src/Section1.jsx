import React from 'react';
import { Col, Container, Row } from "react-bootstrap";

const Section1 = () => {
    return (
        <>
            <section className='sect1'>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <h1 className="Rembini">Почему выгодно покупать в Rembini ?</h1>
                        </Col>
                        <Col lg={3}>
                            <div className="dot-card">
                                <i className="fa-solid fa-address-card вще"></i>
                                <h1 className="dot-card-text">Карта - 10% в подарок</h1>
                                <p className="dot-card-map">Дарим карту клиента после <br /> первой покупки</p>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="dot-card">
                                <i className="fa-solid fa-truck-monster вще"></i>
                                <h1 className="dot-card-text">Бесплатная доставка</h1>
                                <p className="dot-card-map">Доставка заказов по Минску <br />
                                    и РБ бесплатно</p>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="dot-card">
                                <i className="fa-brands fa-cc-visa вще"></i>
                                <h1 className="dot-card-text">Широкий ассортимент</h1>
                                <p className="dot-card-map">Более 3000 моделей <br />
                                    в наличии</p>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="dot-card">
                                <i className="fa-solid fa-gift вще"></i>
                                <h1 className="dot-card-text">Проверенное качество</h1>
                                <p className="dot-card-map">Только натуральная кожа <br />
                                    и долговечность</p>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="dot-card">
                                <i className="fa-solid fa-address-card вще"></i>
                                <h1 className="dot-card-text">Рассрочка по карте</h1>
                                <p className="dot-card-map">Халва, Карта покупок, Карта Fun, Смарт карта, Магнит, Любимая карта</p>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="dot-card">
                                <i className="fa-solid fa-truck-monster вще"></i>
                                <h1 className="dot-card-text">Наличие товаров</h1>
                                <p className="dot-card-map">Удобное расположение в центре <br /> Минска</p>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="dot-card">
                                <i className="fa-brands fa-cc-visa вще"></i>
                                <h1 className="dot-card-text">Гравировка изделий</h1>
                                <p className="dot-card-map">Бесплатно для наших <br /> клиентов</p>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="dot-card">
                                <i className="fa-solid fa-gift вще"></i>
                                <h1 className="dot-card-text">Подарочные упаковки</h1>
                                <p className="dot-card-map">Красивое оформление <br />
                                    подарков</p>
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className="long-card">
                                <h1>На каждый второй товар в заказе <br /> <span>Скидка 30%</span></h1>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default Section1;
