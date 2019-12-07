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
        fetch('https://nzapl.azure-api.net/aplapis/TopItemsTS?subscription-key=af0afe00029d45b5af4abe29659f3319')
            .then(res => res.json())
            .then((data) => {
                this.setState({ sessions: data })
            })
            .catch(console.log)
    }

    getSessionBlock(session)
    {
        if (session.status == 2)
        {
            return (<MDBCard style={{ width: "22rem", height: "26rem" }}>
            <MDBCardHeader color="red darken-4">{new Date(session.scheduledDate).toDateString()}</MDBCardHeader>
            <MDBCardImage className="img-fluid" src="https://nzpowerlunchfiles.blob.core.windows.net/images/session-cancled.jpg" />
            <MDBCardBody>
                <MDBCardTitle >{session.name}</MDBCardTitle>
                <MDBCardText className="font-weight-bold">
                    {session.description}
                </MDBCardText>
            </MDBCardBody>
            </MDBCard>);
        }
        else
        {
            return (<MDBCard style={{ width: "22rem", height: "26rem" }}>
            <MDBCardHeader color="teal darken-1">{new Date(session.scheduledDate).toDateString()}</MDBCardHeader>
            <MDBCardImage className="img-fluid" src="https://nzpowerlunchfiles.blob.core.windows.net/images/apl-session-coming-soon.jpg" />
            <MDBCardBody>
                <MDBCardTitle >{session.name}</MDBCardTitle>
                <MDBCardText className="font-weight-bold">
                    {session.presenter}  <p class="blue-grey-text">({session.presenterRole}) at {session.presenterCompany}</p>
                </MDBCardText>
            </MDBCardBody>
        </MDBCard>);
        }
    }

    render() {
        return (
            <MDBContainer>
            <MDBRow className="pb-4">
                    {this.state.sessions && this.state.sessions.map((session) => (
                        <MDBCol md="4">
                            {((session.status) == 1) ?
                            (<Link to={'/Session/' + session.sessionId} class="card-link">
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
                            </Link>) : ( this.getSessionBlock(session)
                            )}
                        </MDBCol>
                    ))}
            </MDBRow>
            </MDBContainer>
        );
    }
}
export default HomeCards;