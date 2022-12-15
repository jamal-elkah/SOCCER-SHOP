import React from "react"; 
import { Container, Row, Col } from "react-bootstrap";
import "../styles/contact.css"

const Contact = () => {
  

  return (
    <>
    <div className="container  justify-content-center mt-5 pt-5 ">
                <div className="row">
                    <div className="col-12 ">
                        <h1 className="display-6 fw-bolder text-center "> Contact us</h1>
                        <hr />
                    </div>
                </div>
        </div>
      <Container>
        
        <Row className=" mt-3 ">
          <Col>
            <h3 style={{fontWeight:"300"}} className="text-center">You can contact us</h3>
          </Col>
        </Row>
        <Row className="sec_sp " id="cnt">
          
          <Col  className="d-flex align-items-center">
            <form  className="contact__form w-100">
              <Row>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Name" 
                    type="text"
                    required 
                  />
                </Col>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control rounded-0"
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email" 
                    required 
                  />
                  <br/>
                  
                </Col>
              </Row>
              <textarea
                className="form-control rounded-0"
                id="message"
                name="message"
                placeholder="Message"
                rows="5" 
                required
              ></textarea>
              <br />
              <Row>
                <Col lg="12" className="form-group">
                  <button className="btn ac_btn btn btn-success w-100 mt-2" type="submit"> 
                  Send
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Contact