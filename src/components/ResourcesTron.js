import React from "react";
import { MDBJumbotron, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import logo from '../img/apl-logo.png';

const AboutTron = () => {
    return (
        <MDBJumbotron fluid className="light-blue lighten-5 mt-5">
            <MDBContainer>
                <MDBRow>
                    <MDBCol size="9"><h1 className="display-3">Useful Azure resources</h1></MDBCol>
                    <MDBCol size="3"><div class="d-none d-xl-block"><img src={logo} class="img-responsive" alt="" /></div></MDBCol>
                </MDBRow>
            </MDBContainer>
        </MDBJumbotron>
    )
}

export default AboutTron;