import React, { Component } from "react";
import { MDBContainer } from 'mdbreact'

class ViewSession extends Component {

    state = {
        user: null
      }
    componentDidMount() {
        const sessionData = this.props.location.sessionData
        console.log('the data value is:' + this.props.location.sessionData.sessionId)
    }

    render() {
        return (
            <MDBContainer>

                <div className="embed-responsive embed-responsive-21by9">
                    <iframe className="embed-responsive-item" src={this.props.sessionData.youtubeImageUrl}></iframe>
                </div>

                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src={this.props.sessionData.youtubeImageUrl}></iframe>
                </div>

                <div className="embed-responsive embed-responsive-4by3">
                    <iframe className="embed-responsive-item" src={this.props.sessionData.youtubeImageUrl}></iframe>
                </div>
                <div className="embed-responsive embed-responsive-1by1">
                    <iframe className="embed-responsive-item" src={this.props.sessionData.youtubeImageUrl}></iframe>
                </div>

            </MDBContainer>

        )
    }
}

export default ViewSession;