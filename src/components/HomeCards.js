import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardHeader, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText } from "mdbreact";

const HomeCards = () => {
    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol md="4">
                    <MDBCard style={{ width: "22rem" }}>
                        <MDBCardHeader color="deep-orange lighten-1">Upcoming Session</MDBCardHeader>
                        <MDBCardImage className="img-fluid" src="https://img.youtube.com/vi/HSV9mqLR78E/maxresdefault.jpg" waves />
                        <MDBCardBody>
                            <MDBCardTitle>Azure Virtual network TAP</MDBCardTitle>
                            <MDBCardText>
                                Some quick example text to build on the card title and make
                                up the bulk of the card&apos;s content.
                            </MDBCardText>
                            <MDBBtn href="#">MDBBtn</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol md="4">
                <MDBCard style={{ width: "22rem" }}>
                    <MDBCardHeader color="deep-orange lighten-1">View On-Demand</MDBCardHeader>
                        <MDBCardImage className="img-fluid" src="https://img.youtube.com/vi/7bTsjFEZrGs/maxresdefault.jpg" waves />
                        <MDBCardBody>
                            <MDBCardTitle>Serverless automation using PowerShell</MDBCardTitle>
                            <MDBCardText>
                                Some quick example text to build on the card title and make
                                up the bulk of the card&apos;s content.
                            </MDBCardText>
                            <MDBBtn href="#">MDBBtn</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol md="4">
                <MDBCard style={{ width: "22rem" }}>
                    <MDBCardHeader color="deep-orange lighten-1">View On-Demand</MDBCardHeader>
                        <MDBCardImage className="img-fluid" src="https://img.youtube.com/vi/GZjQsFUiN30/maxresdefault.jpg" waves />
                        <MDBCardBody>
                            <MDBCardTitle>Azure DevOps Labs</MDBCardTitle>
                            <MDBCardText>
                                Some quick example text to build on the card title and make
                                up the bulk of the card&apos;s content.
                            </MDBCardText>
                            <MDBBtn href="#">MDBBtn</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>

                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}

export default HomeCards;