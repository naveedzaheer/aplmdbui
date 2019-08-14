import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardHeader, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText } from "mdbreact";

class HomeCards extends Component {
    constructor()
    {
        super();
        this.state = { sessions: [],};
    }

    componentDidMount() {
        fetch('https://nzaplfunc.azurewebsites.net/api/TopItemsTS?code=urnTxjc0tqa8CCfHmAW0U4Ro/BzZGL77W/5SZEnICbhQBt21uRuS7w==')
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
                        <Link to={'/Session/' + session.sessionId} class="card-link">
                            <MDBCard style={{ width: "22rem", height: "26rem" }}>
                                <MDBCardHeader color="light-blue darken-4">{new Date(session.scheduledDate).toUTCString().replace('00:00:00 GMT','')}</MDBCardHeader>
                                <a href={session.youtubeLink} class="card-link"><MDBCardImage className="img-fluid" src={session.youtubeImageUrl} waves /></a>
                                <MDBCardBody>
                                    <MDBCardTitle >{session.name}</MDBCardTitle>
                                    <MDBCardText className="font-weight-bold align-bottom">
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
export default HomeCards;