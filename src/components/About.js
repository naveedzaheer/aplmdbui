import React from 'react';
import { MDBCard, MDBCardTitle, MDBCardText, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import AboutTron from './AboutTron';

const About = props => {
  return (
  <MDBContainer >
    <AboutTron />
    <MDBRow>
      <MDBCol size="12">
        <MDBCard className="card-body">
          <MDBCardTitle>What is Azure Power Lunch</MDBCardTitle>
          <MDBCardText>
          <p><a href="https://azure.microsoft.com/en-us/">Microsoft Azure</a> offers a comprehensive set of cloud services, integrated tools, DevOps support, and a global network of datacenters.</p>
          <p className="font-weight-bold">Are you ready to learn how to utilize the power of Azure cloud to modernize your data center, build next generation applications or gain insights into your data? </p>
          <p>Please join experts from Microsoft, your peers and partners for an Azure learning session series, targeted at helping our customers and partners derive the most value from Azure. </p>
          <p>In each 30-minutes weekly session, every Friday from 11-11:30 AM CST, this technical series will focus on keeping you up-to-date with <a href="https://azure.microsoft.com/en-us/updates/">new and appetizing updates to Azure cloud platform</a> and providing you a wholesome entree of Azure topics which you can begin leveraging in your environment immediately.</p>
          </MDBCardText>
          <div className="flex-row">
            <a href="https://nzpowerlunchfiles.blob.core.windows.net/images/Azure Power Lunch-2020.ics">Download meeting invite</a>
            <a href="https://www.youtube.com/channel/UCaqQqG2zrK3vL4UMx6seOoA?sub_confirmation=1" style={{ marginLeft: "1.25rem" }}>Subscribe to the YouTube channel</a>
            <a href="mailto:azurepowerlunch@service.microsoft.com" style={{ marginLeft: "1.25rem" }}>Contact us</a>
          </div>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
  );
};

export default About;