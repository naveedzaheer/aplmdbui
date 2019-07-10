import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardHeader, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText } from "mdbreact";
import SessionRow from './SessionRow';
import SessionTron from './SessionTron';

class SessionPage extends Component {
    constructor() {
        super();
        this.state = { sessionBlocks: [], sessions: [], totalRows: 0, totalItems: 0, };
    }

    componentDidMount() {
        fetch('https://nzaplfunc.azurewebsites.net/api/AllItems?code=gQN0nx45Sw1KTf1oIP0ojz0jaMksvoZaSuVvkGmNMtjDt5I0etnBKQ==')
            .then(res => res.json())
            .then((data) => {
                this.setState({ sessions: data, totalItems: data.length, totalRows: Math.ceil(data.length / 3) });
                var totalBlocks = Math.ceil(this.state.sessions.length/3);
                var blocks = new Array(totalBlocks);
                var i;
                for (i = 0; i < blocks.length; i++) {
                    blocks[i] = new Array(3);
                    console.log('Block Row' + i);
                  } 
                for (i = 0; i < this.state.sessions.length; i++) {
                    var blockNumber = Math.floor(i / 3);
                    var sessionBlock = blocks[blockNumber];
                    var blockIndex = i % 3;
                    sessionBlock[blockIndex] = this.state.sessions[i];
                    console.log('Item-' + i + '-' + this.state.sessions[i].name);
                  } 
                  for (i = 0; i < this.state.sessionBlocks.length; i++) {
                    console.log(JSON.stringify(blocks[i]));
                  } 
                  this.setState({ sessionBlocks: blocks });
            })
            .catch(console.log)
    }

    render() {
        return (
            <MDBContainer>
                <SessionTron />
                {this.state.sessionBlocks.map((sessionBlock) => (
                    <SessionRow sessions={sessionBlock} />
                ))}
            </MDBContainer>
        );
    }
}
export default SessionPage;