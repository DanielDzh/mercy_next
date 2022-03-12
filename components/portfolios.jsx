import React, { useState, useEffect } from 'react';
import { Col, Row, Nav, Tab } from "react-bootstrap";
import Masonry from "react-responsive-masonry"
import SinglePortfolio from "../SingleFeatures/SinglePortfolio";
import people1 from "../public/images/portfolio/people1.jpg";
import people2 from "../public/images/portfolio/people2.jpg";
import people3 from "../public/images/portfolio/people3.jpg";
import people4 from "../public/images/portfolio/people4.jpg";
import people5 from "../public/images/portfolio/people5.jpg";
import people6 from "../public/images/portfolio/people6.jpg";
import people7 from "../public/images/portfolio/people7.jpg";
import people8 from "../public/images/portfolio/people8.jpg";
import people9 from "../public/images/portfolio/people9.jpg";
import people10 from "../public/images/portfolio/people10.jpg";
import people11 from "../public/images/portfolio/people11.jpg";
import people12 from "../public/images/portfolio/people12.jpg";

import devastation1 from "../public/images/portfolio/devastation1.jpg";
import devastation2 from "../public/images/portfolio/devastation2.jpg";
import devastation3 from "../public/images/portfolio/devastation3.jpg";
import devastation4 from "../public/images/portfolio/devastation4.jpg";
import devastation5 from "../public/images/portfolio/devastation5.jpg";
import devastation6 from "../public/images/portfolio/devastation6.jpg";
import devastation7 from "../public/images/portfolio/devastation7.jpg";
import devastation8 from "../public/images/portfolio/devastation8.jpg";
import devastation9 from "../public/images/portfolio/devastation9.jpg";
import devastation10 from "../public/images/portfolio/devastation10.jpg";
import devastation11 from "../public/images/portfolio/devastation11.jpg";

import city1 from "../public/images/portfolio/city1.jpg";
import city2 from "../public/images/portfolio/city2.jpg";
import city3 from "../public/images/portfolio/city3.jpg";
import city4 from "../public/images/portfolio/city4.jpg";
import city5 from "../public/images/portfolio/city5.jpg";
import city6 from "../public/images/portfolio/city6.jpg";
import city7 from "../public/images/portfolio/city7.jpg";
import city8 from "../public/images/portfolio/city8.jpg";


import machine1 from "../public/images/portfolio/machine1.jpg";
import machine2 from "../public/images/portfolio/machine2.jpg";
import machine3 from "../public/images/portfolio/machine3.jpg";
import machine4 from "../public/images/portfolio/machine4.jpg";
import machine5 from "../public/images/portfolio/machine5.jpg";
import machine6 from "../public/images/portfolio/machine6.jpg";
import machine7 from "../public/images/portfolio/machine7.jpg";
import machine8 from "../public/images/portfolio/machine8.jpg";
import machine9 from "../public/images/portfolio/machine9.jpg";
import machine10 from "../public/images/portfolio/machine10.jpg";
import machine11 from "../public/images/portfolio/machine11.jpg";


import { SRLWrapper } from "simple-react-lightbox";
import { useGlobalEvent } from 'beautiful-react-hooks';
import SectionTitle from "./SectionTitle";

export default function Portfolios() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [portfolioColumns, setPortfolioColumns] = useState(3);
    const onWindowResize = useGlobalEvent('resize');

    const controlColumns = () => {
        setWindowWidth(window.innerWidth);

        if (windowWidth >= 992) {
            setPortfolioColumns(4);
        } else if (windowWidth <= 991 && windowWidth > 767) {
            setPortfolioColumns(3);
        }
        if (windowWidth <= 767) {
            setPortfolioColumns(1);
        }
    }
    onWindowResize((event) => {
        controlColumns();
    });

    useEffect(() => {
        controlColumns();
    }, [windowWidth]);


    return (
        <>
            <div className="portfolio-area section-ptb-2" id="portfolio">
                <div className="container">
                    <SectionTitle
                        title="Медіа"
                        subTitle="Фото"
                        desc1="Ці фото з початку війни в Укрїні, яка розпочалась 24 лютого 2022 року."
                        desc2="Сотні смертей, тисячі поранених, стільки ж зруйнованих осель."
                    />
                    <Tab.Container defaultActiveKey="city">
                        <Row>
                            <div className="col-xl-8 col-lg-9 col-sm-12 mx-auto">
                                <Nav className="pofo-cat pb-5 text-center justify-content-center">
                                    <Nav.Item>
                                        <Nav.Link eventKey="city">Міста</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="devastation">Розрухи</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="people">Люди</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="machinery">Техніка</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="video">Відео</Nav.Link>
                                    </Nav.Item>
                                    <div className="pofo-line"></div>
                                </Nav>
                            </div>
                            <Col sm={12}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="city">
                                        {/* <SRLWrapper> */}
                                        {/* <Masonry columnsCount={portfolioColumns}> */}
                                        <div className='grid1'>
                                            <SinglePortfolio portfolioImg={city1} title="Portfolio Title One" name='city_photo1' />
                                            <SinglePortfolio portfolioImg={city2} title="Portfolio Title Two" name='city_photo2' />
                                            <SinglePortfolio portfolioImg={city3} title="Portfolio Title Three" name='city_photo3' />
                                            <SinglePortfolio portfolioImg={city4} title="Portfolio Title Four" name='city_photo4' />
                                            <SinglePortfolio portfolioImg={city5} title="Portfolio Title Five" name='city_photo5' />
                                            <SinglePortfolio portfolioImg={city6} title="Portfolio Title Six" name='city_photo6' />
                                            <SinglePortfolio portfolioImg={city7} title="Portfolio Title Seven" name='city_photo7' />
                                            <SinglePortfolio portfolioImg={city8} title="Portfolio Title Eight" name='city_photo8' />
                                        </div>
                                        {/* </Masonry> */}
                                        {/* </SRLWrapper> */}
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="devastation">
                                        <div className='grid2'>
                                            <SinglePortfolio portfolioImg={devastation1} title="Portfolio Title Seven" name='deva_photo1' />
                                            <SinglePortfolio portfolioImg={devastation2} title="Portfolio Title Eight" name='deva_photo2' />
                                            <SinglePortfolio portfolioImg={devastation3} title="Portfolio Title Nine" name='deva_photo3' />
                                            <SinglePortfolio portfolioImg={devastation4} title="Portfolio Title Ten" name='deva_photo4' />
                                            <SinglePortfolio portfolioImg={devastation5} title="Portfolio Title Ten" name='deva_photo5' />
                                            <SinglePortfolio portfolioImg={devastation6} title="Portfolio Title Ten" name='deva_photo6' />
                                            <SinglePortfolio portfolioImg={devastation7} title="Portfolio Title Ten" name='deva_photo7' />
                                            <SinglePortfolio portfolioImg={devastation8} title="Portfolio Title Ten" name='deva_photo8' />
                                            <SinglePortfolio portfolioImg={devastation9} title="Portfolio Title Ten" name='deva_photo9' />
                                            <SinglePortfolio portfolioImg={devastation10} title="Portfolio Title Ten" name='deva_photo10' />
                                            <SinglePortfolio portfolioImg={devastation11} title="Portfolio Title Ten" name='deva_photo11' />
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="people">
                                        <div className='grid3'>
                                            <SinglePortfolio portfolioImg={people1} title="Portfolio Title One" name='people_photo1' />
                                            <SinglePortfolio portfolioImg={people2} title="Portfolio Title Three" name='people_photo2' />
                                            <SinglePortfolio portfolioImg={people3} title="Portfolio Title Four" name='people_photo3' />
                                            <SinglePortfolio portfolioImg={people4} title="Portfolio Title Five" name='people_photo4' />
                                            <SinglePortfolio portfolioImg={people5} title="Portfolio Title Six" name='people_photo5' />
                                            <SinglePortfolio portfolioImg={people6} title="Portfolio Title Seven" name='people_photo6' />
                                            <SinglePortfolio portfolioImg={people7} title="Portfolio Title Seven" name='people_photo7' />
                                            <SinglePortfolio portfolioImg={people8} title="Portfolio Title Eight" name='people_photo8' />
                                            <SinglePortfolio portfolioImg={people9} title="Portfolio Title Eight" name='people_photo9' />
                                            <SinglePortfolio portfolioImg={people10} title="Portfolio Title Eight" name='people_photo10' />
                                            <SinglePortfolio portfolioImg={people11} title="Portfolio Title Eight" name='people_photo11' />
                                            <SinglePortfolio portfolioImg={people12} title="Portfolio Title Eight" name='people_photo12' />
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="machinery">
                                        <div className='grid4'>
                                            <SinglePortfolio portfolioImg={machine1} title="Portfolio Title One" name='machine_photo1' />
                                            <SinglePortfolio portfolioImg={machine2} title="Portfolio Title Three" name='machine_photo2' />
                                            <SinglePortfolio portfolioImg={machine3} title="Portfolio Title Four" name='machine_photo3' />
                                            <SinglePortfolio portfolioImg={machine4} title="Portfolio Title Five" name='machine_photo4' />
                                            <SinglePortfolio portfolioImg={machine5} title="Portfolio Title Six" name='machine_photo5' />
                                            <SinglePortfolio portfolioImg={machine6} title="Portfolio Title Six" name='machine_photo6' />
                                            <SinglePortfolio portfolioImg={machine7} title="Portfolio Title Six" name='machine_photo7' />
                                            <SinglePortfolio portfolioImg={machine8} title="Portfolio Title Six" name='machine_photo8' />
                                            <SinglePortfolio portfolioImg={machine9} title="Portfolio Title Six" name='machine_photo9' />
                                            <SinglePortfolio portfolioImg={machine10} title="Portfolio Title Six" name='machine_photo10' />
                                            <SinglePortfolio portfolioImg={machine11} title="Portfolio Title Six" name='machine_photo11' />
                                            {/* <SinglePortfolio portfolioImg={machine12} title="Portfolio Title Six" name='machine_photo12' />
                                            <SinglePortfolio portfolioImg={machine13} title="Portfolio Title Six" name='machine_photo13' /> */}


                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="video">
                                        <SRLWrapper>
                                            <Masonry columnsCount={portfolioColumns}>
                                                {/* <SinglePortfolio portfolioImg={portfolioImg_01} title="Portfolio Title One" />
                                                <SinglePortfolio portfolioImg={portfolioImg_03} title="Portfolio Title Three" />
                                                <SinglePortfolio portfolioImg={portfolioImg_04} title="Portfolio Title Four" />
                                                <SinglePortfolio portfolioImg={portfolioImg_02} title="Portfolio Title Five" />
                                                <SinglePortfolio portfolioImg={portfolioImg_06} title="Portfolio Title Six" /> */}
                                            </Masonry>
                                        </SRLWrapper>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </div>
            </div>
        </>
    )
}
