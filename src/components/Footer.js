import React from "react";
import { MDBFooter } from "mdbreact";

const Footer = () => {
  return (<MDBFooter color="indigo">
          <p className="footer-copyright mb-0 py-3 text-center">
            &copy; {new Date().getFullYear()}  Azure Power Lunch
          </p>
        </MDBFooter>
  )
}

export default Footer;