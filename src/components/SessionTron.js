import React from "react";
import { MDBJumbotron, MDBContainer } from "mdbreact";
import logo from '../img/apl-logo.png';

const SessionTron = () => {
    return (
        <MDBJumbotron fluid className="light-blue lighten-5 mt-5">
            <MDBContainer>
                <div class="container">
                    <div class="row">
                        <div class="col-9">
                            <h1 className="display-3">Session Catalog</h1>
                        </div>
                        <div class="col-2">
                        <img src={logo} class="img-responsive" alt="" />
                        </div>
                    </div>
                </div>
            </MDBContainer>
        </MDBJumbotron>
    )
}

export default SessionTron;