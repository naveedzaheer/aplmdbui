import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardHeader, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText } from "mdbreact";

class SessionRow extends Component {
    constructor() {
        super();
        this.state = { sessions: [], };
    }

    render() {
        return (
            <MDBContainer>
                <MDBRow className="pb-4">
                    {this.props.sessions.map((session) => (
                        <MDBCol md="4">
                            <Link to={'/Session/' + session.sessionId} class="card-link">
                                <MDBCard style={{ width: "22rem", height: "26rem" }}>
                                    <MDBCardHeader color="teal darken-4">{new Date(session.scheduledDate).toDateString()}</MDBCardHeader>
                                    <a href={session.youtubeLink} class="card-link"><MDBCardImage className="img-fluid" src={session.youtubeImageUrl} waves /></a>
                                    <MDBCardBody>
                                        <MDBCardTitle >{session.name}</MDBCardTitle>
                                        <MDBCardText className="font-weight-bold">
                                            {session.presenter}  <p class="blue-grey-text">({session.presenterRole}) at {session.presenterCompany}</p>
                                        </MDBCardText>
                                    </MDBCardBody>
                                </MDBCard>
                            </Link>
                        </MDBCol>
                    ))}
                </MDBRow>
            </MDBContainer>
        );
    }
}
export default SessionRow;