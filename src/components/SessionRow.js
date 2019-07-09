import React, { Component } from "react";
import {Link} from "react-router-dom";
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
                            <MDBCard style={{ width: "22rem", height: "25rem" }}>
                                <MDBCardHeader color="primary-color-dark">{new Date(session.scheduledDate).toDateString()}</MDBCardHeader>
                                <a href={session.youtubeLink} class="card-link"><MDBCardImage className="img-fluid" src={session.youtubeImageUrl} waves /></a>
                                <MDBCardBody>
                                    <MDBCardTitle >{session.name}</MDBCardTitle>
                                    <MDBCardText className="font-weight-bold">
                                        {session.presenter}
                                    </MDBCardText>
                                    <MDBCardText className="font-weight-bolder">
                                        {new Date(session.scheduledDate).toDateString()}
                                    </MDBCardText>    
                                    <Link to={
                                                { 
                                                    pathname: "/Session/" + session.sessionId,
                                                    sessionData: {session}
                                                }
                                            }
                                            class="card-link">{session.name}</Link>                          
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    ))}
                </MDBRow>
            </MDBContainer>
        );
    }
}
export default SessionRow;