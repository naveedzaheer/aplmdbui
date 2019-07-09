import logo from './logo.svg';
import './App.css';
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBFooter, MDBNavLink } from "mdbreact";
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import SessionPage from './components/SessionPage';
import ViewSession from './components/ViewSession';
import About from './components/About';

const App = () => (
  <Router>
    <div className="flyout">
      <Fragment>
        <Header />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/Sessions" component={SessionPage} />
        <Route exact path="/Session/:id" component={ViewSession} />
        <Route exact path="/Abount" component={About} />
        <Footer />
      </Fragment>
    </div>
  </Router>
);


export default App;
