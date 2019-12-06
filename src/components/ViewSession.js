import React, { Component } from "react";
import { MDBContainer } from 'mdbreact'
import ViewSessionInfo from './ViewSessionInfo';

class ViewSession extends Component {
    constructor(props) {
        super(props);
        const {id} = props.match.params;
        console.log('page-id:' + id);
        this.state = { session: null, sessionId: id};
    }

    componentDidMount() {
        console.log('componentDidMount-page-id:' + this.state.sessionId);
        var apiUrl = 'https://nzapl.azure-api.net/aplapis/session/' + this.state.sessionId + '?subscription-key=af0afe00029d45b5af4abe29659f3319';
        fetch(apiUrl)
            .then(res => res.json())
            .then((data) => {
                this.setState({session: data});
                console.log('componentDidMount' + JSON.stringify(data));
            })
            .catch(console.log)
    }

    render() {
        //console.log(this.session.lenght>0?this.session.sessionId:'Test');
        if (this.state.session == null)
        {         
            console.log('Render' +  JSON.stringify(this.state));
            return (           
                <div>Loading Data...</div>
            );
        }
        else
        {
            console.log('Render' +  JSON.stringify(this.state));
            return (           
                <ViewSessionInfo session={this.state.session} />
            );
        }

    }
}

export default ViewSession;