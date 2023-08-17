import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
//import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";
import Img01 from '../assets/img/logo04.png';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            {/* <img src={Img01} alt="" /> */}
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/ishara-pramod-ranaweera/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/isharapramod.ranaweera?mibextid=D4KYlr"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://instagram.com/_isha.a_0770?igshid=NTc4MTIwNjQ2YQ=="><img src={navIcon3} alt="Icon"/></a>
              {/* <a href="https://github.com/Ishara-Pramod-0770"><img src="https://github.com/Ishara-Pramod-0770/RKIP_Portfolio/blob/main/path-to-file.svg" alt="Icon"/></a> */}
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}