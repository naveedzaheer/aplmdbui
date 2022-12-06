import React from "react";
import { MDBContainer, MDBRow } from "mdbreact";
import { Link } from "react-router-dom";
import Infotron from './Infotron';
import HomeCards from './HomeCards';

const HomePage = () => {
    return (
        <MDBContainer>
            <MDBRow>
                <Infotron />
            </MDBRow>
            <MDBRow>
                <HomeCards />
            </MDBRow>
            <MDBRow>
                <b><Link to="/Sessions" class="card-title">Load More Sessions...</Link></b>
            </MDBRow>
        </MDBContainer>
    );
}

export default HomePage;