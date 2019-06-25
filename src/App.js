import logo from './logo.svg';
import './App.css';
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBFooter, MDBNavLink } from "mdbreact";
import NavBar from './components/NavBar';
import Infotron from './components/Infotron';
import HomeCards from './components/HomeCards';

const App = () => (
  <Router>
    <div className="flyout">
      <Fragment>

        <NavBar />
        <main>
          <Infotron />
          <HomeCards />
        </main>
        <MDBFooter color="indigo">
          <p className="footer-copyright mb-0 py-3 text-center">
            &copy; {new Date().getFullYear()} Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
          </p>
        </MDBFooter>
      </Fragment>
    </div>
  </Router>
);


export default App;
