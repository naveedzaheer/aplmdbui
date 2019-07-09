import React, { Component } from "react";
import { MDBContainer } from 'mdbreact'

const ViewSessionInfo = ({ session }) => {
    console.log('ViewSessionInfo-' + JSON.stringify(session));
    return (
        <MDBContainer className="mt-1">
            <div class="card">
                <div class="card-header">
                    {session.name}
                </div>
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src={session.youtubeLink}>Data</iframe>
                </div>
                <div class="card-body">
                    <h5 class="card-title">{session.description}</h5>
                    <p class="card-text">{session.presenter}</p>
                </div>
            </div>

        </MDBContainer>
    );
}

export default ViewSessionInfo;