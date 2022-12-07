import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardHeader, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText } from "mdbreact";
import SessionRow from './SessionRow';
import SessionTron from './SessionTron';
import CardGroup from 'react-bootstrap/CardGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

class SessionPageFull extends Component {
    constructor() {
        super();
        this.state = { sessions: []};
    }

    componentDidMount() {
        fetch('https://aplapim.azure-api.net/nzapldatafunc/AllItemsTS?subscription-key=cb296b9e1ec64d82a194e392710b8788')
            .then(res => res.json())
            .then((data) => {
                this.setState({ sessions: data });
                var i;
                for (i = 0; i < this.state.sessions.length; i++) {
                    console.log('Item-' + i + '-' + this.state.sessions[i].name);
                  } 
            })
            .catch(console.log)
    }

    render() {
        return (
            <MDBContainer>
                <SessionTron />
                {this.state.sessions.map((session) => (
                    <MDBContainer>
                        <CardGroup>
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
                        </CardGroup>
                </MDBContainer>
                ))}
            </MDBContainer>
        );
    }
}
export default SessionPageFull;