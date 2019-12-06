import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact'

const ViewSessionInfo = ({ session }) => {
    console.log('ViewSessionInfo-' + JSON.stringify(session));
    return (
        <MDBContainer className="mt-5 pt-5">
            <MDBRow>
                <MDBCol size="12">
                    <h5  class="h4">{session.name}</h5>
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol size="12">
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe className="embed-responsive-item" src={session.youtubeLink}>Data</iframe>
                    </div>
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol size="12">
                    <h5 class="card-title">{session.description}</h5>
                </MDBCol>
            </MDBRow>
            <MDBRow className="py-3">
                <MDBCol size="6">                    
                    <p><strong>By: </strong>{session.presenter}  <div class="blue-grey-text">({session.presenterRole}) at <strong>{session.presenterCompany}</strong></div></p>
                </MDBCol>
                <MDBCol size="2"></MDBCol>
                <MDBCol size="2">                    
                </MDBCol>
                <MDBCol size="2" className="align-right">                    
                    <p class="align-right">{new Date(session.scheduledDate).toDateString()}</p><p><a href={session.slideDeckUrl}>Session Slides</a></p>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}

export default ViewSessionInfo;