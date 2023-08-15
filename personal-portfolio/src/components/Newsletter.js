import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import './Newsletter.css';

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState("");
  // const [loopNum, setLoopNum] = useState(0);
  // const [isDeleting, setIsDeleting] = useState(false);
  // const [text, setText] = useState("");
  // const [delta, setDelta] = useState(300 - Math.random() * 100);
  // const [index, setIndex] = useState(1);
  // const toRotate = ["Thank you for getting in touch! I received your message and appreciate your interest I will contact you shortly to discuss further I am excited to interact with you!"];
  // const period = 2000;
  useEffect(() => {
    if (status === "success") clearFields();
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
      });
  };

  const clearFields = () => {
    setEmail("");
  };

  // useEffect(() => {
  //   let ticker = setInterval(() => {
  //     tick();
  //   }, delta);

  //   return () => {
  //     clearInterval(ticker);
  //   };
  // }, [text]);

  // const tick = () => {
  //   let i = loopNum % toRotate.length;
  //   let fullText = toRotate[i];
  //   let updatedText = isDeleting
  //     ? fullText.substring(0, text.length - 1)
  //     : fullText.substring(0, text.length + 1);

  //   setText(updatedText);

  //   if (isDeleting) {
  //     setDelta((prevDelta) => prevDelta / 2);
  //   }

  //   if (!isDeleting && updatedText === fullText) {
  //     setIsDeleting(true);
  //     setIndex((prevIndex) => prevIndex - 1);
  //     setDelta(period);
  //   } else if (isDeleting && updatedText === "") {
  //     setIsDeleting(false);
  //     setLoopNum(loopNum + 1);
  //     setIndex(1);
  //     setDelta(500);
  //   } else {
  //     setIndex((prevIndex) => prevIndex + 1);
  //   }
  // };

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col /*lg={12} md={6} xl={200}*/>
          
            
            
            {/* <h3>
              <span
               className="txt-rotate"
               dataPeriod="1000"
               data-rotate='["Thank you for getting in touch! I received your message and appreciate your interest.
               I will contact you shortly to discuss further, I am excited to interact with you!"]'
               >
              {`Hi! I'm Ishara`}{" "}
              <span className="wrap">{text}</span>
                 </span>
                 </h3> */}
            {/* {status === 'sending' && <Alert>Sending...</Alert>}
              {status === 'error' && <Alert variant="danger">{message}</Alert>}
              {status === 'success' && <Alert variant="success">{message}</Alert>} */}
          </Col>
          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              {/* <div className="new-email-bx">
                  <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
                  <button type="submit">Submit</button>
                </div> */}
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
