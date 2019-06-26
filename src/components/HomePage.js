import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
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
        </MDBContainer>
    );
}

export default HomePage;