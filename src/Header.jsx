import React from 'react';
import logoImg from "./image/Logo.svg";
import carouselBG from "./image/carousel-bg.svg";
import { Col, Container, Row, Carousel } from "react-bootstrap";

const Header = () => {
    const lists = ["Оплата и доставка", "Оплата и доставка", "Контакты", "Бренды", "Сертификаты", "Статьи", "Отзывы", "Карта лояльности", "Гарантии"]
    return (
        <>
            <header>
                <nav className="nav1">
                    <Container>
                        <Row>
                            <Col lg={8}>
                                <ul className="list d-flex justify-content-between align-items-center">
                                    {lists?.map((res) => {
                                        return (
                                            <li className="list-item">{res}</li>
                                        )
                                    })}
                                </ul>
                            </Col>
                            <Col lg={4}>
                                <div className="d-flex align-items-center justify-content-end">
                                    <div className="nav-box">
                                        <i className="fa-solid fa-phone"></i>
                                        <div>
                                            <h3 className="phone-number">+375 20 555 10 99</h3>
                                            <h3 className="date">Пн-Пт c 9:00 до 13:00</h3>
                                        </div>
                                    </div>
                                    <div className="navbar-box ms-2">
                                        <i className="fa-brands fa-instagram"></i>
                                    </div>
                                    <div className="navbar-box ms-2">
                                        <i className="fa-regular fa-user"></i>
                                        <p className="Войти">Войти</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </nav>
                <nav className="nav2">
                    <Container>
                        <Row className="justify-content-center align-items-center">
                            <Col lg={2}>
                                <div className="logo">
                                    <img width="100%" src={logoImg} alt="png" />
                                </div>
                            </Col>
                            <Col lg={3}>
                                <div className="d-flex align-items-center justify-content-center">
                                    <input className="inp" type="text" placeholder="Поиск на сайте" />
                                    <button className="searchBtn"><i className="fa-solid fa-magnifying-glass"></i></button>
                                </div>
                            </Col>
                            <Col lg={7}>
                                <div className="d-flex align-items-center justify-content-around">
                                    <div className="d-flex align-items-center justify-content-center">
                                        <h1 className="icons"><i className="fa-solid fa-truck myIcon"></i></h1>
                                        <p className="text">
                                            <span className="bold-text">Бесплатная доставка</span>
                                            <br />
                                            Осуществляем доставку
                                            <br />
                                            по Минску и Беларуси
                                        </p>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-end">
                                        <h1 className="icons"><i className="fa-solid fa-location-dot myIcon"></i></h1>
                                        <p className="text">
                                            <span className="bold-text">Бесплатная доставка</span>
                                            <br />
                                            Осуществляем доставку
                                            <br />
                                            по Минску и Беларуси
                                        </p>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-end">
                                        <h1 className="asd"><i className="fa-solid fa-cart-shopping myIcon2"></i></h1>
                                        <h1 className="non-box">
                                            Корзина
                                            <br />
                                            <span className="dfg">У вас 1 подарок</span>
                                        </h1>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </nav>
                <nav className="nav3">
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <div className="d-flex align-items-center justify-content-center">
                                    <div className="myCard d-flex align-items-center justify-content-center">
                                        <i className="fa-regular fa-clock cardIcon"></i>
                                        <p className="card-name">Ремни</p>
                                    </div>
                                    <div className="myCard d-flex align-items-center justify-content-center">
                                        <i className="fa-solid fa-briefcase cardIcon"></i>
                                        <p className="card-name">Сумки</p>
                                    </div>
                                    <div className="myCard d-flex align-items-center justify-content-center">
                                        <i className="fa-solid fa-sack-dollar cardIcon"></i>
                                        <p className="card-name">Кошельки</p>
                                    </div>
                                    <div className="myCard d-flex align-items-center justify-content-center">
                                        <i className="fa-solid fa-umbrella cardIcon"></i>
                                        <p className="card-name">Зонты</p>
                                    </div>
                                    <div className="myCard d-flex align-items-center justify-content-center">
                                        <i className="fa-regular fa-clock cardIcon"></i>
                                        <p className="card-name">Подтяжки</p>
                                    </div>
                                    <div className="myCard d-flex align-items-center justify-content-center">
                                        <i className="fa-solid fa-briefcase cardIcon"></i>
                                        <p className="card-name">Рюкзаки</p>
                                    </div>
                                    <div className="myCard d-flex align-items-center justify-content-center">
                                        <i className="fa-solid fa-umbrella cardIcon"></i>
                                        <p className="card-name">Аксессуары</p>
                                    </div>
                                    <div className="myCard d-flex align-items-center justify-content-center">
                                        <i className="fa-regular fa-clock cardIcon"></i>
                                        <p className="card-name">Перчатки</p>
                                    </div>
                                    <div className="myCard d-flex align-items-center justify-content-center">
                                        <i className="fa-solid fa-umbrella cardIcon"></i>
                                        <p className="card-name">Галстуки</p>
                                    </div>
                                    <div className="myCard d-flex align-items-center justify-content-center">
                                        <i className="fa-solid fa-briefcase cardIcon"></i>
                                        <p className="card-name">Браслеты</p>
                                    </div>
                                    <div className="myCard d-flex align-items-center justify-content-center">
                                        <i className="fa-solid fa-umbrella cardIcon"></i>
                                        <p className="card-name">Жен. ремни</p>
                                    </div>
                                    <div className="myCard d-flex align-items-center justify-content-center">
                                        <i className="fa-regular fa-clock cardIcon"></i>
                                        <p className="card-name">Жен. кошельки</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </nav>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={carouselBG}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <div className="carousel-box">
                                <h3><span className="pro">30%</span> скидка  <br />
                                    <span className="span-one">на каждый второй товар в заказе </span></h3>
                                <p>Покупай подарки себе и близким выгодно!</p>
                                <button>Подробнее</button>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={carouselBG}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <div className="carousel-box">
                                <h3><span className="pro">30%</span> скидка  <br />
                                    <span className="span-one">на каждый второй товар в заказе </span></h3>
                                <p>Покупай подарки себе и близким выгодно!</p>
                                <button>Подробнее</button>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={carouselBG}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <div className="carousel-box">
                                <h3><span className="pro">30%</span> скидка  <br />
                                    <span className="span-one">на каждый второй товар в заказе </span></h3>
                                <p>Покупай подарки себе и близким выгодно!</p>
                                <button>Подробнее</button>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </header>
        </>
    );
}

export default Header;
