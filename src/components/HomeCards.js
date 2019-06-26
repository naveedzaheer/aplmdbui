import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardHeader, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText } from "mdbreact";

class HomeCards extends Component {
    constructor()
    {
        super();
        this.state = { sessions: [],};
    }

    componentDidMount() {
        fetch('https://nzaplfunc.azurewebsites.net/api/TopItems?code=wc6OAWPABVGO3M40205XKrpxmaDljp5avNmJS2vS2RIseVlljiYyzQ==')
            .then(res => res.json())
            .then((data) => {
                this.setState({ sessions: data })
            })
            .catch(console.log)
    }

    render() {
        return (
            <MDBContainer>
                <MDBRow className="pb-4">
                    {this.state.sessions.map((session) => (
                        <MDBCol md="4">
                            <MDBCard style={{ width: "22rem", height: "25rem" }}>
                                <MDBCardHeader color="primary-color-dark">{new Date(session.scheduledDate).toDateString()}</MDBCardHeader>
                                <MDBCardImage className="img-fluid" href={session.youtubeLink} src={session.youtubeImageUrl} waves />
                                <MDBCardBody>
                                    <MDBCardTitle>{session.name}</MDBCardTitle>
                                    <MDBCardText className="font-weight-bold">
                                        {session.presenter}
                                    </MDBCardText>
                                    <MDBCardText className="font-weight-bolder">
                                        {new Date(session.scheduledDate).toDateString()}
                                    </MDBCardText>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    ))}
                </MDBRow>
            </MDBContainer>
        );
    }
}
export default HomeCards;