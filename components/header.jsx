import React, { useState } from 'react';
import logoImg from '../public/images/logo/logo.png';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { FaLongArrowAltDown } from 'react-icons/fa';
import { FaBars, FaSkype, FaFacebookF, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { Link as ReactLink } from 'react-router-dom';
import Language from './Language';
import useTrans from '../hooks/useTrans';

export default function Header() {
  const { trans } = useTrans();

  const navDropdownTitle = (
    <>
      Blog <FaLongArrowAltDown />
    </>
  );

  return (
    <div className="header-area p-4" style={{ background: 'rgba(0, 0, 0, 0.2)', position: 'fixed', width: '100%' }}>
      <div className="container">
        <div className="row justify-content-lg-between">
          <div className="col-lg-12 px-0">
            <div className="menu-area">
              <Navbar collapseOnSelect expand="lg" className="p-0">
                <div className="logo-area">
                  {/* <ReactLink to="/" className="nav-link">
                                        <img className="img-fluid" src={logoImg} />
                                    </ReactLink> */}
                  <div>helpUA</div>
                </div>
                <Navbar.Toggle aria-controls="responsive-navbar-nav">
                  <i className="text-white">
                    <FaBars />
                  </i>
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="ml-auto align-items-center">
                    <ReactLink to="/" className="nav-link">
                      Home
                    </ReactLink>
                    <Link
                      className="nav-link"
                      to="portfolio"
                      smooth={true}
                      duration={2000}
                      activeClass="active"
                      spy={false}
                      offset={5}
                    >
                      {t('header.navbar.portfolio')}
                    </Link>
                    <NavDropdown title={navDropdownTitle} id="basic-nav-dropdown">
                      <Link
                        className="dropdown-item"
                        to="blog"
                        smooth={true}
                        duration={2000}
                        activeClass="active"
                        spy={false}
                        offset={5}
                      >
                        {' '}
                        Latest Posts{' '}
                      </Link>
                    </NavDropdown>
                    <Link
                      className="nav-link"
                      to="contact"
                      smooth={true}
                      duration={2000}
                      activeClass="active"
                      spy={false}
                      offset={5}
                    >
                      {' '}
                      Contact{' '}
                    </Link>
                    <ul className="mb-0 menu-social pl-15">
                      <li className="list-inline-item menu-border">
                        <a href="#">
                          <i>
                            <FaSkype />
                          </i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">
                          <i>
                            <FaFacebookF />
                          </i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">
                          <i>
                            <FaTwitter />
                          </i>
                        </a>
                      </li>
                    </ul>
                    <Language color="#000" />
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}