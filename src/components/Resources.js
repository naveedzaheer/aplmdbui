import React from 'react';
import { MDBCard, MDBCardTitle, MDBCardText, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import ResourcesTron from './ResourcesTron';

const Resources = props => {
  return (
  <MDBContainer >
    <ResourcesTron />
    <MDBRow>
      <MDBCol size="12">
        <MDBCard className="card-body">
          <MDBCardTitle>Resource websites and blogs</MDBCardTitle>         
          <div className="flex-row">
            <p><a href="https://azure.microsoft.com/en-us/updates/" target="_blank"><b>Azure Updates</b></a>
            <p>Learn about important Azure product updates, roadmap, and announcements.</p></p>
            <p></p>
            <p></p>
            <p><a href="https://azure.microsoft.com/en-us/blog/"><b>Microsoft Azure Blog</b></a>
            <p>Get the latest Azure news, updates, and announcements from the Azure blog.</p></p>
            <p></p>
            <p></p>
            <p><a href="https://www.youtube.com/channel/UC-MXgaFhsYU8PkqgKBdnusQ"><b>Azure Academy</b></a>
            <p>Youtube channel with Azure deep dive videos.</p></p>
            <p></p>
            <p></p>
            <p><a href="https://aka.ms/azureinfohub"><b>Azure InfoHub</b></a>
            <p>A resource of publicly available content about Azure.</p></p>
          </div>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
  );
};

export default Resources;